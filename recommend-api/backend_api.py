from flask import Flask, request, jsonify
from recommend_halls import recommend_halls

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def get_recommendation():
    user_data = request.json
    user_price_preference = user_data.get('price_preference', 0)
    user_location = user_data.get('location', '')
    user_capacity = user_data.get('capacity', 0)
    
    recommendation = recommend_halls(user_price_preference, user_location, user_capacity)
    
    return jsonify({'recommendation': recommendation})

if __name__ == '__main__':
    app.run(debug=True)