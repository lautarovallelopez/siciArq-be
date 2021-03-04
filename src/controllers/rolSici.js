const {RolSici} = include('/models');
const {PAGE_SIZE: limit} = process.env;
const {concatTableName} = include('util');
class RolSiciController{
    static async fetch(req, res, next){
        try{
            const query = concatTableName(RolSici.tableName, {'FECHA_BAJA':null, ...req.query})
            await RolSici.startTransaction();
            const roles = await RolSici.findWithUserName(query);
            const total = await RolSici.countRows();
            await RolSici.commitTransaction();
            res.send({
                total,
                limit,
                roles
            });
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try {
            const rolSici = await RolSici.findById(req.params);
            res.send({rolSici});
        } catch(err) {
            next(err);
        }
    }
    static async create(req, res, next){
        try{
            const body = concatTableName(RolSici.tableName, req.body);
            await RolSici.startTransaction();
            const insertedOne = await RolSici.insertOne(body);
            await RolSici.commitTransaction();
            res.send({
                success: true,
                insertedOne
            });
        }catch(error){
            next(error);
        }
    }
    static async update(req, res, next){
        try{
            const body = concatTableName(RolSici.tableName, req.body);
            await RolSici.startTransaction();
            const response = await RolSici.updateOne(req.params, body);
            await RolSici.commitTransaction();
            res.send({
                success: true,
                response
            });
        }catch(error){
            next(error);
        }
    }
    static async delete(req, res, next){
        try{
            await RolSici.startTransaction();
            const response = await RolSici.deletedOne(req.params);
            await RolSici.commitTransaction();
            res.send({
                success: true,
                response
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = RolSiciController;
