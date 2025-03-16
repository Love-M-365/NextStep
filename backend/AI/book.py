import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

# Load dataset
file_path = "Updated_Career_Guidance_Dataset.csv"
df = pd.read_csv(file_path)
print("✅ Dataset Sample:")
print(df.head())

# Ensure all career options are strings
df['career_option_1'] = df['career_option_1'].astype(str)
df['career_option_2'] = df['career_option_2'].astype(str)
df['career_option_3'] = df['career_option_3'].astype(str)

# Combine all career options into a single list before fitting LabelEncoder
all_careers = pd.concat([df['career_option_1'], df['career_option_2'], df['career_option_3']])
career_le = LabelEncoder()
career_le.fit(all_careers)  # Fit on all possible career labels

# Now transform each column
df['career_option_1'] = career_le.transform(df['career_option_1'])
df['career_option_2'] = career_le.transform(df['career_option_2'])
df['career_option_3'] = career_le.transform(df['career_option_3'])

X = df.iloc[:, 1:9]

y1 = df['career_option_1']
y2 = df['career_option_2']
y3 = df['career_option_3']

# Split data into training and testing
X_train, X_test, y_train1, y_test1 = train_test_split(X, y1, test_size=0.2, random_state=42)
_, _, y_train2, y_test2 = train_test_split(X, y2, test_size=0.2, random_state=42)
_, _, y_train3, y_test3 = train_test_split(X, y3, test_size=0.2, random_state=42)

# Train models
model1 = RandomForestClassifier(n_estimators=200, random_state=42)
model2 = RandomForestClassifier(n_estimators=200, random_state=42)
model3 = RandomForestClassifier(n_estimators=200, random_state=42)

model1.fit(X_train, y_train1)
model2.fit(X_train, y_train2)
model3.fit(X_train, y_train3)

print("\n✅ Models Trained Successfully!")

# Save the models as .pkl files
pickle.dump(model1, open("career_model_1.pkl", "wb"))
pickle.dump(model2, open("career_model_2.pkl", "wb"))
pickle.dump(model3, open("career_model_3.pkl", "wb"))

pickle.dump(career_le, open("career_le.pkl", "wb"))

print("✅ Models Saved Successfully!")

# Prediction function
def predict_career(user_responses):
    """Takes a list of 8 MCQ responses and predicts 3 career choices."""
    user_input = np.array(user_responses).reshape(1, -1)

    career1 = model1.predict(user_input)[0]
    career2 = model2.predict(user_input)[0]
    career3 = model3.predict(user_input)[0]

    # Convert back to career names
    predicted_careers = career_le.inverse_transform([career1, career2, career3])

    return predicted_careers

# Example prediction
sample_response = [3,1,2,4,1,2,3,2]
predicted_careers = predict_career(sample_response)

print("\n🎯 Predicted Career Suggestions:")
print(predicted_careers)
