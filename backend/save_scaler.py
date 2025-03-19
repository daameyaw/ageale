import joblib
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Dummy training data (same format as your actual drone data)
data = {
    "flight_time": [10, 20, 30, 40, 50],
    "flight_range": [2, 4, 6, 8, 10],
    "payload_capacity": [1, 2, 3, 4, 5],
    "wind_resistance": [1, 2, 3, 4, 5],
    "experience_level": [1, 2, 3, 4, 5],
    "price": [500, 1000, 1500, 2000, 2500]
}

df = pd.DataFrame(data)

# Initialize and fit the scaler
scaler = MinMaxScaler()
scaler.fit(df)

# Save the scaler
joblib.dump(scaler, "scaler.pkl")

print("Scaler saved successfully!")
