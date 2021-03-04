module.exports = {
    '/api/tipoDeRelacion' : {
        get : {
            security : [],
            summary : 'Listar todos los tipos de relaciones',
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {
                                    tiposDeRelaciones: {
                                        type: 'array',
                                        items:{$ref:'#/components/schemas/TipoDeRelacion'}
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
            summary: 'Crear una nuevo tipo de relacion.',
            security: [],
            requestBody:{
                description: 'El nuevo tipo de relacion',
                required: true,
                content: {'application/json': {schema: {$ref:'#/components/schemas/TipoDeRelacion'}}}
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
                                    insertedOne: {$ref:'#/components/schemas/TipoDeRelacion'}
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
    '/api/tipoDeRelacion/{ID_TIPO_RELACION}':{
        get : {
            summary : 'Consultar una tipo de relacion',
            security : [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_TIPO_RELACION',
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
                                properties: {tipoDiccionario: {$ref:'#/components/schemas/TipoDeRelacion'}}
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
            summary: 'Actualizar un tipo de relacion',
            security: [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_TIPO_RELACION',
                    schema: {type: 'string'}
                }
            ],
            requestBody:{
                description: 'Cambios de relacion',
                required: true,
                content: {'application/json': {schema: {$ref:'#/components/schemas/TipoDeRelacion'}}}
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
                                    response: {$ref:'#/components/schemas/TipoDeRelacion'}
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
            summary: 'Borrar un tipo de relacion',
            security: [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_TIPO_RELACION',
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
