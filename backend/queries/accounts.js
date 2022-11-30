const db = require('../db/dbConfig');

const getAllAccounts = async() => {
    try {
        const allAccounts = await db.any("SELECT * FROM accounts");

        return allAccounts;
    } catch (error) {
        return error;
    };
};

const createAccount = async(account) => {
    try {
        const newAccount = await db.one(
            "INSERT INTO accounts (account_name, cleared_balance, pending_balance, working_balance) VALUES($1, $2, $3, $4) RETURNING *",
            [
                account.account_name,
                account.cleared_balance,
                account.pending_balance,
                account.working_balance
            ]
        );

        return newAccount;
    } catch (error) {
        return error;
    };
};

const getOneAccount = async(id) => {
    try {
        const oneAccount = await db.one("SELECT * FROM accounts WHERE id=$1",
            id
        );

        return oneAccount;
    } catch (error) {
        return error;
    };
};

const updateAccount = async(id, account) => {
    try {
        const updatedAccount = await db.one(
            "UPDATE accounts SET account_name=$1, cleared_balance=$2, pending_balance=$3, working_balance=$4 WHERE id=$5 RETURNING *",
            [
                account.account_name,
                account.cleared_balance,
                account.pending_balance,
                account.working_balance,
                id
            ]
        );

        return updatedAccount;
    } catch (error) {
        return error;
    };
};

const deleteAccount = async(id) => {
    try {
        const deletedAccount = await db.one(
            "DELETE FROM accounts WHERE id=$1 RETURNING *",
            id
        );

        return deletedAccount;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllAccounts,
    getOneAccount,
    createAccount,
    updateAccount,
    deleteAccount
};