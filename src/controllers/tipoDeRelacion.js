const {TipoDeRelacion} = include('/models');
const {concatTableName} = include('util');
const {PAGE_SIZE: limit} = process.env;
class TipoDeRelacionController{
    static async fetch(req, res, next){
        try{
            const query = concatTableName(TipoDeRelacion.tableName, {'FECHA_BAJA':null, ...req.query})
            await TipoDeRelacion.startTransaction();
            const tiposDeRelaciones = await TipoDeRelacion.find(query);
            const total = await TipoDeRelacion.countRows();
            await TipoDeRelacion.commitTransaction();
            res.send({
                total,
                limit,
                tiposDeRelaciones
            });
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try {
            const tipoDeRelacion = await TipoDeRelacion.findById(req.params);
            res.send({tipoDeRelacion});
        } catch(err) {
            next(err);
        }
    }
    
    static async create(req, res, next){
        try{
            const body = concatTableName(TipoDeRelacion.tableName, req.body);
            await TipoDeRelacion.startTransaction();
            const insertedOne = await TipoDeRelacion.insertOne(body);
            await TipoDeRelacion.commitTransaction();
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
            const body = concatTableName(TipoDeRelacion.tableName, req.body);
            await TipoDeRelacion.startTransaction();
            const response = await TipoDeRelacion.updateOne(req.params, body);
            await TipoDeRelacion.commitTransaction();
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
            await TipoDeRelacion.startTransaction();
            const response = await TipoDeRelacion.deletedOne(req.params, {ID_USUARIO_BAJA: 44});
            await TipoDeRelacion.commitTransaction();
            res.send({
                success: true,
                response
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = TipoDeRelacionController;