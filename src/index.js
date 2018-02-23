const typeorm = require("typeorm");
const User = require("./model/User").User;
const UserSchema = require("./entity/UserSchema");

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
        logging: "all",
        entitySchemas: [
            UserSchema
        ]
    });
}

async function run () {
    try {
        const conn = await conection();

        const user = new User("rkdgusrnrlrl", "강현구", 32);


        let userRepository = conn.getRepository(User);
        await userRepository.save(user);

        const userList = await userRepository.find();
        console.log(userList);

    } catch (e) {
        console.error(e)
    }
}

run();