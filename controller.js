let ContactModel = require("./model")
// let body = require("./view")
// let name = "Suvr";
// let phone = "01770677688";
// let email = "kar.suvr@gmail.com";
// let message = "This is a test";

let tableSample = "customers"


module.exports = class ContactController {
    obj = new ContactModel();
    con;




    constructor(con) {
        this.con = con;
    }


    //Delete all data
    static DeleteAll(con) {
        let queryAllData = 'DELETE FROM customers';
        con.query(queryAllData, function (err, result) {
            if (err) {
                console.log("error")
            }
            console.log(result);
        });
    }


    //Update  data
    static upDate(con) {
        return new Promise((res, rej) => {
        let queryUpdate = `UPDATE customers SET name = 'Test name' WHERE email = 'kar.suvra@gmail.com'`;
        con.query(queryUpdate, function (err, result) {
            if (err) {
                console.log("error")
                rej(err)
            }
            return res(result)
            // console.log(result);
        });
    });
    }

    //Print all data
    static getallData = (con) => {
        return new Promise((res, rej) => {
            let queryAllData = `SELECT * from ${tableSample}`;
            con.query(queryAllData, function (err, result) {
                if (err) {
                    console.log("error")
                    rej(err)
                }
                return res(result)
            });
        });

    }

    static getData = (con, queryString) => {
        return new Promise((res, rej) => {
            con.query(queryString, function (err, result) {
                if (err) {
                    console.log("error")
                    rej(err)
                }
                return res(result)
            });
        });

    }


    //inserting a data in table
    static insertData(con,body) {
        return new Promise((res, rej) => {
            var sql = `INSERT INTO ${tableSample} (name, phone, email, message ) VALUES ('${body.name}' , '${body.phone}', '${body.email}' , '${body.message}' )`;
            // var sql = `INSERT INTO customers (name, phone, email, message ) VALUES ('Salauddin' , '0177', 'kar.suvra' , 'test' )`;
            // var sql = `INSERT INTO customers (name, phone, email, message ) VALUES ( "suvra", "0177", "sdfsdfsd", "fsdfdfd" )`;
            con.query(sql, function (err, result) {
                if (err) {
                    console.log("Duplicate Data Entered")
                    return rej(err);
                }

                console.log("1 record inserted");
                return res();
            });
        })
    }

}