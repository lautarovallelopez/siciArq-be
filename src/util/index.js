const assign = require('lodash/assign');
const get = require('lodash/get');
const join = require('lodash/join');
const map = require('lodash/map');
const pick = require('lodash/pick');
const reduce = require('lodash/reduce');
const toLower = require('lodash/toLower');
const values = require('lodash/values');
const concatTableName = require('./concatTableName');
const reducedList = (array, filterKey, keyData) => reduce(array, (objectsByKeyValue, obj) => {
    const value = join(values(pick(obj, filterKey)), '');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat({
        name: get(obj, keyData),
        _id: get(obj, keyData)
    });
    return objectsByKeyValue;
}, {});

const buildArchQuery = query => {
    const archFilter = {};
    // eslint-disable-next-line lodash/collection-return, lodash/collection-method-value
    map(query, (value, key) => {
        assign(archFilter, {[key]: toLower(value)});
    });

    return archFilter;
};

module.exports = {
    buildArchQuery,
    reducedList,
    ...concatTableName
};
