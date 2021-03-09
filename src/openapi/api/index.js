const assignments = require('./assignments');
const users = require('./users');
const staticData = require('./staticData');
const fieldMaterials = require('./fieldMaterials');
const types = require('./types');
const reviews = require('./reviews');
const logs = require('./logs');
const monitoring = require('./monitoring');
const diccionarioLinguistico = require('./diccionarioLinguistico');
const rolSici = require('./rolSici');
const tipoDiccionarioLinguistico = require('./tipoDiccionarioLinguistico');
const relationType = require('./relation-type');
module.exports = {
    ...diccionarioLinguistico,
    ...assignments,
    ...users,
    ...staticData,
    ...fieldMaterials,
    ...types,
    ...reviews,
    ...logs,
    ...monitoring,
    ...rolSici,
    ...tipoDiccionarioLinguistico,
    ...relationType
};
