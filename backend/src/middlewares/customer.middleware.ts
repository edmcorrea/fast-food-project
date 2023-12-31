import { NextFunction, Request, Response } from 'express';
import { schemaNewCustomer, schemaUpdateCustomer } from '../utils/schema';
import HttpException from '../utils/httpException';

export function validateNewCustomer(req: Request, _res: Response, next: NextFunction) {
  const { error } = schemaNewCustomer.validate(req.body);

  if (error && error.details[0].type === 'any.required') {
    throw new HttpException(400, error.details[0].message);
  }
  if (error) {
    throw new HttpException(422, error.details[0].message);
  }
  next();
}

export function validateUpdateCustomer(req: Request, _res: Response, next: NextFunction) {
  const { error } = schemaUpdateCustomer.validate(req.body);

  if (error && error.details[0].type === 'any.required') {
    throw new HttpException(400, error.details[0].message);
  }
  if (error) {
    throw new HttpException(422, error.details[0].message);
  }
  next();
}