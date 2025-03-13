from supabase import create_client
import pandas as pd

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

    # Save the numeric data to a CSV file
    numeric_csv_filename = "drone_numeric_data.csv"
    drone_numeric_data.to_csv(numeric_csv_filename, index=False)
    print(f"✅ CSV file '{numeric_csv_filename}' with numeric data has been created successfully!")