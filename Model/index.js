// Database configuration
const db = require('../config');
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry = 
        `
        SELECT firstName, lastName, emailAdd, userPass, 
        country
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        db.query(strQry, (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You provide a wrong email address"});
            }else {
                if(userPass === data[0].userPass) {
                    res.status(200).json(
                        {result: data[0]});
                }else {
                    res.status(200).json({err: 
                        `You provide a wrong password`});
                }
            }
        })     
    }
    fetchUsers(req, res) {
        const strQry = 
        `
        SELECT firstName, lastName, emailAdd, country
        FROM Users;
        `;
        //db
        db.query(strQry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        SELECT firstName, lastName, emailAdd, country
        FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    createUser(req, res) {
        let detail = req.body;
        // sql query
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        db.query(strQry, [detail], (err)=> {
            if(err) {
                res.status(400).json({err});
            }else {
                res.status(200).json({msg: "A user record was saved."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        const strQry = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }
    deleteUser(req, res) {
        const strQry = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}

// Export User class
module.exports = {
    User
}