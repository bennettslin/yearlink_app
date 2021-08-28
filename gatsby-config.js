/* eslint-disable no-native-reassign */
/* eslint-disable no-global-assign */

/**
 * The gatsby setup files do not allow for ES6, so this is a workaround.
 * https://github.com/gatsbyjs/gatsby/issues/7810#issuecomment-449741977
 */
require = require('esm')(module)
module.exports = require('./gatsby-config.esm.js')
