
import express from 'express';



class App{
    public express: express.Application;

    constructor(){
        this.express = express();
        this.middlewares();
    }


    private database(){

        
    }



    private middlewares(){
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended: false}))

    }

    
    private routers(){
        

    }

    
}

export default new App().express