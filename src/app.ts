import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/router'
class App{
    public express: express.Application

    constructor(){
        this.express = express();
        this.routes();
        this.database()
        this.middleware()

    }
 

    private middleware(){
        this.express.use(express.json());
        this.express.use(cors())
        

    }

    private database(){
        mongoose.connect('mongodb://localhost:27017/tsnode', {
            useNewUrlParser: true
        })

    }

    private routes(){
        this.express.use(routes)
    }


}
 

export default new App().express