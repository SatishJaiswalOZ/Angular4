# Angular4
Flight Search Engine (POC only to demonstrate the Angular 4 (Full Stack) & web development understanding rather then production ready module)

To Start/Config Mocked API (currently exist in the same project):

1. Open mocked-api -> npm install -g apimocker

2. npm install

3. Go to C:\Users\Satish\AppData\Roaming\npm\node_modules\apimocker & edit config.json to update mockDirectory as "mockDirectory": "[root directory full path]/mocked-api/MockData/FlightDataDummy"

4. In trminal run: apimocker to start the server

5. Check if response is coming via hitting http://localhost:7878/first

6. Service is up now.

To run the App:

1. cd my-component-library

2. Remove ready-only from root directory i.e. my-component-library

3. npm install @angular/cli -g

4. npm install

5. run ng serve

6. http://localhost:4200/

To run test: npm test

Note: 

1. Dev environment for now is limited to Chrome browser only. Not yet tested on other browsers.

2. Date picker has minor issue in responsive **

3. At some place in UI, templates/components can be created to reuse the same.

KNOWN ISSUES IN EXTERNAL PLUGINS:

** .ng2-datepicker plugin has size issue of it's Input type due to which it's not responsive. If deliberately style=\"width:100%\"  \n is placed at line 1637 of node_modules\ng2-date-picker then it works. I'll check this later to solve if app component level workaround can be done.

Sample JSON used for mocking. Please use "from" & "to" to search flights for now:

  .\mocked-api\MockData\FlightDataDummy\dummyData.json