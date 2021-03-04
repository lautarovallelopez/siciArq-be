const mapKeys = require('lodash/mapKeys');
const concatTableName = (tableName, object)=>{
    const objectWithTableName = mapKeys(object, (value, key)=> `${tableName}.${key}`);
    return objectWithTableName;
}

module.exports = {concatTableName};