import firebase_admin
from firebase_admin import credentials, auth, db
from flask import Flask, request, jsonify
from flask_cors import CORS


cred = credentials.Certificate("./credentials.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://pure-focus-2e5bf-default-rtdb.firebaseio.com/"
})
firebase_app = firebase_admin.get_app()

app = Flask(__name__)
CORS(app)

def success_response(data: any, code: int):
    """
    Returns a success response with the given data and status code.

    :param data: The data to include in the response.
    :param code: The HTTP status code.
    :return: A Flask JSON response with the given data and status code.
    """
    return jsonify(data), code


def error_response(error: str, code: int):
    """
    Returns an error response with the given error message and status code.

    :param error: The error message to include in the response.
    :param code: The HTTP status code.
    :return: A Flask JSON response with the error message and status code.
    """
    return jsonify({'error': error}), code


@app.route("/", methods=["GET"])
def index():
    return success_response("Hello, world!", 200)

if __name__ == '__main__':
    app.run(debug=True)
