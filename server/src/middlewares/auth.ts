import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User | undefined = res.locals.user;

    if (!user) throw new Error("Unauthenticated");
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};
