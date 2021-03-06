/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        project: {
            model: 'project'
        },

        report: {
            model: 'report'
        },
        
        tests: {
            collection: 'test',
            via: 'exception'
        },

        name: 'string',
        stacktrace: 'text',
        testCount: 'integer'
    },

};

