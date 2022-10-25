\c inab_dev;

INSERT INTO users (username, email, password) VALUES

INSERT INTO budgets (user_id, total_assigned) VALUES

INSERT INTO accounts (budget_id, account_name, cleared_balance, pending_balance, working_balance) VALUES

INSERT INTO transactions (account_id, transaction_date, payee, memo, outflow, inflow, cleared) VALUES

INSERT INTO categories (budget_id, category_name, category_assigned_money, category_activity, category_available) VALUES

INSERT INTO subcategories (category_id, subcategory_name, subcategory_assigned_money, subcategory_activity, subcategory_available) VALUES