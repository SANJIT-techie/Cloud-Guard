# app.py

from flask import Flask, request, jsonify
from CloudGuardMLModel.mainmodel import chat_with_ml
app = Flask(__name__)

# Controller
main_model = None  # Placeholder for the machine learning model

@app.route('/')
def index():
    return "Welcome to the Flask App!"

@app.route('/askme', methods=['POST'])
def process_text():
    data = request.get_json()
    input_text = data.get('text', '')

    response_text = chat_with_ml(input_text)
    print(response_text)
    response_data = {
        "res":response_text
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
