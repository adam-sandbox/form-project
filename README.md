# Readme

- Run: `yarn start`
- Storybook: `yarn storybook`
- Test: `yarn test`

## Overview

- React as primary UI library
- Scaffold & build using Create React App
- CSS Modules for styling
- Storybook for component library
- Snapshot tests derived from Storybook entries
- Custom Hook for form state management, event handling etc

## Notes

- Implemented `Form`, `FormField`, `FormButton` etc as part of a shared component library
  - `Form` accepts a definition of fields
  - `FormField` accepts a field definition, which includes a `type`, `label`, `validator` etc
- Please note:
  - Using a relatively untouched/un-ejected `create-react-app` setup eg. default HTML template, favicon etc. Production app would require further customisation/cleanup.
  - Used https://reqres.in as the testing API as http://dummy.restapiexample.com was down for maintenance

## Areas for improvement

- Field validation is very much placeholder, using simple string/number checks. Should validate specific date format(s), support for currency format(s), add support for multiple validators per field
- Better date selection: currently just utilising native browser selection (where available). Depending on project requirements, may make sense to leverage a 3rd-party picker, or implement a more robust custom picker
- Styling - more polish, validation feedback, animation etc
- API error handling
- More extensive tests...
- Internationisation via `react-intl`
- Further cross-browser/device testing, accessibility
