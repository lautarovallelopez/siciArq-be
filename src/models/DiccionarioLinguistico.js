const toNumber = require('lodash/toNumber');

const {PAGE_SIZE} = process.env;
const ModelCreate = include('/helpers/modelCreate');
const name = 'DiccionarioLinguistico';
const tableName = 'DICCIONARIO_LINGUISTICO';
const selectableProps = [
    `${tableName}.DESCRIPCION_ORIGINAL`,
    `${tableName}.ID_TIPOLOGIA_DE_DICCIONARIO`,
    `${tableName}.ID_VARIABLE`,
    `${tableName}.DESCRIPCION_DESTINO`,
    `${tableName}.OBSERVACION`,
    `${tableName}.DOMINIO`,
    `${tableName}.SUPERVISADO`,
    `${tableName}.ID_USUARIO_ALTA`,
    `${tableName}.FECHA_ALTA`
];

class DiccionarioLinguistico extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });
    }

    find(skip, filter = {}, columns = this.selectableProps) {
        return this.knex
            .select(columns)
            .from(this.tableName)
            .where(filter)
            .limit(PAGE_SIZE)
            .orderBy([{ column: 'FECHA_ALTA', order: 'desc' }])
            .offset(PAGE_SIZE * toNumber(skip));
    }
    
}

module.exports = knex => new DiccionarioLinguistico({knex});
