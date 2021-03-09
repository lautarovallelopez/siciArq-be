const {RelationTypeController} = include('/controllers');

module.exports = router => {
    router.route('/')
        .get(RelationTypeController.fetch)
        .post(RelationTypeController.create);
    router.route('/:ID_TIPO_RELACION')
        .get(RelationTypeController.fetchOne)
        .put(RelationTypeController.update)
        .delete(RelationTypeController.delete);
        
    return router;
};
