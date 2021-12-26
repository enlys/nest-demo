import { Request, Response, NextFunction } from 'express';

export function loggerFunction(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { method, path } = req;
  console.log(`${method} ${path}`);
  console.log('Function Request...');
  next();
}
