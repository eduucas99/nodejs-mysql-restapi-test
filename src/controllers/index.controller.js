import { conection } from '../db.js';

export const ping = async (req,res)=>{
    const [result] = await conection.query('SELECT 1 + 1 AS result');
    res.json(result[0])
}