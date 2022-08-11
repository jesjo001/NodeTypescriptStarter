import express from 'express';
import {Request, Response} from 'express';
import CountryDataRouter from './countryDataRoute/router';
import rateLimiterMiddleware  from '../middleware/rateLimiter';
const Router = express.Router();
Router.use('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))


// Router.use('/report', rateLimiterMiddleware, CountryDataRouter);

export default Router;