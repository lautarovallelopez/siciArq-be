module.exports = {
    '/api/tipoDiccionarioLinguistico' : {
        get : {
            security : [],
            summary : 'Mostrar todos los diccionarios linguisticos',
            parameters : [
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {type: 'integer'}
                }
            ],
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {
                                    tiposDiccionariosLinguisticos: {
                                        type: 'array',
                                        items:{$ref: '#/components/schemas/TipoDiccionarioLinguistico'},
                                    },
                                    limit: {type: 'integer'},
                                    total: {type: 'integer'}
                                }
                            }
                        }
                    }
                },
                default : {
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        post: {
            summary: 'Crear una nueva tipologia de diccionario linguistico.',
            security: [],
            requestBody:{
                description: 'El nuevo tipo de diccionario',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/TipoDiccionarioLinguistico'}}}
            },
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {
                                    success: {type: 'boolean'},
                                    insertedOne: {$ref: '#/components/schemas/TipoDiccionarioLinguistico'}
                                }
                            }
                        }
                    }
                },
                default : {
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }
    },
    '/api/tipoDiccionarioLinguistico/{ID_TIPOLOGIA_DE_DICCIONARIO}':{
        get : {
            summary : 'Obtener un diccionario linguistico',
            security : [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_TIPOLOGIA_DE_DICCIONARIO',
                    schema: {type: 'string'}
                }
            ],
            responses : {
                200: {
                    description: 'ok',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {tipoDiccionario: {$ref: '#/components/schemas/TipoDiccionarioLinguistico'}}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        put: {
            summary: 'Actualizar una tipologia de diccionario',
            security: [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_TIPOLOGIA_DE_DICCIONARIO',
                    schema: {type: 'string'}
                }
            ],
            requestBody:{
                description: 'Cambios de diccionario',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/TipoDiccionarioLinguistico'}}}
            },
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {
                                    success: {type: 'boolean'},
                                    response: {$ref: '#/components/schemas/TipoDiccionarioLinguistico'}
                                }
                            }
                        }
                    }
                },
                default : {
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        delete: {
            summary: 'Borrar una tipologia de diccionario',
            security: [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_TIPOLOGIA_DE_DICCIONARIO',
                    schema: {type: 'string'}
                }
            ],
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {success: {type: 'boolean'}}
                            }
                        }
                    }
                },
                default : {
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }

    }
};
