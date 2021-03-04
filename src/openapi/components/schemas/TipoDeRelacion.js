module.exports = {
    type: 'object',
    properties : {
        ID_TIPO_RELACION: {type: 'integer'},
        DESCRIPCION: {
            type: 'string',
            nullable: false
        },
        SUPERVISADO: {
            type: 'integer',
            nullable: true
        },
        OBSERVACION: {
            type: 'string',
            nullable: true
        },
        DOMINIO: {
            type: 'string',
            nullable: true
        },
        ID_USUARIO_ALTA: {
            type: 'integer',
            nullable: false
        },
        FECHA_ALTA: {
            type: 'object'
        }
    }
};