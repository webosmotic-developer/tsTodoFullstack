import * as express from 'express';

import TodoRoutes from './api/todo/todo.route';

export default function setRoutes(app) {

    const router = express.Router();

    TodoRoutes(router);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);

}
