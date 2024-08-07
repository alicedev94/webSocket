import { Request, Response} from 'express';
import { notifications, Notification } from '../models/noti.model';

export const find = (req: Request, res: Response): unknown => (res.send(notifications));