# Angular4
Flight Search Engine (POC only to demonstrate the Angular 4 (Full Stack) & web development understanding rather then production ready module)


Important:: It has data dependency on API project that has to be started. Please check ReadMe.md of https://github.com/SatishJaiswalOZ/Mocked-API


To run the App:

1. cd my-component-library

2. Remove ready-only from root directory i.e. my-component-library

3. npm install @angular/cli -g

4. npm install

5. run ng serve

6. http://localhost:4200/

To get ready for production:

1. ng build --prod --aot

2. npm install http-server -g

3. Run production build using http-server ./dist

4. Hit http://127.0.0.1:8080/ OR the url provided in the terminal of http-server


Note: 

1. Dev environment for now is limited to Chrome browser only. Not yet tested on other browsers.

2. Date picker has minor issue in responsive **

KNOWN ISSUES IN EXTERNAL PLUGINS:

** .ng2-datepicker plugin has size issue of it's Input type due to which it's not responsive. If deliberately style=\"width:100%\"  \n is placed at line 1637 of node_modules\ng2-date-picker then it works. I'll check this later to solve if app component level workaround can be done.

Sample JSON used for mocking. Please use "from" & "to" to search flights for now:

  .\mocked-api\MockData\FlightDataDummy\dummyData.json

TEST & COVERAGE using Angular Cli via Karma:

1. To run test: ng test

    Tests will execute after a build is executed via Karma, and it will automatically watch your files for changes. You can run tests a single time via --watch=false or --single-run.

2. You can run tests with coverage via --code-coverage. The coverage report will be in the  ./my-component-library/coverage/index.html directory.

3. If you want to inspect how angular cli was configured, generate a project with the angular-cli and execute on the root folder ng eject, that will allow you to see the webpack configuration file.