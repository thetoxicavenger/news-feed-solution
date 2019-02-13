# User Stories:
* All articles in DB are displayed in grid format with cards for each article.
* Each article card should display the title and image associated with the article.
* Users can add a new article by providing its title and image link to a form.
* When the user submits the form, a network request should persist the new article to the database.
* When the network request goes through successfully, the new article should be added to bottom of article grid.

# API
- Routes:
    - GET /articles
    - POST /articles
- Setup:
    - `npm run start:api`

# Pitfalls
- Make sure your new article network request includes a `'Content-Type': 'application/json'` header.
- You should not include `"id"` in the post body. The api will take care of auto-incrementing this for you.
- You will need to utilize the json response on POST success, as it will provide the id for the new article you just added.
