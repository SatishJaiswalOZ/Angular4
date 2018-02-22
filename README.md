# Angular4
Flight Search Engine (POC only to demonstrate the Angular 4 (Full Stack) & web development understanding rather then production ready module)

To Start/Config Mocked API:

1. Open mocked-api -> npm install -g apimocker

2. npm install

3. Go to C:\Users\Satish\AppData\Roaming\npm\node_modules\apimocker & edit config.json to update mockDirectory as "mockDirectory": "[root directory full path]/mocked-api/MockData/FlightDataDummy"

4.In trminal run: apimocker to start the server

5.Check if response is coming via hitting http://localhost:7878/first

6. Service is up now.

To run the App:

1.cd my-component-library

2.Remove ready-only from root directory i.e. my-component-library

3.npm install @angular/cli -g

4.npm install

5.run ng serve

6.http://localhost:4200/

To run test: npm test

Note: Dev environment for now is limited to Chrome browser only. Not yet tested on other browsers.

Sample JSON used for mocking. Please use "from" & "to" to search flights for now:

[
  {
  
    "id": 0,
    "fare":"9000",
    "flightName": "Kingfisher Goa-Delhi",
    "from": "Goa",
    "to": "Delhi",
    "departureTime": "02:30pm",
    "arrivalTime": "03:30pm",
    "date": "03/20/2016",
    "flightRate": "1500 INR"
    
  },
  {
    "id": 1,
    "fare":"2000",
    "flightName": "Kingfisher Delhi-Goa",
    "from": "Goa",
    "to": "Delhi",
    "departureTime": "02:30pm",
    "arrivalTime": "03:30pm",
    "date": "03/21/2016",
    "flightRate": "1500 INR"
  },
  {
    "id": 2,
    "fare":"3000",
    "flightName": "Spice Jet Delhi-Thailand",
    "from": "Delhi",
    "to": "Thailand",
    "departureTime": "02:05pm",
    "arrivalTime": "03:50am",
    "date": "17/03/2016",
    "flightRate": "12696 INR"
  },
  {
    "id": 3,
    "fare":"4500",
    "flightName": "Malindo Delhi-Dubai",
    "from": "Delhi",
    "to": "Dubai",
    "departureTime": "12:55pm",
    "arrivalTime": "08:15am",
    "date": "17/03/2016",
    "flightRate": "24135 INR"
  },
  {
    "id": 4,
    "fare":"5500",
    "flightName": "Malaysia Airlines Delhi-Bangkok",
    "from": "Delhi",
    "to": "Pune",
    "departureTime": "11:40pm",
    "arrivalTime": "10:15am",
    "date": "17/03/2016",
    "flightRate": "33909 INR"
  }
]

Pending but with same pattern:

1.Slider event firing to instantiate flight search (alike Flight search button with fare filter)

2.Date picker has minor issue in responsive

3.At some place in UI, templates can be created to reuse the same.

KNOWN ISSUES IN EXTERNAL PLUGINS:

1.ng2-datepicker plugin has size issue of it's Input type due to which it's not responsive. If deliberately style=\"width:100%\"  \n is placed at line 1637 of node_modules\ng2-date-picker then it works. I'll check this later to solve if app component level workaround can be done.
