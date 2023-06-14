import dal from "../2-Utils/dal";
import CatrgoryModel from "../4-Models/CatrgoryModel";
import ProductModel from "../4-Models/ProductModel";
import OkPacket from "mysql"



async function getAllProducts():Promise<ProductModel[]>{
    // CONCAT(DATE_FORMAT(M.startDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.startDate, '%H:%i')) AS 'startDate',
    const sql = `
    SELECT * FROM products 
    `
    const products = await dal.execute(sql)
    return products
}

async function getAllCatergories():Promise<CatrgoryModel[]>{
    const sql = `
    SELECT * FROM categories
    `
    const allCategories = await dal.execute(sql)
    return allCategories
}

async function getProductsByCategoryId(categoryId :number):Promise<ProductModel[]>{
    const sql = `
    SELECT * FROM products
    WHERE categoryId = ?
    `
    const allCategories = await dal.execute(sql, [categoryId])
    return allCategories
}

async function postOneProduct(product :ProductModel):Promise<ProductModel>{
    const sql = `
    INSERT INTO products
    VALUES (
        NULL,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `
    const info : OkPacket = await dal.execute(sql, [product.name, product.dateTime, product.expirationDateTime, product.price, product.categoryId ])
    product.productId = info.insertId
    return product
}
async function deleteOneProduct(productId :number):Promise<void>{
    const sql = `
   DELETE FROM products 
   WHERE productId = ?
    
    `
    const info : OkPacket = await dal.execute(sql, [productId])
    //if(info.affectedRows === 0) throw new ErrorModel...
}

// async function getMeetingByDevTeam(devTeamID:number): Promise<MeetingModel[]> {
//     const sql = `SELECT M.meetID, M.devTeamID, CONCAT(DATE_FORMAT(M.startDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.startDate, '%H:%i')) AS 'startDate',
//                 CONCAT(DATE_FORMAT(M.endDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.endDate, '%H:%i')) AS 'endDate', M.meetDescription, M.meetRoom, D.devTeamName
//                 FROM meetings AS M JOIN devteams AS D
//                 ON M.devTeamID = D.devTeamID
//                 WHERE M.devTeamID = ?`
//     const meetings = await dal.execute(sql, [devTeamID])
//     return meetings    
// }

// async function isTimeBusy(startDate:string, devTeamID: number):Promise<Boolean> {
//     const sql = `SELECT COUNT(*) AS isTime FROM meetings
//                 WHERE startDate = ? AND devTeamID = ?`
//     const info = await dal.execute(sql, [startDate, devTeamID])
//     const count = info[0].isTime
//     return count > 0     
// }



export default {
    getAllProducts,
    getAllCatergories,
    getProductsByCategoryId,
    postOneProduct,
    deleteOneProduct
}