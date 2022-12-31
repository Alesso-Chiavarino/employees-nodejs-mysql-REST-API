import { pool } from "../db.js";

export const ping = async (req, res) => {
    const [result] = await pool.query(`SELECT "hola mundo desde mySQL :)" as RESULT`);
    res.json({
        status: "success",
        data: result[0]
    });
}