const ModelCreate = include('helpers/modelCreate');
const name = 'TipoDiccionarioLinguistico';
const tableName = 'TIPOS_DE_DICCIONARIO_LINGUISTICO';
const selectableProps = [
    `${tableName}.ID_TIPOLOGIA_DE_DICCIONARIO`,
    `${tableName}.DESCRIPCION`,
    `${tableName}.SI_PALABRA_NO_FRASE_ORIGEN`,
    `${tableName}.SI_DESCRIPCION_DESTINO`,
    `${tableName}.SI_PALABRA_NO_FRASE_DESTINO`,
    `${tableName}.EXPRESION_REGULAR`,
    `${tableName}.VALIDACION`,
    `${tableName}.SUPERVISADO`,
    `${tableName}.DOMINIO`,
    `${tableName}.OBSERVACION`,
    `${tableName}.ID_USUARIO_ALTA`,
    `${tableName}.FECHA_ALTA`,
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
