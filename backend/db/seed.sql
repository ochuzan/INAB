\c inab_dev;

INSERT INTO users (username, email, password) VALUES
('Janedoe_test1', 'jane.doe1@gmail.com', 'password123!');

INSERT INTO budgets (user_id, budget_name, total_assigned) VALUES
('1', 'Test Budget', 0);

INSERT INTO accounts (budget_id, account_name, cleared_balance, pending_balance, working_balance) VALUES
('1', 'Chase Checking', 0, 0, 0);

INSERT INTO transactions (account_id, transaction_date, payee, memo, outflow, inflow, cleared) VALUES
('1', '2022-10-25 18:00:00', 'Starting Balance', 'What I had in my checking account', '0', '100', true);

INSERT INTO categories (budget_id, category_name, category_assigned_money, category_activity, category_available) VALUES
('1', 'Fixed Expenses', 0, 0, 0),
('1', 'Living Expenses', 0, 0, 0);

INSERT INTO subcategories (category_id, subcategory_name, subcategory_assigned_money, subcategory_activity, subcategory_available) VALUES
('1', 'Spotify', 0, 0, 0),
('2', 'Food', 0, 0, 0);