module.exports = {
    type: 'object',
    properties : {
        ID_USUARIO: {type: 'integer'},
        ID_ROL_USUARIO: {type: 'string'},
        DESCRIPCION: {type: 'string'},
        DOMINIO: {
            type: 'string',
            nullable: true
        },
        OBSERVACION: {
            type: 'string',
            nullable: true
        },
        FECHA_ALTA: {
            type: 'object',
            readOnly: true
        },
        FECHA_BAJA: {
            type: 'object',
            readOnly: true,
            nullable: true
        }
    }
};