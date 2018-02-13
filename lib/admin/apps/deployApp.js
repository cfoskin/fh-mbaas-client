var mbaasRequest = require('../../mbaasRequest/mbaasRequest.js');
var config = require('../../config/config.js');
var constants = require('../../config/constants.js');

/**
 * Deploying App Details To An Mbaas
 * @param params
 * @param cb
 */
function deploy(params, cb) {
  var mbaasUrl = params[constants.MBAAS_CONF_KEY].__mbaasUrl;
  console.log("*** in admin/apps/deployApp.js.deploy");

  params.resourcePath = config.addURIParams(constants.APPS_BASE_PATH + "/deploy", params);
  params.method = "POST";
  params.data = params.data || {};
  params.data.mbaasUrl = mbaasUrl;
  console.log("*** in admin/apps/deployApp.js.deploy - calling mbaasRequest.admin");

  mbaasRequest.admin(params, cb);
}

module.exports = deploy;

