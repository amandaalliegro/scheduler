# Interview Scheduler
The present project, Interview Scheduler, is a React application developed as part of Lighthouse Labs' Web Development Bootcamp program and was build by [Amanda Arnaut Alliegro](https://github.com/amandaalliegro)

The focus of this project was build and test a React application.
To meet the testing requirements, Interview Scheduler makes use of Storybook, Jest and Cypress. 

The final product allows users to book and cancel interviews.

### A quick view:
- Here is how the booking page looks like:
![interviews and spots](https://github.com/amandaalliegro/scheduler/blob/master/docs/Interviews%20and%20spots%20available.png?raw=true)
- When someone wants to book an appointment:
![new appointments](https://github.com/amandaalliegro/scheduler/blob/master/docs/New%20appointment.png?raw=true)
- And if you need to delete one appointment, first you will have to confirm, in order to avoid mistakes
![deleting](https://github.com/amandaalliegro/scheduler/blob/master/docs/Delete%20confirmation.png?raw=trueg)

## Setup

1. Fork the Interview Scheduler API repository, clone your fork and follow the repository's README.md instructions to set up the API server.
2. Fork this repository, clone your fork in a different folder.
3. Install dependencies using the npm install command.
4. Run the API server.
5. Run the development web server using the npm start command.


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress Test Framework
Before running Cypress, make sure to run the API server in test mode by typing the following command in the server directory:

```sh
npm run test:server
```
After running the server in test mode:
```sh
npm run cypress
```

## Dependencies:
1. React
2. Storybook
3. Jest
4. Cypress
5. Axios
6. @testing-library/jest-dom
7. @testing-library/react
8. @testing-library/react-hooks
9. react-test-renderer
10. prop-types
11. classnames