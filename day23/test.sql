-- Active: 1706949004928@@127.0.0.1@3306@delta_app
-- CREATE TABLE
--     if NOT EXISTS USER (
--         id VARCHAR(50) PRIMARY key,
--         username VARCHAR(50) UNIQUE NOT NULL,
--         email VARCHAR(50) NOT NULL,
--         password VARCHAR(50) NOT NULL
--     );
-- INSERT INTO
--     USER (id, username, email, password)
-- VALUES
--     (?, ?, ?, ?);
-- SELECT
--     COUNT(id) AS 'results'
-- FROM
--     USER;
-- SELECT
--     id,
--     username,
--     email
-- FROM
--     `user`;

SELECT id, username FROM user WHERE id = '0678a60e-4a7a-41ab-96fb-a71fc25a1558'