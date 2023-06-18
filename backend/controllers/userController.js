import sql from 'mssql'
import config from '../model/Configuration.js'

export const CreateEmployee = async (req,res) =>{
    try {
        let pool = await sql.connect(config)
        res.send(pool)
    } catch (error) {
        res.send(error)
    }
}