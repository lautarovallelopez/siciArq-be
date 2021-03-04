const {RolSiciController} = include('/controllers');

module.exports = router => {
    router.route('/')
        .get(RolSiciController.fetch)
        .post(RolSiciController.create);
    router.route('/:ID_USUARIO/:ID_ROL_USUARIO')
        .put(RolSiciController.update)
        .delete(RolSiciController.delete)
        .get(RolSiciController.fetchOne);
    return router;
};
