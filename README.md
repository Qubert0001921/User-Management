# User Management System

## Application requirements
Node.js, MySQL, npm

## How to run application?
First you have to install all project packages by typing ```npm install``` in the console. Second you have to type ```npm run start``` to run a server. Next you have to run and configure MySQL server. Just go to XAMPP and launch apache and MySQL. Create a database ```usermanagement``` and create a table ```users```.

<table>
  <th>id</th>
  <th>firstName</th>
  <th>lastName</th>
  <th>surrname</th>
  <th>email</th>
  <th>role</th>
  <th>phone</th>
  <th>createdAt</th>
</table>

Set ```id``` as a primary key and INT. The other fields set on TEXT.

Last thing you have to do is create a .env file and set 4 variables: DB_HOST, DB_PORT, DB_USER and DB_PASSWORD. 
