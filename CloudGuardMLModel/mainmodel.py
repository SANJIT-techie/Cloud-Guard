import json
import random
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline

def get_response(intents, tag):
    for intent in intents['intents']:
        if intent['tag'] == tag:
            return (intent['responses'])
    return "I'm sorry, I don't understand that."

def chat_with_ml(message):
    intents = json.load(open('CloudGuardMLModel/tect.json', 'r'))
    model = make_pipeline(TfidfVectorizer(), SVC())

    patterns = [pattern.lower() for intent in intents['intents'] for pattern in intent['patterns']]
    tags = [intent['tag'] for intent in intents['intents'] for _ in intent['patterns']]
    model.fit(patterns, tags)

    print("Hello! I'm your chatbot. Type 'exit' to end the conversation.")

    user_input = message.lower()

    if user_input == 'exit':
        print("Goodbye! Have a great day.")

    user_intent = model.predict([user_input])[0]
    dictu = get_response(intents, user_intent)
    
    return get_response(intents, user_intent)

if __name__ == "__main__":
    chat_with_ml()