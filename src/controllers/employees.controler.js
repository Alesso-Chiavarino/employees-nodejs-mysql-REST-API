import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM employee`);
        res.json({
            status: "success",
            data: result
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something goes wrong"
        })
    }
    
}

export const getEmployee = async (req, res) => {
    const {id} = req.params;
    try {
        const [result] = await pool.query(`SELECT * FROM employee WHERE id = ?`, [id]);

        if(result.length <= 0) {
            return res.status(404).json({
                status: "error",
                error: "employee not found"
            })
        }

        res.json({
            status: "success",
            data: result
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something goes wrong"
        })
    }
}
 
export const createEmployees = async (req, res) => {
    const {name, salary} = req.body;
    
    try {

        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    
        res.json({
            status: "success",
            data: {
                id: rows.insertId,
                name,
                salary
            }
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something goes wrong"
        })
    }
}

export const updateEmployees = async (req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;

    try {

        const [result] = await pool.query(`UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?`, [name, salary, id]);

        if(result.affectedRows <= 0) {
            return res.status(404).json({
                status: "error",
                error: "employee not found"
            })
        }

        res.json({
            status: "success",
            data: {
                message: "employee updated successfully",
                id,
                name,
                salary
            }
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something goes wrong"
        })
    }
}

export const deleteEmployees = async (req, res) => {
    const {id} = req.params;

    try {
        const [user] = await pool.query(`SELECT * FROM employee WHERE id = ?`, [id]);
        const [result] = await pool.query(`DELETE FROM employee WHERE id = ?`, [id]);

        if(result.affectedRows <= 0) {
            return res.status(404).json({
                status: "error",
                error: "employee not found"
            })
        }

        res.json({
            status: "success",
            data: {
                message: "employee removed successfully",
                id,
                name: user[0].name,
                salary: user[0].salary
            }
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something goes wrong"
        })
    }
}