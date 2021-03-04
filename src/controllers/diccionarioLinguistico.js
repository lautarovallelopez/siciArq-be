const {DiccionarioLinguistico} = include('/models');
const head = require('lodash/head');
const {PAGE_SIZE} = process.env;
const words = require('lodash/words');
class DiccionarioLinguisticoController{
    static async fetch(req, res, next){
        try {
            const {
                page,
                ...filter
            } = req.query;
            await DiccionarioLinguistico.startTransaction();
            const diccionarios = await DiccionarioLinguistico.find(page, {
                ...filter,
                FECHA_BAJA: null
            });
            const total = await DiccionarioLinguistico.countRows();
            await DiccionarioLinguistico.commitTransaction();
            res.send({
                limit: PAGE_SIZE,
                total,
                diccionarios
            });
        } catch(err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next){
        try {
            const diccionario = await DiccionarioLinguistico.findById(req.params);
            res.send({diccionario});
        } catch(err) {
            next(err);
        }
    }
    static async create(req, res, next){
        try {
            //console.log(words())
            await DiccionarioLinguistico.startTransaction();
            const insertedOne = await DiccionarioLinguistico.insertOne(req.body);
            await DiccionarioLinguistico.commitTransaction();
            res.send({
                success: true,
                insertedOne
            });
        } catch(err) {
            next(err);
        }
    }
    static async update(req, res, next){
        try{
            await DiccionarioLinguistico.startTransaction();
            const updatedOne = await DiccionarioLinguistico.updateOne(req.params, req.body);
            await DiccionarioLinguistico.commitTransaction();
            console.log(updatedOne);
            res.send({
                success: true,
                updatedOne
            });
        } catch(err){
            next(err);
        }
    }
    static async delete(req, res, next){
        try {
            await DiccionarioLinguistico.startTransaction();
            await DiccionarioLinguistico.deletedOne(req.params, {ID_USUARIO_BAJA: 1});
            await DiccionarioLinguistico.commitTransaction();
            
            res.send({success: true});
        } catch(err) {
            next(err);
        }
    }
}

module.exports = DiccionarioLinguisticoController;
