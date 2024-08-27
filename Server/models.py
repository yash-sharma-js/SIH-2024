from mongoengine import Document, StringField, IntField

class AQIRecord(Document):
    city = StringField(required=True, max_length=100)
    no2 = IntField(required=True)
    aqi = IntField(required=True)
    year = IntField(required=True)
    aqi_quality = StringField(required=True, max_length=50)

    meta = {'collection': 'aqi_records'}
