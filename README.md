# NoSQL Social Network API

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This application is purely a backend project that utilises Express.js for routing, a MongoDB database and the Mongoose ODM. The task was to build API routes for a social network web application where users can share their thoughts, react to friends thoughts, and create a friends list. This application leverages MongoDB so it has the ability to handle large amounts of unstructered data.

You are also able to see this apps true capability when testing all the routes in Insmonia. I will be demononstrating all CRUD operations within the demo below.

## Demo

Please see the application in use through this link https://drive.google.com/file/d/1NNIrRymMzmS29KKokjJNAWDTAb2HGGs2/view?usp=sharing
## Preview

![A screenshot taken in google chrome](./images/nosql%20testing.png)

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

Users can clone this repo and simply run npm i in their terminal to install the necessary dependencies to run this program. After this, all you have to do is run `npm run seed` to seed the database, followed by `npm run dev` to start the server. Once this is done open up Insomnia to see the routes being tested in action.

## Usage

The API routes have different variations from one another, this is seen below.

1. Users: (CRUD) operations for when dealing with all users and single users. When a user is deleted, their associated thought is also deleted with them.

2. Thoughts: (CRUD) operations for viewing and managing all thoughts. Thoughts can be viewed by Id also.

3. Friends: Can add and remove friends from other users

4. Reactions: Can create and delete reactions from other users thoughts


## License

    This project is licensed under the MIT License

## Contributing

I will not be accepting contributions to this repository at this time.

## Tests

N/A

## Questions

If you have any questions, feel free to reach out to me at ponzeadrian@gmail.com. Find my other projects at [Y1va](https://github.com/Y1va/).
