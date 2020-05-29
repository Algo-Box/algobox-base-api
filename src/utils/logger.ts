import { Request, Response } from 'express';

export function Logger() {
  if(process.env.NODE_ENV === 'DEV') {
    return (req: Request, res: Response, next: Function) => {
      console.time("Request Took");
      next();
      console.log(req.method + " " + req.url);
      console.timeEnd("Request Took");
    }
  } else {
    return (req: Request, Response: Response, next: Function) => { 
      /* Add Production Logger */ 
      next();
    }
  }
}