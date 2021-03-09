const ModelCreate = include('helpers/modelCreate');
const name = 'RelationType';
const tableName = 'TIPOS_DE_RELACION';
const selectableProps = [
    'ID_TIPO_RELACION',
    'DESCRIPCION',
    'SUPERVISADO',
    'OBSERVACION',
    'DOMINIO',
    'ID_USUARIO_ALTA',
    'FECHA_ALTA'
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
