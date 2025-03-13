from supabase import create_client
import pandas as pd

# Supabase connection details
SUPABASE_URL = 'https://gcmsonsndbtnntkiohkf.supabase.co'
SUPABASE_KEY =   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXNvbnNuZGJ0bm50a2lvaGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTM5MDAsImV4cCI6MjA1NjU4OTkwMH0.QSkv5fBFixbkuUlFBAbz9XQmSM6iDszzLAQi11W7WEY";


supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# Fetch data from the "Drones" table
response = supabase.table("Drones").select("*").execute()

# Convert data to a Pandas DataFrame
drone_data = pd.DataFrame(response.data)

csv_filename = "drone_data.csv"
drone_data.to_csv(csv_filename, index=False)


print(f"✅ CSV file '{csv_filename}' has been created successfully!")

# Show the first 5 rows
print(drone_data.head())
