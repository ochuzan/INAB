const db = require('../db/dbConfig');

const getAllCategories = async() => {
    try {
        const allCategories = await db.any("SELECT * FROM categories");

        return allCategories;
    } catch (error) {
        return error;
    };
};

const createCategory = async(category) => {
    try {
        const newCategory = await db.one(
            "INSERT INTO categories (category_name, category_assigned_money, category_activity, category_available, budget_id) VALUES ($1,$2,$3,$4,$54) RETURNING *",
            [
                category.category_name,
                category.category_assigned_money,
                category.category_activity,
                category.category_available,
                category.budget_id
            ]
        );

        return newCategory;
    } catch (error) {
        return error;
    };
};


const updateCategory = async(id, category) => {
    try {
        const updatedCategory = await db.one(
            "UPDATE categories SET category_name=$1, category_assigned_money=$2, category_activity=$3, category_available=$4 WHERE budget_id=$5 RETURNING *",
            [
                category.category_name,
                category.category_assigned_money,
                category.category_activity,
                category.category_available,
                id
            ]
        );

        return updatedCategory;
    } catch (error) {
        return error;
    };
};

const deleteCategory = async(id) => {
    try {
        const deletedCategory = await db.one(
            "DELETE FROM categories WHERE id=$1 RETURNING *",
            id
        );

        return deletedCategory;
    } catch (error) {
        return error;
    };
};


module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
};