module.exports = {
    '/api/relation-type' : {
        get : {
            security : [],
            summary : 'Get all relations types',
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {
                                    relations: {
                                        type: 'array',
                                        items:{$ref:'#/components/schemas/RelationType'}
                                    }
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
            summary: 'Create a new relation type',
            security: [],
            requestBody:{
                description: 'El nuevo tipo de relacion',
                required: true,
                content: {'application/json': {schema: {$ref:'#/components/schemas/RelationType'}}}
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
                                    insertedOne: {$ref:'#/components/schemas/RelationType'}
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
    '/api/relation-type/{ID_TIPO_RELACION}':{
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
                                properties: {tipoDiccionario: {$ref:'#/components/schemas/RelationType'}}
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
                content: {'application/json': {schema: {$ref:'#/components/schemas/RelationType'}}}
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
                                    response: {$ref:'#/components/schemas/RelationType'}
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
