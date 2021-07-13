import requests
import json

data_url = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php"


all_data = requests.get(data_url)

all_json_data = all_data.json()

sports_data_list = all_json_data["sports"]

output = []

for each_element in sports_data_list:
    new_data = {"name":each_element["strSport"], "id": int(each_element["idSport"]), "format": each_element["strFormat"], "description": each_element["strSportDescription"]}
    output.append(new_data)
    print("new data", new_data)
