const User = require("../model/User").User;

module.exports = {
    target : User,
    columns : {
        id : {
            primary :true,
            type : "varchar"
        },
        name : {
            type : "varchar",
        },
        age : {
            type : "int"
        }
    }
}
