import folium
import pandas as pd

# Example NO2 data (latitude, longitude, NO2 level)
data = pd.DataFrame({
    'lat': [40.7128, 34.0522],
    'lon': [-74.0060, -118.2437],
    'no2': [20, 50]
})

# Create a Folium map centered around the first data point
m = folium.Map(location=[data['lat'][0], data['lon'][0]], zoom_start=10)

# Add NO2 data to the map
for index, row in data.iterrows():
    folium.CircleMarker(
        location=[row['lat'], row['lon']],
        radius=row['no2'] / 10,  # Scale radius for visualization
        color='blue',
        fill=True,
        fill_color='blue'
    ).add_to(m)

# Save the map to an HTML file
m.save('map.html')
