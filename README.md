# Te Puna Reo o Raparapaririki

Phase 2 personal project

## Getting started

```
git clone https://github.com/Pouramua/Raparapaririki.git
npm install
npm run knex migrate:latest
npm run knex seed:run
npm start
```

## User Stories
1. As a user I would like to be greeted with a home page.
    - I want to have a login/sign up button
    - I want to have access to general information about the Puna.<br><br>
2. As an administrator I want to add a new child and their information so that I can keep a record of all the children and the parents can access their records.
    - This will involve writing to more than one table in separate queries.
    - You should create a form to enter the user information, and a route which will be the form's action.<br><br>
3. As a user I want to be able to access information about my own child after logging in so that I can find out more about them.
    - This is a one to one or many depending how many children you have relationship: a user or parent has ONE profile page and one or many kids connected to that one page.
    - You'll need a profiles table with a user_id column and some other useful information about the user, like some ID number that'll relate them to their child/rens information or data.<br><br>
4. 
