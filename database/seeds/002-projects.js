
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { image:'', project_title: '', project_type: '', mission_statement: '', project_description: '', funding_amount: '', project_timeline: '', project_assets: '' },

        { image: '', project_title: '', project_type: '', mission_statement: '', project_description: '', funding_amount: '', project_timeline: '', project_assets: '' },
        
        { image: '', project_title: '', project_type: '', mission_statement: '', project_description: '', funding_amount: '', project_timeline: '', project_assets: '' },
      ]);
    });
};
