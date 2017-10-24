var BPromise = require("bluebird");
var got = require("got");
var _ = require("lodash");

module.exports = function(zuoraClient) {

    return {
        get: ratePlanChargeId => {
            return zuoraClient.getObject("/object/rate-plan-charge/" + ratePlanChargeId);
        }
    };
};