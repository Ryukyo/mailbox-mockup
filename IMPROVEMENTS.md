## Not completed

- Displaying the table used for the emails in a mobile friendly way: in the table.css I started a media query for this purpose, but displaying th and td as blocks and assigning the cells to the correct headers did not work as intended and would still have a different outcome than the expected result.
- Due to the previous point, including the images icon_arrow02 and icon_mail_sp was pointless, since they would be barely visible
- No icon for conversations, due to their missing reflection in the email sample structure (simply a property conversation: true or would further logic need to be implemented to detect conversations?)
- The chosen library for a date picker component does not seem to handle the display of 2 dates in one selection, therefore it can only be other the start or end date be displayed
- Only one body of an email is displayed, since I only found conversations a useful opportunity for displaying multiple bodies at once, but did not implement a meaningful way storing conversations
- The emails do not contain a time, therefore the displayed time is reduced to only the date. The time would need to be subtracted from the current time and if the difference would be less than 24 hours, the hour is displayed instead of the date. If the year is different, the full date would be displayed etc. Would also need to consider time zones

## Additional improvements

- Currently, if an email is already selected, the user has to click twice on another email to toggle the display of the new email. It would be more convenient to click only once if it is a click on a different email than the email currently opened
- Downloading attachments
- Searching by text
- Functionality to download, answer or forward emails
