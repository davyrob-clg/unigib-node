# Node.js MySQL UniGib Cloud Computing App for FlyGib - Flying Taxis for Gibraltar

This is a CRUD (Create, Read, Update, Delete) application developed using Node.js and MySQL, showcasing database management and API.  It demonstrates what would need to be done iin order to have an application with MySql

---

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Description

The app provides a basic framework to manage a small customer database for the FlyGib company where we would need to keep a customer register of those wanting to use the Gib Flying Taxi Service. 

---

## Key Features

- **CRUD Operations:** This project encompasses all four essential database operations - Create, Read, Update, and Delete. Users can seamlessly interact with the database through a user-friendly interface.

- **Node.js:** Powered by Node.js, this application leverages the asynchronous, event-driven architecture of Node.js for efficient and responsive server-side operations. Node.js enables real-time updates and a high level of scalability.

- **MySQL Database:** The application is deeply integrated with MySQL, a powerful and widely-used relational database management system. It showcases effective data storage, retrieval, and management techniques.

- **API Development:** The project exposes a set of well-documented APIs, enabling developers to interact programmatically with the underlying database. This makes it suitable for building both web and mobile applications that require data manipulation.

- **User-Friendly Interface:** The project includes an intuitive user interface that allows GibFly to easily create, read, update, and delete records within the database. This interface serves as an excellent reference for frontend development using MySQL

- **Scalable and Maintainable:** Designed with scalability and maintainability in mind, the project follows best practices for code organization and separation of concerns, making it adaptable to the evolving needs of your application.

- **Open Source:** This GitHub project is open-source, providing a valuable resource for developers to learn, explore, and contribute to the world of Node.js and MySQL application development.

## Acks

This project was cloned from  https://github.com/TadeopCreator/crud-nodejs-mysql

---

## Installation

1. Clone this repository to your local machine:
```shell
git clone https://github.com/davyrob-clg/unigib-node
```

Navigate to the project directory:

```shell
cd unigib-node
```
Install the project dependencies:

```shell
npm install
```
Set up your MySQL database and update the database configuration in .env with your credentials. Use the .env.sample as a guide. 

Note that because this library is a bit older - you should create the user on the command line on the Linux node server.  SQL Server 8 is much more strict on auth so this forces a native password. 

```shell
sudo su -
mysql -uroot
CREATE USER 'unigib'@'%' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';
```


Run the application:

```shell
npm start
```

## Usage

Access the application through your web browser or make API requests programmatically.

Use the user-friendly interface to perform CRUD operations on the database.

## API Endpoints

The following API endpoints are available:

GET /api/records: Retrieve all records from the database.
GET /api/records/:id: Retrieve a specific record by ID.
POST /api/records: Create a new record.
PUT /api/records/:id: Update an existing record by ID.
DELETE /api/records/:id: Delete a record by ID.
For detailed API documentation and usage examples, refer to the API Documentation.

License
This project is licensed under the MIT License.
