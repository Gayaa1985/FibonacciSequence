# Fibonacci Series

## Prerequisite

* Node
* Visual Studio Code
* Postman
* Gitbash

## Generate Fibonacci series

To get the fibonacci series using the GET method from postman following steps are used.

1. Clone the git repository into the local.
2. Go to the root folder of the project and do npm install. This step will install all the required packages than are present in the package.json file.
3. Once all the packages are installed, run the below command.
    node main.js
4. Now the application will be listening in the port 3000.
5. From the postman, Using GET method hit the below url.
    http://localhost:3000/fibonacci/10
6. We will get the fibonacci series in the response.

## Run Unit test

To run the unit test we are using mocha and chai package. Perform the below steps.

1. From the root folder execute the below command to run the tests.
    npm test
2. This will run all the tests specified under tests folder.