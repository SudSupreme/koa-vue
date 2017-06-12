"use strict";

import Koa from 'koa'
import riotRouter from './routes';
import serve from 'koa-static';

const app = new Koa();

const PORT = process.env.PORT || 3000;
let root = process.cwd();
// setup client dir
app.use(serve(root + '/dist/client'));


app.use(riotRouter.routes());


app.listen(PORT);