import {TaskModel} from '../models'

export const taskService = {

    create: async(entity: object)=>{
        return await TaskModel.create(entity);
      },

}