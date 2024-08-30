from models import AQIRecord

def insert_data(city, no2, aqi, year, aqi_quality):
    new_record = AQIRecord(
        city=city,
        no2=no2,
        aqi=aqi,
        year=year,
        aqi_quality=aqi_quality
    )
    new_record.save()
    return new_record

def get_all_data():
    return list(AQIRecord.objects)

def get_data_by_city(city):
    return list(AQIRecord.objects(city=city))

def get_data_sorted_by_no2():
    return list(AQIRecord.objects.order_by('no2'))




