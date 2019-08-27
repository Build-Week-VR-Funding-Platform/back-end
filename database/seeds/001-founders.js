
// const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  
  return knex('founders')
    .then(function () {
      // Inserts seed entries
      return knex('founders').insert([
        { username: 'Liz-Smart-Bottle', password:'Stephanie', 
        name: 'Stephanie', 
        email: 'Stephanie@founder.com', 
        about: 'My smart bottle company helps you effortlessly healthy lifestyle. With just a tap of a button LIZ destroys 99.9% of harmful viruses and odor-causing bacteria in your empty bottle or clear beverage with UV-C light sterilization. '},// hash store password in db

        {
          username: 'Comonsol-Grid', 
          password: 'Melanie', 
          name: 'Melanie', email: 'Melanie@founder.com', 
          about: 'Comonsol has developed innovative plug-n-play technology that allows everyone everywhere to connect to cellular power grids. We are supporting an off-grid Guatemalan coffee-producing community crowdfund investment to install the worlds first cellular power grid, so they can power their future.' },

        { username: 'BladeX-Monitors', 
        password: 'Areum', 
        name: 'Areum', email: 'Areum@founder.com', 
        about: 'BladeX is one of the most lightweight and compact on-the-go external monitors available today. At under 2 pounds, it is easy to store and travel with. It’s available in 1080P and 4K high definition versions and this 15.6” monitor promises to boost your productivity by up to 50%.' },
        
      ]);
    });
};
