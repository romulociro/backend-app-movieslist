/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

export default function ensureErrors(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.log(error.message);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
