const {TipoDiccionarioLinguisticoController} = include('/controllers');

module.exports = router => {
    router.route('/')
        .get(TipoDiccionarioLinguisticoController.fetch)
        .post(TipoDiccionarioLinguisticoController.create);
    router.route('/:ID_TIPOLOGIA_DE_DICCIONARIO')
        .get(TipoDiccionarioLinguisticoController.fetchOne)
        .put(TipoDiccionarioLinguisticoController.update)
        .delete(TipoDiccionarioLinguisticoController.delete);
        
    return router;
};
