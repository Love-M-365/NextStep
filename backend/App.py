from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS to handle cross-origin requests
import pickle
import numpy as np

app = Flask(__name__)

# Enable CORS for all routes to allow cross-origin requests
CORS(app)

# Load the saved models and LabelEncoder
model1 = pickle.load(open('AI/career_model_1.pkl', 'rb'))
model2 = pickle.load(open('AI/career_model_2.pkl', 'rb'))
model3 = pickle.load(open('AI/career_model_3.pkl', 'rb'))
career_le = pickle.load(open('AI/career_le.pkl', 'rb'))  

# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Get data in JSON format
        user_responses = data['responses']  # List of 8 MCQ responses

        # Validate input
        if len(user_responses) != 8:
            return jsonify({'error': 'Please provide exactly 8 responses.'}), 400

        # Predict career choices
        predicted_careers = predict_career(user_responses)
        return jsonify({"career_options": predicted_careers.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Function to predict career paths
def predict_career(user_responses):
    user_input = np.array(user_responses).reshape(1, -1)

    # Make predictions using the 3 models
    career1 = model1.predict(user_input)[0]
    career2 = model2.predict(user_input)[0]
    career3 = model3.predict(user_input)[0]

    # Convert back to career names
    predicted_careers = career_le.inverse_transform([career1, career2, career3])
    return predicted_careers

if __name__ == '__main__':
    app.run(debug=True)
