import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  export MONGO_URL="mongodb://localhost:3001/databasename";
});
