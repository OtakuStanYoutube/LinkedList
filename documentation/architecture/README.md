# Architecture Of DogeHouse!


![Architecture][architecture]

## Link Creation
All the link creation ogic is handeled by backend express server and data stored using Mongo DB. Once you create a an account or login to your account it takes you to your dashboard where you can create your links

## Authentication
The authentication functionality is based on JWT tokens. The access token expires after 10hr of activity. Once it expires th refresh token is used to generate another one. All your passwords are hashed and completely secured on the database.

## Frontend
All user data is diplayed on the dashboard where user can create, update or delete their links. The public List page only displays your links to your audience.

<!-- MARKDOWN LINKS & IMAGES -->
[architecture]: Backend_Architecture_2.png