# UserManagement

This application is a basic version of node.js with typescript. and some test cases, without req and res validation and db operation. this app exposes 3 APIs, which is the basic version used to demonstrate the CRUD operation.

## Installation
### 1. prerequisite
   a. Node.js should be installed on the machine, use the latest

   b. Typescript 

   c. Mocha 

Clone or download the application and open the root directory of the app which is UserManagement. Run the below command to set up.

```bash
npm i --save
```

### 2. Run Application

To run the application, Enter the below command at the root directory of the app

```bash
npm start
```
### 3. Run Testcase

To run the test case, Enter the below command at the root directory of the app

```bash
npm test
```


### 4. Build 

To Build the app, Enter the below command at the root directory of the app

```bash
npm run build
```

## API

### POST:-
This API is used to save the user information: 
```bash
POST: localhost:3000/users
```
Request Body sample
```json
{
"name": "name",
"email": "email@gmail.com",
"dob": "11/11/11"
}
```
### GET:-
This API is used to get the user information by user id: 
```bash
GET: localhost:3000/users/:id
```
### Delete:-
This API is used to delete the user by using the user id: 
```bash
DELETE: localhost:3000/users/:id
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)