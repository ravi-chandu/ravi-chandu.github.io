# SQL-Joins-PowerBI

[`Github Repo`](https://github.com/ravi-chandu/SQL-Joins-PowerBI)<br>
Explaining SQL JOINs with Power BI 


` Power BI Dashboard - SQL JOINs`
<iframe width="100%" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmY5YjM1NzItMjhiOC00NTc1LWE1ODUtMGM5ZmM1NmJhNjUwIiwidCI6ImU5ZjMyNWZkLTkzMjYtNDJjNi1iNGNjLTBlZmJhNWQ4OTE3OCJ9&pageName=ReportSection831f013a902f45eed7c9" frameborder="0" allowFullScreen="true"></iframe>

*lets now discuss about SQL JOINs*

Here are the two Tables using to explain SQL JOINs
<br/> 

`   Consumers Table   `

![image](https://user-images.githubusercontent.com/92777166/138413941-56b9e2e1-4d2b-4c78-bf2f-9d5d450a3965.png)

<br/> 

   `Transcation Table`

![image](https://user-images.githubusercontent.com/92777166/138414224-f2575842-246f-4f8b-a04d-679c3939adf6.png)


## SQL JOINs

Here are the some basic SQL JOINs presented here ` MYSQL`
1. Join(Inner join
2. Left Join 
3. Right Join 
4. Full outer Join 

### `Basic Concept of Join`

Join statement helps pull the data from multiple tables.

**If we want to pull the data from a table, then what we do?  (Basic query)**

```sql
SELECT the column names
 FROM that table
```
**Now if we want to pull the data from two tables, then?***

We need to JOIN the tables ON relation among the tables

``` sql
SELECT the columns from both tables (prefix with their table identification)
 FROM table1
  JOIN table2
   ON specifying the relation between the two tables 
```

If we want to pull the data from 3 or more tables - the process same
```sql
SELECT the columns from both tables (prefix with their table identification)
 FROM table1
  JOIN table2
   ON specifying the relation between table1 & table2
    JOIN tables3
     ON specifying the relation between table2 & table3
```

## Types of SQL JOINs
<br/> 

### 1) JOIN(INNER JOIN)

`JOIN = INNER JOIN (normally JOIN means INNER JOIN)`

It only pulls the common data (available in both the tables) like intersection 

![inner join](https://user-images.githubusercontent.com/92777166/138407773-d717cd79-3ac0-438a-9019-160d69fab817.jpg)

`MYSQL`
```sql
SELECT c.id, c.name, t.quantity, t.amount
 FROM consumers c
  JOIN transcation t
    ON c.id = t.id
```

**Table we get (output)**

![image](https://user-images.githubusercontent.com/92777166/138411157-fea5f79c-a377-491d-9de6-40870cc9d48c.png)

<br/> 

### 2) Left Join 

Left Join pulls all the records of left table(Consumers Table) and common(Matching) data from right table(Transcation table)

![left join](https://user-images.githubusercontent.com/92777166/138409656-de101452-5636-4c7f-a4ed-d0fa1bcf2a4a.jpg)

`MYSQL`

```sql
SELECT c.id, c.name, t.quantity, t.amount
 FROM consumers c
  LEFT JOIN transcation t
    ON c.id = t.id
```

**Table we get (output)**

![image](https://user-images.githubusercontent.com/92777166/138410861-2a7cee85-62e4-4dc8-8f98-4b997998c192.png)

<br/> 

### 3) Right Join

Right Join pulls all the records of Right table(Transcation Table) and common(Matching) data from Left table(Consumer table)

![right join](https://user-images.githubusercontent.com/92777166/138411976-d04ac658-be12-4e6d-86e9-6442e508c23b.jpg)

`MYSQL`

```sql
SELECT c.id, c.name, t.quantity, t.amount
 FROM consumers c
  RIGHT JOIN transcation t
    ON c.id = t.id
```

**Table we get (output)**

![image](https://user-images.githubusercontent.com/92777166/138411605-8495b254-d4b0-4e8d-a059-2807b3ef8e0c.png)

<br/> 

### 4) Full outer Join 

*In mysql there is no full outer join so we need to use UNION*

Full outer Join pull all the data from both the tables

![full join](https://user-images.githubusercontent.com/92777166/138411908-58c5f5bd-57a6-499b-8ff3-d50e4624495e.jpg)

`MYSQL`

```sql
SELECT c.id, c.name, t.quantity, t.amount
 FROM consumers c
  Left JOIN transcation t
    ON c.id = t.id
UNION
SELECT c.id, c.name, t.quantity, t.amount
 FROM consumers c
  Right JOIN transcation t
    ON c.id = t.id
```

**Table we get (output)**

![image](https://user-images.githubusercontent.com/92777166/138412462-2ecc0cd4-fa8d-431c-b287-674a77d596ac.png)


*and some more advanced joins - Self join, Union all, Cross join. soon.. I will ✌️*

