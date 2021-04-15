# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Exercise

We will use Open Weather Data to create a single page application that presents a list of 5 European cities (you
can choose the ones you prefer).
Your goal is to get the current weather situation displaying the city name plus average temperature and the wind
strength. Clicking on an item shows the forecast in the next hours.
You can adjust the UI how you see fit for the best result but sticking to a single page application is mandatory.

## Project description

This is a pretty standard Angular app, that uses services and Observables for data flows. The app separated into 2
modules, one of which is lazy-loaded, because not every user could be interested in a forecast. A forecast data is
displayed via an auxiliary router outlet so as to give the flexibility to display other info when the app grows and it
gives an opportunity to save the chosen city in an address bar. The app has a core module with stuff that imports into
an app.module only once and shared module with entities that could be useful in every module. A Resolver allows fetching
data during the navigation. The Weather Service is responsible for fetching data from openweather API, it uses the app
API key to access this information. The key is located in the environment file, but it should be retrieved from a server
or even communicate with a server, that fetches data for a frontend app for security reasons. This key could also be
added via the interceptor, instead of adding it manually to both types of requests. Unfortunately, unit tests are not
implemented yet, as well I'd prefer to add a "Not found" page and an interceptor for errors in the nearest future, but
I'm out of time. I hope that rest of the code and components are self-documenting and simple to understand. Thank you
for your time.

## Development server

Run `npm run start` to start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
### not implemented yet
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
