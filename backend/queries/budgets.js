const db = require("../db/dbConfig");

const getAllBudgets = async() => {
    try {
        const allBudgets = await db.any("SELECT * FROM budgets");

        return allBudgets;
    } catch (error) {
        return allBudgets;
    };
};

const createBudget = async(budget) => {
    try {
        const newBudget = await db.one(
            "INSERT INTO budgets (budget_name, total_assigned) VALUES ($1, $2) RETURNING *",
            [
                budget.budget_name,
                budget.total_assigned
            ]
        );
    } catch (error) {
        return error;
    };
};

const getOneBudget = async(id) => {
    try {
        const oneBudget = await db.one("SELECT * FROM budgets WHERE id=$1",
            id
        );

        return oneBudget;
    } catch (error) {
        return error;
    };
};

const updateBudget = async(id, budget) => {
    try {
        const updatedBudget = await db.one (
            "UPDATE budgets SET budget_name=$1, total_assigned=$2 WHERE id=$3 RETURNING *",
            [
                budget.budget_name,
                budget.total_assigned,
                id
            ]
        );

        return updatedBudget;
    } catch (error) {
        return error;
    };
};


const deleteBudget = async(id) => {
    try {
        const deletedBudget = await db.one(
            "DELETE FROM budgets WHERE id=$1 RETURNING *",
            id
        );

        return deletedBudget;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllBudgets,
    getOneBudget,
    createBudget,
    updateBudget,
    deleteBudget
}