CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;
DROP TABLE users;
CREATE TABLE users (
    id INT PRIMARY KEY,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    follower INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT age_check CHECK (age >= 13)
);

-- INSERT INTO users(id,age,name, email) VALUES (1,21,'Gouav soni', 'gouravsoni@gmail.com'),(2,18,'Sourabh soni','sourabh@gmail.com');
INSERT INTO users(id,age,name, email) VALUES (4,18,'douav soni', 'gouravGsonii@gmail.com');
select * from users;
CREATE TABLE posts(
	id INT PRIMARY KEY,
    cust_id INT,
    caption VARCHAR(255),
    FOREIGN KEY (cust_id) REFERENCES users(id)
);
INSERT INTO posts(id,cust_id,caption) VALUES (3,2,'nakli caption hai ye 2');
select * from posts;