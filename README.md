# Angular4
Flight Search Engine
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

Note: Dev environment for now is limited to Chrome browser only. Not yet tested on other browsers.
