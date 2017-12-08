const db = require('../');
const Sequelize = require('sequelize');

const Campuses = db.define('Campuses', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNotEmpty: function(str) {
        if(!str.length) {
          throw new Error('campus name must not be empty');
        }
      }
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    isURL: true,
    allowNull: false,
    defaultValue: 'https://www.binghamton.edu/admissions/img/hi-res/visit.jpg'
  },

  description: {
    type: Sequelize.TEXT
  }

});

module.exports = Campuses;
