const db = require('../db/dbConfig');

const getAllTransactions = async() => {
    try {
        const allTransactions = await db.any("SELECT * FROM transactions");
        
        return allTransactions;
    } catch (error) {
        return error;
    };
};

const createTransaction = async(transaction) => {
    try {
        const newTransaction = db.one(
            "INSERT INTO transactions (transaction_date, payee, memo, outflow, inflow, cleared, account_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                transaction.transaction_date,
                transaction.payee,
                transaction.memo,
                transaction.outflow,
                transaction.inflow,
                transaction.cleared,
                transaction.account_id
            ]
        );

        return newTransaction;
    } catch (error) {
        return error;
    };
};

const updateTransaction = async(id, transaction) => {
    try {
        const updatedTransaction = db.one(
            "UPDATED transactions SET transaction_date=$1, payee=$2, memo=$3, outflow=$4, inflow=$5, cleared=$6, account_id=$7 WHERE id=$8 RETURNING *",
            [
                transaction.transaction_date,
                transaction.payee,
                transaction.memo,
                transaction.outflow,
                transaction.inflow,
                transaction.cleared,
                transaction.account_id,
                id
            ]
        );

        return updatedTransaction;
    } catch (error) {
        return error;
    };
}

const deleteTransaction = async(id) => {
    try {
        const deletedTransaction = await db.one(
            "DELETE FROM transactions WHERE id=$1 RETURNING *",
            id
        );

        return deletedTransaction;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
};