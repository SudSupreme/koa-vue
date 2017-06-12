"use strict";

import Router from 'koa-router';

const router = new Router();

router.get('/api/getAllChampions',(ctx,next)=>{
    console.log('called /api/champ-list');
    }
);

export default router;