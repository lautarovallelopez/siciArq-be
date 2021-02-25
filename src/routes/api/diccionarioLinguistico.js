const {DiccionarioLinguisticoController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(DiccionarioLinguisticoController.fetch)
        .post(DiccionarioLinguisticoController.create);
        
    router.route('/:DESCRIPCION_ORIGINAL/:ID_TIPOLOGIA_DE_DICCIONARIO/:ID_VARIABLE')
        .get(DiccionarioLinguisticoController.fetchOne)
        .delete(DiccionarioLinguisticoController.delete)
        .put(DiccionarioLinguisticoController.update);
    return router;
};
