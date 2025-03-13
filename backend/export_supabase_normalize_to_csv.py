from supabase import create_client
import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Supabase connection details
SUPABASE_URL = 'https://gcmsonsndbtnntkiohkf.supabase.co'
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXNvbnNuZGJ0bm50a2lvaGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTM5MDAsImV4cCI6MjA1NjU4OTkwMH0.QSkv5fBFixbkuUlFBAbz9XQmSM6iDszzLAQi11W7WEY"

# Initialize Supabase client
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# Fetch data from the "Drones" table
response = supabase.table("Drones").select("*").execute()

# Check if data is fetched successfully
if not response.data:
    print("❌ No data found in the 'Drones' table.")
else:
    # Convert data to a Pandas DataFrame
    drone_data = pd.DataFrame(response.data)
    print("✅ Data fetched successfully!")

    # Selecting only numeric features
    numeric_columns = ["flight_time", "flight_range", "payload_capacity", "wind_resistance", "experience_level", "price"]
    drone_numeric_data = drone_data[numeric_columns]

    # Show the cleaned numeric dataset
    print("🔄 Selected numeric columns:")
    print(drone_numeric_data.head())

    # Normalize the numeric data
    scaler = MinMaxScaler()
    drone_numeric_data_scaled = pd.DataFrame(scaler.fit_transform(drone_numeric_data), columns=numeric_columns)

    # Show the normalized data
    print("🔄 Normalized numeric data:")
    print(drone_numeric_data_scaled.head())

    # Save the normalized data to a CSV file
    normalized_csv_filename = "drone_numeric_data_normalized.csv"
    drone_numeric_data_scaled.to_csv(normalized_csv_filename, index=False)
    print(f"✅ CSV file '{normalized_csv_filename}' with normalized numeric data has been created successfully!")