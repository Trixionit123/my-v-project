from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

WEATHER_API_KEY = os.getenv('WEATHER_API_KEY')
WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5'

@app.route('/api/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city', 'Moscow')
    try:
        response = requests.get(
            f'{WEATHER_BASE_URL}/weather',
            params={
                'q': city,
                'appid': WEATHER_API_KEY,
                'units': 'metric'
            }
        )
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/forecast', methods=['GET'])
def get_forecast():
    city = request.args.get('city', 'Moscow')
    try:
        response = requests.get(
            f'{WEATHER_BASE_URL}/forecast',
            params={
                'q': city,
                'appid': WEATHER_API_KEY,
                'units': 'metric'
            }
        )
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 