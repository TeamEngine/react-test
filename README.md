## Introduction

The task is to add additional functionality to our overly simple employee records application. The application is built using React, Redux, Formik and Styled-components at its base. Your solution should be using these as a basis, although creative freedom is encouraged.

Add the following:

- Additional fields to the employee creation page
  - Age
  - Status - `ACTIVE` `LEAVE_OF_ABSENCE` `TERMINATED`
  - Job title
- Enhance the page for all employees
  - Display all employees
  - Edit/delete
  - Other functions that might be useful when viewing potentially large lists of data

Optional:

- Creative flare - enhance the application's styling

## Time

You shouldn't need to spend more than 8 hours (a typical day's work) implementing this.

## Setup

- Clone, fork or download a ZIP file of this repository
- Run `npm install`
- Run `npm start`

## What's expected?

A working application with the above functionality, perhaps a little more. We we would like to see an eye for detail and that the code was written for maintainability.

Things we're looking for:

- Naming
- Structure
- A sound understanding of the basics (JSX, properties, hooks etc)
- Choice and usage of components
- User interaction - feedback

## Testing

TeamEngine strives to automate testing as much as possible and for that we use [Cypress](https://www.cypress.io/). We would like to see test cases that make sense and actually prove that something works.

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

Upload your test project to your Github account and send a link to the repository to us.
