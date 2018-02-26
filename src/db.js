const typeorm = require("typeorm");

function conection() {

    let UserSchema = require("./entity/UserSchema");
    return typeorm.createConnection({
        type : "postgres",
        host : "localhost",
        port : 5432,
        username : "postgres",
        password : "rkd123",
        database: "postgres",
        synchronize: true,
        logging: false,
        entitySchemas: [
            UserSchema
        ]
    });
}

exports.connection = conection;