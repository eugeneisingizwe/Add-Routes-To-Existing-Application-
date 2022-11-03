# Add-Routes-To-Existing-Application-
In this project I am adding routes to an existing application I am creating a wildcard route for serving up a 404 page, as well as a diagnostics route for logging failed form validation. 

## Criteria 

As a developer, I want to be able to add routes to an existing application.

As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist.

As a developer, I want to log usage statistics from users of my site.

As a developer, I want to be able to deploy my apps to Heroku.

## Acceptance Criteria 

It's done when I have created a wildcard route in server.js that will send the users to a 404 page.

It's done when I have created a custom 404.html page for my wildcard route to serve.

It's done when I have created a POST route for /api/diagnostics that will store information about the invalid form submissions.

It's done when I have created a GET route for /api/diagnostics that will return the content of db/diagnostics/json.

It's done when I have created a fetch() request on the front end that will send a POST request to /api/diagnostics every time a user attempts to submit an invalid form.

It's done when I have tested my /api/diagnostics endpoint using Insomnia.

It's done when I have tested the wildcard route by visiting any non-existent path, like http://localhost/test.

It's done when I have deployed the finished application to Heroku.

