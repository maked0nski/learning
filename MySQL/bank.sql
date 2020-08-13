# 1 +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from bank.client where FirstName like '______';

# 2 +Вибрати львівські відділення банку.+
select * from bank.department where DepartmentCity like 'Lviv';

# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from bank.client where Education like 'high' order by FirstName;

# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from bank.application where idApplication order by idApplication desc;

# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from bank.client where LastName like '%ov'or '%ova';

# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from bank.client where bank.department.DepartmentCity like 'Kyiv';

# 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.

select FirstName, LastName, Passport from bank.client order by FirstName;

# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

select * from bank.application join bank.client on application.Client_idClient = client.idClient where CreditState like 'Not returned';

# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(bank.client.Department_idDepartment)  from bank.client;
select count(bank.client.Department_idDepartment)  from bank.client join bank.department on client.Department_idDepartment = department.idDepartment where DepartmentCity like 'Lviv';


# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.



select FirstName, LastName, max(Sum)
from bank.application join bank.client on application.Client_idClient = client.idClient
group by idClient;

# 11. Визначити кількість заявок на крдеит для кожного клієнта.
#
select FirstName, LastName, count(Client_idClient) as application
from bank.application join bank.client on application.Client_idClient = client.idClient
group by idClient;
#
# 12. Визначити найбільший та найменший кредити.
#
SELECT FirstName, sum
FROM bank.client join bank.application on client.idClient = application.Client_idClient
WHERE sum = (SELECT MAX(Sum) FROM bank.application);



SELECT FirstName, sum
FROM bank.client join bank.application on client.idClient = application.Client_idClient
WHERE sum = (SELECT MIN(Sum) FROM bank.application);
#
# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
#
select FirstName,LastName,Education,count(Client_idClient)
from bank.client join bank.application on client.idClient = application.Client_idClient
where Education = 'high'
group by Education;

#
# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
#
# З Віктором порадитись !!!! Віктор

select FirstName,LastName,Education,Age,max(avg_sum)
from (select *, AVG(bank.application.Sum) as avg_sum
      from bank.client
          join bank.application on client.idClient = application.Client_idClient
      group by idClient) selectTable;

select *, AVG(bank.application.Sum) as avg_sum
from bank.client join bank.application on client.idClient = application.Client_idClient
group by idClient
order by avg_sum DESC limit 1;


select FirstName, LastName, Education, Passport, City, Age, max(average_sum)
from (select *, avg(Sum) average_sum
      from client c
               join application a on c.idClient = a.Client_idClient
      group by FirstName, LastName, Education, Passport, City, Age
     ) selectTable
group by FirstName, LastName, Education, Passport, City, Age
order by max(average_sum) desc
limit 1;


#
# 15. Вивести відділення, яке видало в кредити найбільше грошей
#
# З Віктором порадитись !!!! Віктор

select DepartmentCity, SUM(Sum)
from bank.department
         join bank.client c on department.idDepartment = c.Department_idDepartment
         join bank.application a on c.idClient = a.Client_idClient
group by DepartmentCity limit 1;


# 16. Вивести відділення, яке видало найбільший кредит.
#

select City ,MAX(Sum)
from application
    join client c on c.idClient = application.Client_idClient
    join department d on c.Department_idDepartment = d.idDepartment
#
# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
#


# 18. Усіх клієнтів київських відділень пересилити до Києва.
#
#
# 19. Видалити усі кредити, які є повернені.
#
#
#
# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.