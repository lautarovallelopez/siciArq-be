const {RelationType} = include('/models');
class RelationTypeController{
    static async fetch(req, res, next){
        try{
            await RelationType.startTransaction();
            const relations = await RelationType.find({'FECHA_BAJA':null, ...req.query});
            await RelationType.commitTransaction();
            res.send({ relations });
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try {
            const relation = await RelationType.findById(req.params);
            res.send({ relation });
        } catch(err) {
            next(err);
        }
    }
    
    static async create(req, res, next){
        try{
            await RelationType.startTransaction();
            await RelationType.insertOne(req.body);
            await RelationType.commitTransaction();
            res.send({ success: true });
        }catch(error){
            next(error);
        }
    }

    static async update(req, res, next){
        try{
            await RelationType.startTransaction();
            const response = await RelationType.updateOne(req.params, req.body);
            await RelationType.commitTransaction();
            res.send({ success: true, response });
        }catch(error){
            next(error);
        }
    }

    static async delete(req, res, next){
        try{
            await RelationType.startTransaction();
            await RelationType.deletedOne(req.params);
            await RelationType.commitTransaction();
            res.send({ success: true });
        }catch(error){
            next(error);
        }
    }
}

module.exports = RelationTypeController;
