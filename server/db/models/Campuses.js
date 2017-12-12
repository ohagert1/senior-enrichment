const db = require('../');
const Sequelize = require('sequelize');
const Students = db.Students;

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
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  }

});

Campuses.beforeDestroy((campus) => {
  Students.destroy({where: {CampusId: campus.id}});
});

Campuses.beforeValidate((campus) => {
  if(!campus.imageUrl) {
    campus.imageUrl = "https://i.ytimg.com/vi/45bMZuOppIU/maxresdefault.jpg";
  }
});


module.exports = Campuses;
