import mongoose from "mongoose";
import { logger } from "../../loggers/logger.js"

class MyMongoClient{
    constructor(){
        this.client = mongoose;
    }

    async connect(url){
        try {
            await this.client.connect(url);
            logger.info("Base de datos conectada");
        } catch (error) {
            throw new Error(`Error al conectarse a la base de datos ${error}`)
        }
    };

    async disconnect(){
        try {
            await this.client.connection.close();
        } catch (error) {
            throw new Error(`Error al desconectarse a la base de datos ${error}`)
        }
    }
}

export { MyMongoClient }