from flask import Blueprint, request, jsonify
from services import insert_data, get_data_by_city, get_all_data, get_data_sorted_by_no2

routes = Blueprint('routes', __name__)

@routes.route('/api', methods=['POST'])
def add_data():
    data = request.json
    city = data.get('city')
    no2 = data.get('no2')
    aqi = data.get('aqi')
    year = data.get('year')
    aqi_quality = data.get('aqi_quality')

    new_entry = insert_data(city, no2, aqi, year, aqi_quality)
    return jsonify(new_entry.to_json()), 201

@routes.route('/api', methods=['GET'])
def fetch_data():
    city = request.args.get('city')
    if city:
        data = get_data_by_city(city)
    else:
        data = get_all_data()
    
    return jsonify([entry.to_json() for entry in data]), 200

@routes.route('/api/sorted', methods=['GET'])
def fetch_data_sorted():
    data = get_data_sorted_by_no2()
    return jsonify([entry.to_json() for entry in data]), 200

