# My_Dreadful_Tomato_testTask

This application was developed for a test task and was cloned from https://github.com/it-does-not-matter/test-task .

## Development Highlights

I built the application with as few components as possible, reusing them whenever possible. This can be observed in the structure of pages and buttons. To optimize the performance of the generated components, I adjusted their update strategies.

Several base SCSS files were created for convenient use of variables, fonts, and other auxiliary elements. I utilized the advantages of SCSS syntax where it was appropriate and indeed simplified working with styles.

The business logic related to data retrieval is isolated within a service. Data retrieval is implemented by isolating the business logic within a service. The service obtains data regarding the user's current page and filters the data accordingly to the selected page.

A calendar was handcrafted within the application to meet specific requirements. It features functionality for selecting only a specific range of years.

Search within the input field is implemented without Angular/Forms due to conflicts between the project's version and those available to me. (I chose not to update the project's packages to avoid unnecessary errors). Therefore, the search is triggered after pressing Enter or the search icon.

The product filter within the application operates on the principle of data retrieval and sequential filtering using the service.
