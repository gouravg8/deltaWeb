-- q1
-- make new table Student(roll_no, name, ciry, marks)
-- insert given data into table
use college;

CREATE TABLE
    student (
        roll_no INT PRIMARY key,
        name VARCHAR(30) NOT NULL,
        city VARCHAR(30) NOT NULL,
        marks INT NOT NULL
    );

INSERT INTO
    student (roll_no, name, city, marks)
VALUES
    (110, 'Ram', 'Delhi', 99),
    (108, 'Bob', 'Mumbai', 65),
    (124, 'Casey', 'Pune', 94),
    (112, 'Duke', 'Pune', 80);

SELECT
    *
FROM
    student;

-- q2
-- a
SELECT
    *
FROM
    student
WHERE
    marks >= 75;

-- b
--SELECT DISTINCT city FROM student;
SELECT
    city
FROM
    student
GROUP BY
    city;

-- c
SELECT
    city,
    MAX(marks)
FROM
    student
GROUP BY
    city;

-- d
SELECT
    AVG(marks)
FROM
    student;

-- e
ALTER TABLE student
ADD COLUMN grade CHAR(1) DEFAULT 'X';

-- update student set grade = case when marks > 80 then 'O' when marks between 70 and 80 then 'A' when  marks between 60 and 70 then 'B' end;
UPDATE student
SET
    grade = CASE
        WHEN marks > 80 THEN 'O'
        WHEN marks > 70
        AND marks <= 80 THEN 'A'
        WHEN marks > 60
        AND marks <= 70 THEN 'B'
        ELSE 'X'
    END;