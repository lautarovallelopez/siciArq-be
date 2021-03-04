const ModelCreate = include('helpers/modelCreate');
const name = 'TipoDeRelacion';
const tableName = 'TIPOS_DE_RELACION';
const selectableProps = [
    `${tableName}.ID_TIPO_RELACION`,
    `${tableName}.DESCRIPCION`,
    `${tableName}.SUPERVISADO`,
    `${tableName}.OBSERVACION`,
    `${tableName}.DOMINIO`,
    `${tableName}.ID_USUARIO_ALTA`,
    `${tableName}.FECHA_ALTA`
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
}

module.exports = knex => new RolSici({knex});
