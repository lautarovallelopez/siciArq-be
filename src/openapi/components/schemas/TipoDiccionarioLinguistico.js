module.exports = {
    type: 'object',
    properties : {
        ID_TIPOLOGIA_DE_DICCIONARIO: {
            type: 'string',
            nullable: false
        },
        DESCRIPCION: {
            type: 'string',
            nullable: false
        },
        SI_PALABRA_NO_FRASE_ORIGEN: {
            type: 'integer',
            nullable: true
        },
        SI_DESCRIPCION_DESTINO: {
            type: 'integer',
            nullable: true
        },
        SI_PALABRA_NO_FRASE_DESTINO: {
            type: 'integer',
            nullable: true
        },
        EXPRESION_REGULAR: {
            type: 'integer',
            nullable: true
        },
        VALIDACION: {
            type: 'string',
            nullable: false
        },
        SUPERVISADO: {
            type: 'integer',
            nullable: true
        },
        DOMINIO: {
            type: 'string',
            nullable: true
        },
        OBSERVACION: {
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