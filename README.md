## Introduction

This project is the backend of simple process management. And this is the Technical Assessment Task for Developer Position at Core Devs Ltd.

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    yarn install

### Populate the Database

    node seed.js

### Run the Tests

You're almost done! Run the tests to make sure everything is working:

    yarn test

All tests should pass.

### Start the Server

    yarn start

This will launch the Node server on port 3001. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3001/api/

That confirms that you have set up everything successfully.