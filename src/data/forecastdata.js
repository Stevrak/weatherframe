// test data for weather widget (so dont have to pay for monthly api)

const forecastdata = {
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-07 11:38",
        "localtime_epoch": 1567856280,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "03:38 PM",
        "temperature": 18,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 0,
        "wind_degree": 345,
        "wind_dir": "NNW",
        "pressure": 1011,
        "precip": 0,
        "humidity": 58,
        "cloudcover": 0,
        "feelslike": 18,
        "uv_index": 5,
        "visibility": 16
    },
    "forecast": {
        "2020-12-10": {
            "date": "2020-12-10",
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
            "hourly": [
                {
                    "time": "0",
                    "temperature": 18,
                    "wind_speed": 28,
                    "wind_degree": 15,
                    "wind_dir": "NNE",
                    "weather_code": 122,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                    ],
                    "weather_descriptions": [
                        "Cloud_slight_rain"
                    ],
                    "precip": 0,
                    "humidity": 68,
                    "visibility": 10,
                    "pressure": 1008,
                    "cloudcover": 75,
                    "heatindex": 18,
                    "dewpoint": 12,
                    "windchill": 18,
                    "windgust": 35,
                    "feelslike": 18,
                    "chanceofrain": 0,
                    "chanceofremdry": 87,
                    "chanceofwindy": 0,
                    "chanceofovercast": 90,
                    "chanceofsunshine": 15,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
                    "uv_index": 0
                }
            ]
        },
        "2020-12-11": {
            "date": "2020-12-11",
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
            "hourly": [
                {
                    "time": "0",
                    "temperature": 18,
                    "wind_speed": 28,
                    "wind_degree": 15,
                    "wind_dir": "NNE",
                    "weather_code": 122,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                    ],
                    "weather_descriptions": [
                        "Overcast"
                    ],
                    "precip": 0,
                    "humidity": 68,
                    "visibility": 10,
                    "pressure": 1008,
                    "cloudcover": 75,
                    "heatindex": 18,
                    "dewpoint": 12,
                    "windchill": 18,
                    "windgust": 35,
                    "feelslike": 18,
                    "chanceofrain": 0,
                    "chanceofremdry": 87,
                    "chanceofwindy": 0,
                    "chanceofovercast": 90,
                    "chanceofsunshine": 15,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
                    "uv_index": 0
                }
          ]
        },
        "2020-12-12": {
            "date": "2020-12-12",
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
            "hourly": [
                {
                    "time": "0",
                    "temperature": 18,
                    "wind_speed": 28,
                    "wind_degree": 15,
                    "wind_dir": "NNE",
                    "weather_code": 122,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                    ],
                    "weather_descriptions": [
                        "Overcast"
                    ],
                    "precip": 0,
                    "humidity": 68,
                    "visibility": 10,
                    "pressure": 1008,
                    "cloudcover": 75,
                    "heatindex": 18,
                    "dewpoint": 12,
                    "windchill": 18,
                    "windgust": 35,
                    "feelslike": 18,
                    "chanceofrain": 0,
                    "chanceofremdry": 87,
                    "chanceofwindy": 0,
                    "chanceofovercast": 90,
                    "chanceofsunshine": 15,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
                    "uv_index": 0
                },
            ]
        },
        "2020-12-13": {
            "date": "2020-12-13",
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
            "hourly": [
                {
                    "time": "0",
                    "temperature": 18,
                    "wind_speed": 28,
                    "wind_degree": 15,
                    "wind_dir": "NNE",
                    "weather_code": 122,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                    ],
                    "weather_descriptions": [
                        "Overcast"
                    ],
                    "precip": 0,
                    "humidity": 68,
                    "visibility": 10,
                    "pressure": 1008,
                    "cloudcover": 75,
                    "heatindex": 18,
                    "dewpoint": 12,
                    "windchill": 18,
                    "windgust": 35,
                    "feelslike": 18,
                    "chanceofrain": 0,
                    "chanceofremdry": 87,
                    "chanceofwindy": 0,
                    "chanceofovercast": 90,
                    "chanceofsunshine": 15,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
                    "uv_index": 0
                }
            ]
        },
        "2020-12-14": {
            "date": "2020-12-14",
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
            "hourly": [
                {
                    "time": "0",
                    "temperature": 18,
                    "wind_speed": 28,
                    "wind_degree": 15,
                    "wind_dir": "NNE",
                    "weather_code": 122,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                    ],
                    "weather_descriptions": [
                        "Overcast"
                    ],
                    "precip": 0,
                    "humidity": 68,
                    "visibility": 10,
                    "pressure": 1008,
                    "cloudcover": 75,
                    "heatindex": 18,
                    "dewpoint": 12,
                    "windchill": 18,
                    "windgust": 35,
                    "feelslike": 18,
                    "chanceofrain": 0,
                    "chanceofremdry": 87,
                    "chanceofwindy": 0,
                    "chanceofovercast": 90,
                    "chanceofsunshine": 15,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
                    "uv_index": 0
                }
            ]
        }
    }
}
module.exports = forecastdata;
