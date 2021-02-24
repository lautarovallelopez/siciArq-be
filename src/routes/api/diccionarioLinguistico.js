const {DiccionarioLinguisticoController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(DiccionarioLinguisticoController.fetch)
        .post(DiccionarioLinguisticoController.create)
        .put(DiccionarioLinguisticoController.update);
        
    router.route('/:DESCRIPCION_ORIGINAL/:ID_TIPOLOGIA_DE_DICCIONARIO/:ID_VARIABLE')
        .get(DiccionarioLinguisticoController.fetchOne)
        .delete(DiccionarioLinguisticoController.delete);
    return router;
};
