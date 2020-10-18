## Selected tools

- I chose React since I'm most familiar with it.
- React-Datepicker seemed the most popular choice and the documentation looked very promising, but it turned out to be not the best choice for date range pickers in a single input field.
- Moment.js was the usual choice for dealing with date/time formatting and calculation (for filtering emails by the given date range), but for a one time use it would not have been necessary and could save space and time to not use it

## Design choices

There are three main parts, but for reusability they have been split in more components

### Head

The head mainly contains the date picker and clicking on the search icon filters the "archived" emails, which can be found in /src/assets/emails.json. A date picker was chosen over an input field, since it would guide the user to give the correct input and a minimum of validation would be necessary. From a security point of view, it is also preferable to not let a user input unexpected scripts etc.

**Filtering with the date picker needs to align with the dates which the sample emails have been set to. Currently: 5 emails in the range of 20th to 25th October**

### Email Table

The emails are displayed in a table, which can be sorted by clicking on the header buttons. The sorting uses a custom hook as a helper function. The custom hook deals with the request for ascending or descending order and makes use of memoization to reduce the runtime of of the sorting when dealing with a large number of emails, which is to be expected for an email archive.

### Selected Email

Clicking on an email results in the detailed display of the contents, mainly the body. According to the structure of a real email, adjustments can be made, e.g. showing images.
