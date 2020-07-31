
// Importando Modelo
const User = require('../db/models/User');

const getUsers = async () => {
    const users = await User.findAll()
    return users;
}

const getUser = async (_ , {id}) => {
    const user = await User.findOne({ where: {id}})
    return user
}

const updateUserData = async (_, {id, name, lastname, mail}) => {
    const user = await User.findOne({ where: {id}});
    user.name = name;
    user.lastname = lastname;
    user.mail = mail;
    await user.save();
    return user;
}

const createUser = async (_, {name, lastname, mail}) => {
    const user = new User();
    user.name = name;
    user.lastname = lastname;
    user.mail = mail;
    await user.save();
    return user;
}


module.exports = {
    Query: {
        users: getUsers,
        user: getUser,
    },
    Mutation: {
        updateUserData: updateUserData,
        createUser: createUser,
    }
}