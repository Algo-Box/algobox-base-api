import { Request, Response } from 'express';

export function Error() {
  return (req:  Request, res: Response) => {
    res
      .status(404)
      .json({
        "message": "Page Not Found"
      });
    }
}