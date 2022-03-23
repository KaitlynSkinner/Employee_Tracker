/* enable the creation of a new database and only attempt to drop the database if it exists */
DROP DATABASE IF EXISTS business;
CREATE DATABASE business;

USE business;

/* 
You might want to use a separate file 
that contains functions for performing 
specific SQL queries you'll need to use. 
A constructor function or class could be 
helpful for organizing these. 
*/