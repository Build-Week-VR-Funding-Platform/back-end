
exports.seed = function(knex) {
  
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, image: 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/wzqvofphlk7vgqsqmrnp', 
        project_title: 'Smarty Bottlez', 
        project_type: 'Health Tech', 
        mission_statement: 'to make clean water efficient and accessible to all', 
        project_description: 'My smart bottle company helps you effortlessly healthy lifestyle. With just a tap of a button LIZ destroys 99.9% of harmful viruses and odor-causing bacteria in your empty bottle or clear beverage with UV-C light sterilization.', 
        funding_amount: '$99,999.00', 
        project_timeline: 'Start: 1/20/2019. Estimated finish: 1/20/2020', 
        project_assets: 'Will list soon', founders_id: 1, },

        {
          id: 2, image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        project_title: 'Plug-N-Play Solar', 
        project_type: 'Solar tech', 
        mission_statement: 'We will provide affordable solar energy for  for everyone', 
          project_description: 'we have developed innovative plug-n-play technology that allows everyone everywhere to connect to cellular power grids. We are supporting an off-grid Guatemalan coffee-producing community crowdfund investment to install the worlds first cellular power grid, so they can power their future.', 
        funding_amount: '180,986,999.00', 
          project_timeline: 'Start: 1/20/2019. Estimated finish: 1/20/2020', 
        project_assets: 'Will list soon', 
        founders_id: 2, },

        {
          id: 3, image: 'https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/apqjrlepp7pgmjcla15o', 
        project_title: 'BladeX', 
        project_type: 'Computer Technology', 
        mission_statement: 'proving light weight monitors with a promise to boost your productivity by up to 50%', 
          project_description: 'BladeX is one of the most lightweight and compact on-the-go external monitors available today. At under 2 pounds, it is easy to store and travel with. It’s available in 1080P and 4K high definition versions and this 15.6” monitor promises to boost your productivity by up to 50%.', 
        funding_amount: '60,980.00', 
          project_timeline: 'Start: 1/20/2019. Estimated finish: 1/20/2020', 
        project_assets: 'will list soon', 
       founders_id: 3, },
      ]);
    });
};
