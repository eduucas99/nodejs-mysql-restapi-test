import { conection } from "../db.js";

export const getEmployees = async(req,res)=>{
    try{
        const [rows] = await conection.query('SELECT * FROM employee');
        res.json(rows);
    }catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

export const getEmployee = async(req,res)=>{
    const id = req.params.id;

    try {
        const [rows] = await conection.query('SELECT * FROM employee WHERE id = ?',[id]);

        if(rows.length<=0) return res.status(404).json({
            message: "Employee not found"
        })

        res.json(rows[0]);
   } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
   }
};

export const createEmployees  = async(req,res)=>{
    const {name, salary} = req.body;
    try {
        const [rows] = await conection.query('INSERT INTO employee (name, salary)  VALUES (?,?)',[name,salary]);
        res.send({
            id: rows.insertId,
            name,
            salary
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

export const updateEmployees  = async(req,res)=>{
    const {id} = req.params // == id = req.params.id  
    const {name,salary} = req.body;
    try {
        const [result] = await conection.query('UPDATE employee set name=IFNULL(?,name), salary = IFNULL(?,salary)  where id = ? ',[name,salary,id]);
    
        if(result.affectedRows<=0) return res.json({
            message: "Employee no update!"
        });

        res.send('Employe update!!!');
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

export const deleteEmployees  = async(req,res)=>{
    const id = req.params.id;
    try {
        const [result] = await conection.query('DELETE FROM employee WHERE id = ?',[id]);

        if(result.affectedRows<=0) return res.status(404).json({
            message: "Employee not found"
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
}

