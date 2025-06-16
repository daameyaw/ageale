# Import libraries
from supabase import create_client
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Step 1: Fetch data from Supabase
SUPABASE_URL = 'https://gcmsonsndbtnntkiohkf.supabase.co'
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXNvbnNuZGJ0bm50a2lvaGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTM5MDAsImV4cCI6MjA1NjU4OTkwMH0.QSkv5fBFixbkuUlFBAbz9XQmSM6iDszzLAQi11W7WEY"

# Initialize Supabase client
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("URL:", SUPABASE_URL)


# Fetch data from the "Drones" table
response = supabase.table("Drones").select("*").execute()

# Check if data is fetched successfully
if not response.data:
    print("❌ No data found in the 'Drones' table.")
else:
    # Convert data to a Pandas DataFrame
    drone_data = pd.DataFrame(response.data)
    print("✅ Data fetched successfully!")

    # Step 2: Select and normalize numeric features
    numeric_columns = ["flight_time", "flight_range", "payload_capacity", "wind_resistance", "experience_level", "price"]
    drone_numeric_data = drone_data[numeric_columns]

    # Normalize the numeric data
    scaler = MinMaxScaler()
    drone_numeric_data_scaled = pd.DataFrame(scaler.fit_transform(drone_numeric_data), columns=numeric_columns)

    # Step 3: Define the ranking score target variable
    # Example: Create a ranking score based on weighted features
    weights = {
        'flight_time': 0.2,
        'flight_range': 0.2,
        'payload_capacity': 0.2,
        'wind_resistance': 0.1,
        'experience_level': 0.1,
        'price': -0.2  # Lower price is better, so we use a negative weight
    }

    # Calculate the ranking score
    drone_numeric_data_scaled['ranking_score'] = (
        drone_numeric_data_scaled['flight_time'] * weights['flight_time'] +
        drone_numeric_data_scaled['flight_range'] * weights['flight_range'] +
        drone_numeric_data_scaled['payload_capacity'] * weights['payload_capacity'] +
        drone_numeric_data_scaled['wind_resistance'] * weights['wind_resistance'] +
        drone_numeric_data_scaled['experience_level'] * weights['experience_level'] +
        drone_numeric_data_scaled['price'] * weights['price']
    )

    # Step 4: Prepare the data for training
    X = drone_numeric_data_scaled[numeric_columns]  # Features
    y = drone_numeric_data_scaled['ranking_score']  # Target (ranking score)

    # Split the data into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 5: Define the AI model
    model = Sequential([
        Dense(64, activation='relu', input_shape=(6,)),  # Input layer (6 features)
        Dense(32, activation='relu'),                   # Hidden layer 1
        Dense(16, activation='relu'),                   # Hidden layer 2
        Dense(1, activation='linear')                   # Output layer (ranking score)
    ])

    # Compile the model
    model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])

    # Print the model summary
    model.summary()

    # Step 6: Train the model
    history = model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.2)

    # Step 7: Evaluate the model
    loss, mae = model.evaluate(X_test, y_test)
    print(f"Test Loss: {loss}")
    print(f"Test MAE: {mae}")

    # Step 8: Save the trained model
    model.save("drone_recommendation_model.h5")
    print("✅ Model saved as 'drone_recommendation_model.h5'")