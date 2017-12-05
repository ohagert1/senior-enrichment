const db = require('../');
const Sequelize = require('sequelize');

//STUDENT MUST BELONG TO CAMPUS

const Students = db.define('Students', {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNotEmpty: function(str) {
        if(!str.length) {
          throw new Error('first name may not be empty');
        }
      }
    }
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNotEmpty: function(str) {
        if(!str.length) {
          throw new Error('last name may not be empty');
        }
      }
    }
  },

  email: {
    type: Sequelize.STRING,
    isEmail: true,
    validate: {
      isNotEmpty: function(str) {
        if(!str.length) {
          throw new Error('email may not be empty');
        }
      }
    }
  },

  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      withinRange: function(gpa) {
        if(!(gpa > 0 && gpa <= 4)) {
          throw new Error('gpa must be between 0.0 and 4.0');
        }
      }
    }
  },

  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
    }
  }
});

module.exports = Students;
