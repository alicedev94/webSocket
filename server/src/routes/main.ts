import { Router } from "express";
import { find } from "../services/notifications.service";

export const router = Router();

router.get('/find/notification', find);
