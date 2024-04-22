# train_model.py

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# Load dataset (replace this with your actual dataset)
hall_data = pd.read_csv('hall_data.csv')

# Define features and label
X = hall_data[['price', 'location', 'capacity']]  # Features
y = hall_data['suitable']  # Label (1 if suitable, 0 if not)

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)

print("Training Accuracy:", train_score)
print("Testing Accuracy:", test_score)

# Save the trained model
joblib.dump(model, 'hall_recommendation_model.pkl')
