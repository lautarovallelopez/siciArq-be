module.exports = {
    '/api/rolSici' : {
        get : {
            security : [],
            summary : 'Listar usuarios y roles',
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties: {
                                    roles: {
                                        type: 'array',
                                        items:{$ref: '#/components/schemas/RolSici'},
                                        example:{
                                            ID_USUARIO: 1,
                                            ID_ROL_USUARIO: 'OPERADOR',
                                            DESCRIPCION: 'Operador XXXX',
                                            DOMINIO: null,
                                            OBSERVACION: null,
                                            FECHA_ALTA: '2021-01-28T13:35:39.000Z',
                                            FECHA_BAJA: null
                                        }
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
            summary: 'Asignar rol a usuario',
            security: [],
            requestBody:{
                description: 'The new user-rol',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/RolSici'}}}
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
                                    insertedOne: {$ref: '#/components/schemas/RolSici'}
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
    '/api/rolSici/{ID_USUARIO}/{ID_ROL_USUARIO}':{
        get : {
            summary : 'Obtener un usuario y rol',
            security : [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_USUARIO',
                    schema: {type: 'integer'}
                },
                {
                    in: 'path',
                    required: true,
                    name: 'ID_ROL_USUARIO',
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
                                properties: {rolSici: {$ref: '#/components/schemas/RolSici'}}
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
            summary: 'Actualizar un rol de usuario',
            security: [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_USUARIO',
                    schema: {type: 'integer'}
                },
                {
                    in: 'path',
                    required: true,
                    name: 'ID_ROL_USUARIO',
                    schema: {type: 'string'}
                }
            ],
            requestBody:{
                description: 'The new changes user-rol',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/RolSici'}}}
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
                                    response: {$ref: '#/components/schemas/RolSici'}
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
            summary: 'Desasignar un rol a un usuario',
            security: [],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'ID_USUARIO',
                    schema: {type: 'integer'}
                },
                {
                    in: 'path',
                    required: true,
                    name: 'ID_ROL_USUARIO',
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
