import folium
import pandas as pd

# Load NO2 data
# Ensure that this data has district names or IDs matching the GeoJSON file
data = {
    'district': ['Mumbai', 'Pune', 'Nagpur', 'Thane'],  # Example districts
    'no2': [25, 22, 18, 30]  # NO2 values for each district
}

# Convert data to DataFrame
df = pd.DataFrame(data)

# Load GeoJSON data for Indian districts
# Replace 'path_to_geojson' with the actual file path of the GeoJSON for Indian districts
geo_data = 'path_to_geojson/india_districts.geojson'

# Initialize a Folium map centered on India
m = folium.Map(location=[20.5937, 78.9629], zoom_start=5)

# Add the choropleth layer
folium.Choropleth(
    geo_data=geo_data,
    name='choropleth',
    data=df,
    columns=['district', 'no2'],
    key_on='feature.properties.district',  # Ensure this matches the GeoJSON properties
    fill_color='YlOrRd',
    fill_opacity=0.7,
    line_opacity=0.2,
    legend_name='NO2 Concentration (µg/m³)'
).add_to(m)

# Add layer control
folium.LayerControl().add_to(m)

# Save the map to an HTML file
m.save('india_no2_choropleth.html')

# To display the map in a Jupyter Notebook, use
# m
