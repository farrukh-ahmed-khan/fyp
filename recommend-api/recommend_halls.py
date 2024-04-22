# # recommend_halls.py

# import pandas as pd
# import joblib

# # Load the trained model
# model = joblib.load('hall_recommendation_model.pkl')

# def recommend_halls(user_price_preference, user_location, user_capacity):
#     # Make predictions for user preferences
#     prediction = model.predict([[user_price_preference, user_location, user_capacity]])
    
#     # Return recommendation based on prediction
#     if prediction >= 0.5:
#         return "Recommended"
#     else:
#         return "Not Recommended"


import pandas as pd
import joblib
import mysql.connector

# Load the trained model
model = joblib.load('hall_recommendation_model.pkl')

# Connect to your MySQL database
db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="weddingspot"
)

def recommend_halls(user_price_preference, user_location, user_capacity):
    # Fetch relevant data from the 'vendorform' table
    query = "SELECT price, maxPrice, location, capacity FROM vendorform"
    vendorform_data = pd.read_sql_query(query, db_connection)
    
    # Define features
    X = vendorform_data[['price', 'location', 'capacity']]
    
    # Make predictions for user preferences
    predictions = model.predict(X)
    
    # Return recommendation based on predictions
    recommendations = ["Recommended" if pred >= 0.5 else "Not Recommended" for pred in predictions]
    
    return recommendations
