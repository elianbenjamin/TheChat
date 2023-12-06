import { Response, Request } from 'express';
import { taskService } from '../service';

export const taskController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await taskService.create(req.body);
      return res.json(data);
    } catch (error:any) {
      return res.status(400).json({
        message: error.message || 'An unexpected error occurred.',
      });
    }
  },
};
