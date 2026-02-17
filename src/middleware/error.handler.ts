import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logging.error(err.message, err.stack);

  return res.status(500).json({
    error: {
      message: "Internal Server Error",
    },
  });
}
