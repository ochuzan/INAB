const db = require("../db/dbConfig");

const getAllUsers = async() => {
    try {
        const allUsers = await db.any("SELECT * FROM users");

        return allUsers;
    } catch (error) {
        return error;
    }
};

const createUser = async(user) => {
    try {
        const newUser = await db.one(
            "INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *",
            [
                user.username,
                user.email,
                user.password
            ]
        );

        return newUser;
    } catch (error) {
        return error;
    }
};

const getOneUser = async(id) => {
    try {
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1",
            id
        );

        return oneUser;
    } catch (error) {
        return error;
    }
};

const updateUser = async(id, user) => {
    try {
        const updatedUser = await db.one(
            "UPDATE users SET username=$1, email=$2, password=$3 WHERE id=$4 RETURNING *",
            [
                user.username,
                user.email,
                user.password
            ]
        );

        return updatedUser;
    } catch (error) {
        return error;
    }
};

const deleteUser = async(id, user) => {
    try {
        const deletedUser = await db.one(
            "DELETE FROM users WHERE id=$1 RETURNING *",
            id
        );

        return deletedUser;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}