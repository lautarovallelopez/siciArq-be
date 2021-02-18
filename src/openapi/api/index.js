const assignments = require('./assignments');
const users = require('./users');
const staticData = require('./staticData');
const fieldMaterials = require('./fieldMaterials');
const types = require('./types');
const reviews = require('./reviews');
const logs = require('./logs');
const monitoring = require('./monitoring');

module.exports = {
    ...assignments,
    ...users,
    ...staticData,
    ...fieldMaterials,
    ...types,
    ...reviews,
    ...logs,
    ...monitoring
};
