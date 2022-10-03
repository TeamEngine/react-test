## Introduction

The task is to make to our overly simple employee records tool useable. The application is built using React, Redux, Formik and styled-components. Build the speficied functionality upon the existing project, although creative freedom is encouraged.

The project is built with three views; an start page, list view and a create view. The data consists of a list of `employee` records store in redux. A complete example of an `employee` entry is available in `src/redux/employees/index.js`.

Your task is to extend the current funcitonality and implement new features and views. Here is the list of things to be implemented:

- Additional fields to the employee creation page (`src/components/Create/index.js`).
  - Birth date - `YYYY-MM-DD`
  - Status - <`ACTIVE` | `LEAVE_OF_ABSENCE` | `TERMINATED`>
  - Job title
- Enhance the page for all employees (`src/components/View/index.js`)
  - Display all employees
  - Edit/Delete
  - Functions that might be useful when viewing potentially large lists of data
- Optional:
  - Creative flare - enhance the application's styling

## Time

You should aim to spend around 8 hours of work on this code test.

## Required technologies

- [node](https://nodejs.org/en/download/)
- redux dev tools (not required but very helpful)

## Setup

- Clone, fork or download a ZIP file of this repository
- Run `npm install`
- Run `npm start`

## What's expected?

A working application with the above functionality, perhaps a little more. We would like to see an eye for detail and that the code was written for maintainability and scalability.

Things we're looking for:

- Naming
- Structure
- A sound understanding of the basics (JSX, hooks, redux etc)
- Usage of components
- User interaction - feedback

## Testing

We would like to see the existing cypress test suite extended to test/verify functionality added by you. Documentation can be found [here](https://docs.cypress.io/guides/overview/why-cypress).

### Running tests

Cypress comes with a test GUI which can be opened in Chrome. To open the GUI, use:

```
npx cypress open
```

If you want to run Cypress in headless mode instead, run the following command:

```
npx cypress run
```

## Submission

Upload the test project to a private repository in your Github account and then give users `martinhybergTE` and `agnessuTE` access to that repository.
