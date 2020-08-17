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
    join department d on c.Department_idDepartment = d.idDepartment;
#
# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
#
update application
set Sum = 6000
where Client_idClient  in (
    select idClient
    from client where Education like 'high' );

# 18. Усіх клієнтів київських відділень пересилити до Києва.
#
update client
set City = 'Kyiv'
where Department_idDepartment in (select idDepartment from department where DepartmentCity = 'Kyiv');

#
# 19. Видалити усі кредити, які є повернені.
#
delete FROM application where CreditState like 'Returned';

#
# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
#
delete from application
where Client_idClient
          in (select idClient from client
          where LastName like '_a%'  or
                LastName like '_e%' or
                LastName like '_i%' or
                LastName like '_o%' or
                LastName like '_u%'
                )
;

# 21    Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
#
select Sum(Sum) as bankSum,
       DepartmentCity,
       Department_idDepartment did
from client c
    join application a on c.idClient = a.Client_idClient
    join department d on d.idDepartment = c.Department_idDepartment
where DepartmentCity = 'Lviv'
group by did
having bankSum > 5000
order by bankSum desc;


#
# 22 Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
#
#
select LastName, FirstName, Sum
from client c
    join application a on c.idClient = a.Client_idClient
where CreditState like 'Returned' and
      Sum > 5000
group by idClient;


#
#

# 23 /* Знайти максимальний неповернений кредит.*/
select FirstName, LastName, max(Sum), CreditState
from application
    join client c on c.idClient = application.Client_idClient
where CreditState = 'Not returned';




# 24 /*Знайти клієнта, сума кредиту якого найменша*/

select sum(Sum) sumMin, FirstName, LastName
from client
    join application a on client.idClient = a.Client_idClient
group by idClient
order by sumMin limit 1;



# 25 /*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/

select Sum
from application
where Sum > (select avg(Sum) from application);


# 26 /*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/

select FirstName, LastName, client.City
from client
    join (SELECT COUNT(Client_idClient) count, Client_idClient, City
        FROM application a
        JOIN client c on a.Client_idClient = c.idClient
        group by Client_idClient
        order by count desc
        limit 1
        ) MaxCredit
where client.City = MaxCredit.City and idClient != Client_idClient;

# 27 #місто чувака який набрав найбільше кредитів

select City, FirstName,LastName, count(Client_idClient) count
from application a
    join client c on c.idClient = a.Client_idClient
GROUP BY Client_idClient
ORDER BY count DESC
LIMIT 1;

# set sql_safe_updates = 0;
# set sql_safe_updates = 1;