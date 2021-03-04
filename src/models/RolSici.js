const { toNumber } = require("lodash");

const ModelCreate = include('helpers/modelCreate');
const name = 'RolSici';
const tableName = 'ROLES_SICI';
const {PAGE_SIZE} = process.env;
const selectableProps = [
    `${tableName}.ID_USUARIO`,
    `${tableName}.ID_ROL_USUARIO`,
    `${tableName}.DESCRIPCION`,
    `${tableName}.DOMINIO`,
    `${tableName}.OBSERVACION`,
    `${tableName}.FECHA_ALTA`,
    `${tableName}.FECHA_BAJA`
];
class RolSici extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
    findWithUserName (
        filters = {},
        skip = 0,
        columns = this.selectableProps,
        orderBy = this.orderBy
    ) 
    {
        return this.knex
            .select([...columns, 'USUARIOS.NOMBRE'])
            .from(this.tableName)
            .join('USUARIOS', `${this.tableName}.ID_USUARIO`, '=', 'USUARIOS.ID_USUARIO')
            .where(filters)
            .orderBy(orderBy)
            .offset(PAGE_SIZE * toNumber(skip))
            .timeout(this.timeout);
    }
}

module.exports = knex => new RolSici({knex});
