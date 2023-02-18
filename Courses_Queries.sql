create database courses_regs;
use courses_regs;
show tables;
create table users
(
ID int auto_increment primary key,
NAME varchar(100),
Email varchar(100),
PASS varchar(200)
);
select * from users