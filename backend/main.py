from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import tensorflow as tf
import numpy as np
import pandas as pd

# Load the trained model
model = tf.keras.models.load_model("drone_recommendation_model.h5")

# Load the saved MinMaxScaler
scaler = joblib.load("scaler.pkl")

# Initialize FastAPI
app = FastAPI()

# Allow CORS for specific origins
origins = [
    "http://localhost:5173",  # React frontend
    "http://127.0.0.1:5173",  # React frontend (if running on a different port)
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Define a prediction endpoint
@app.post("/predict")
def predict_ranking(user_input: dict):
    """
    Accepts drone feature values as input, normalizes them using MinMaxScaler, 
    and predicts the ranking score using the trained AI model.
    """
    try:
        # Convert input to a DataFrame
        df = pd.DataFrame([user_input])

        # Ensure all required columns are present
        required_columns = ["flight_time", "flight_range", "payload_capacity", "wind_resistance", "experience_level", "price"]
        for col in required_columns:
            if col not in df.columns:
                return {"error": f"Missing required field: {col}"}

        # Normalize input using the saved scaler
        scaled_input = scaler.transform(df)

        # Make prediction
        prediction = model.predict(scaled_input)

        # Return the ranking score
        return {"ranking_score": float(prediction[0][0])}
    
    except Exception as e:
        return {"error": str(e)}

# Run the FastAPI server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
