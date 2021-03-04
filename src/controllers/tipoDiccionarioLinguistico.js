const {TipoDiccionarioLinguistico} = include('/models');
const {PAGE_SIZE: limit} = process.env;
const {concatTableName} = include('util');
class TipoDiccionarioLinguisticoController{
    static async fetch(req, res, next){
        try{
            const query = concatTableName(TipoDiccionarioLinguistico.tableName, {'FECHA_BAJA':null, ...req.query})
            await TipoDiccionarioLinguistico.startTransaction();
            const tiposDiccionariosLinguisticos = await TipoDiccionarioLinguistico.find(query);
            const total = await TipoDiccionarioLinguistico.countRows();
            await TipoDiccionarioLinguistico.commitTransaction();
            res.send({
                total,
                limit,
                tiposDiccionariosLinguisticos
            });
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try {
            const tipoDiccionario = await TipoDiccionarioLinguistico.findById(req.params);
            res.send({tipoDiccionario});
        } catch(err) {
            next(err);
        }
    }
    static async create(req, res, next){
        try{
            const body = concatTableName(TipoDiccionarioLinguistico.tableName, req.body);
            await TipoDiccionarioLinguistico.startTransaction();
            const insertedOne = await TipoDiccionarioLinguistico.insertOne(body);
            await TipoDiccionarioLinguistico.commitTransaction();
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
            const body = concatTableName(TipoDiccionarioLinguistico.tableName, req.body);
            await TipoDiccionarioLinguistico.startTransaction();
            const response = await TipoDiccionarioLinguistico.updateOne(req.params, body);
            await TipoDiccionarioLinguistico.commitTransaction();
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
            await TipoDiccionarioLinguistico.startTransaction();
            const response = await TipoDiccionarioLinguistico.deletedOne(req.params, {ID_USUARIO_BAJA: 3});
            await TipoDiccionarioLinguistico.commitTransaction();
            res.send({
                success: true,
                response
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = TipoDiccionarioLinguisticoController;
