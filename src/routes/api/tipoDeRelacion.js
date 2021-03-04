const {TipoDeRelacionController} = include('/controllers');

module.exports = router => {
    router.route('/')
        .get(TipoDeRelacionController.fetch)
        .post(TipoDeRelacionController.create);
    router.route('/:ID_TIPO_RELACION')
        .get(TipoDeRelacionController.fetchOne)
        .put(TipoDeRelacionController.update)
        .delete(TipoDeRelacionController.delete);
        
    return router;
};
