import express from 'express';
import {celebrate, Joi} from 'celebrate';

import multer from 'multer';
import multerConig from './config/multer';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const upload = multer(multerConig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.use(express.json());

routes.get( '/', (request, response) => {
    return response.json({message: "Hello World"});

});

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.post(    
    '/points', 
    upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(), 
        })
    }, {
        abortEarly: false
    }),
    pointsController.create,    
    );


export default routes;

// TODO 
// logics use service patern
// database connections repository patern | data maper

//index, show, update, create
/*
app.get("/users/:id", (request, response) => {
    const id =Number( request.params.id);
    const user = users[id]
    return response.json(user);
});

app.post('/users', (request, response) =>{
    const data = request.body;
    console.log(data)
    const user = {
        name: data.name,
        email: data.email
    }

return response.json(user);
});
*/