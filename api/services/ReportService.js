/**
 * ReportService
 *
 * @description :: Server-side logic for managing Testings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getReportDistributionWithTimeStamp: function(id, cb) {
        var distribution = {
            testDistribution: null,
            logDistribution: null        
        };
        
        Report.findOne({ 
            id: id
        }).sort({startTime: 'desc'}).exec(function(err, result) {
            
            Report.getTestDistribution(result.id, function(testDist) {
                Report.getLogDistribution(testDist[0].owner, function(logDist) {
                    
                    testDist.push({ reportTime: new Date(result.startTime) });
                    logDist.push({ reportTime: new Date(result.startTime) });
                                                
                    distribution.testDistribution = testDist;
                    distribution.logDistribution = logDist;

                    cb(distribution);                       
                });
            });
        });
    },
};