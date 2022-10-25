DROP DATABASE IF EXISTS inab_dev;
CREATE DATABASE inab_dev;

\c inab_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

DROP TABLE IF EXISTS budgets;

CREATE TABLE budgets (
    id SERIAL PRIMARY KEY,
    total_assigned BIGINT,
    -- month_year TIMESTAMP NOT NULL,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    account_name TEXT,
    cleared_balance BIGINT,
    pending_balance BIGINT,
    working_balance BIGINT,
    budget_id INTEGER REFERENCES budgets (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    transaction_date TIMESTAMP NOT NULL,
    payee TEXT,
    -- category TEXT,
    memo TEXT,
    outflow BIGINT,
    inflow BIGINT,
    cleared BOOLEAN,
    account_id INTEGER REFERENCES accounts (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name TEXT,
    category_assigned_money BIGINT,
    category_activity BIGINT,
    category_available BIGINT,
    budget_id INTEGER REFERENCES budgets (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS subcategories;

CREATE TABLE subcategories (
    id SERIAL PRIMARY KEY,
    subcategory_name TEXT,
    subcategory_assigned_money BIGINT,
    subcategory_activity BIGINT,
    subcategory_available BIGINT,
    budget_id INTEGER REFERENCES categories (id) ON DELETE CASCADE
);