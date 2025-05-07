// costum response json
import { Response } from 'express';

export const response = <T>( status: number, data: T, message: String, res: Response ) => {
    res.json([ 
        {
            status,
            data,
            message
        }
    ])
}