# SQL-Joins-PowerBI
Explaining SQL JOINs with Power BI 

` Power BI Dashboard - SQL JOINs`
<iframe width="600" height="373.5"
 src="https://app.powerbi.com/view?r=eyJrIjoiZmY5YjM1NzItMjhiOC00NTc1LWE1ODUtMGM5ZmM1NmJhNjUwIiwidCI6ImU5ZjMyNWZkLTkzMjYtNDJjNi1iNGNjLTBlZmJhNWQ4OTE3OCJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true">
</iframe>

*lets now discuss about SQL JOINs*

Here are the two Tables using to explain SQL JOINs
<br/> 

`   Consumers      `
| Id	| name	| city |
| -- | -- | -- |
| 1	| ramu |	mumbai |
|2 |	kalyan |	hyderabad |
|3	|siri	| hyderabad |
| 4	| vasavi	| delhi |
| 5	|rani	| mumbai |
| 6	|kumar	| chennai |
| 7 |	nani |	kerala |
| 8	| vasanth |	hyderabad |
<br/> 

   `Transcation`
| Id | quantity | amount|
| --| --| --|
| 1 | 10 | 900 |
| 2 | 4 | 350 |
| 4 | 11 | 950 |
| 6 | 8 | 700 |
| 7 | 15 | 1200 |
| 8 | 6 | 500 |
| 9 | 3 | 300 |


## SQL JOINs

Here are the some basic SQL JOINs presented here ` MYSQL`
1. [Join(Inner join)](#Types-of-SQL-JOINs)
2. Left Join 
3. Right Join 
4. Full outer Join 


Join statement helps pull the data from multiple tables.

**If we want to pull the data from a table, then what we do?  (Basic query)**

```
SELECT the column names
FROM that table
```
**Now if we want to pull the data from two tables, then?***

We need to JOIN the tables ON relation among the tables

``` 
SELECT the columns from both tables (prefix with their table identification)
FROM table1
JOIN table2
ON specifying the relation between the two tables 
```

If we want to pull the data from 3 or more tables - the process same
```
SELECT the columns from both tables (prefix with their table identification)
FROM table1
JOIN table2
ON specifying the relation between table1 & table2
JOIN tables3
ON specifying the relation between table2 & table3
```

## Types of SQL JOINs

### Join(Inner join) 

