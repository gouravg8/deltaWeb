-- q1 
-- create DB college
-- create table Teacher
-- insert given data into table
CREATE database if NOT EXISTS college;

use college;

CREATE TABLE
    Teacher (
        id INT PRIMARY key,
        name VARCHAR(30) NOT NULL,
        subject VARCHAR(30) NOT NULL,
        salary INT NOT NULL
    );

-- change id as a primary key
ALTER TABLE Teacher modify id INT PRIMARY key;

INSERT INTO
    Teacher (id, name, subject, salary)
VALUES
    (23, 'ajay', 'math', 50000),
    (47, 'bharat', 'english', 60000),
    (18, 'chetan', 'chemistry', 45000),
    (9, 'divya', 'physics', 75000);

SELECT
    *
FROM
    Teacher
ORDER BY
    id asc;

-- q2
-- a.
SELECT
    *
FROM
    teacher
WHERE
    salary > 55000;

-- b.
ALTER TABLE teacher CHANGE COLUMN salary ctc INT NOT NULL;

-- c.
UPDATE teacher
SET
    ctc = ctc + (ctc * 0.25);

SET
    sql_safe_updates = 0;

-- d.
ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT 'Gurgaon';

-- e.
ALTER TABLE teacher
DROP COLUMN ctc;