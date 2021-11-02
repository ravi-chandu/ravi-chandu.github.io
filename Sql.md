# SQL
*Breifly I will explain some sql functions*

## Topics 
1. [Basic Sql Functions](#basic-sql-functions)
1. [WHERE](#where)
   1. [LIKE](#like)
   2. [IN](#in)
   3. [AND, BETWEEN, OR](#and-between-or)
1. [NOT](#not)
1. [DERIVED COLUMN](#derived-column)
1. [COUNT](#count)
1. [DISTINCT](#distinct)
1. [SUM](#sum)
1. [MIN & MAX](#min-max)
1. [GROUP BY](#group-by)
1. [DATE_TRUNC](#date_trunc)
1. [DATE_PART](#date_part)
1. [HAVING](#having)
1. [JOINs](https://ravi-chandu.github.io/SQL-Joins-Power-BI/)

## Basic SQL Functions
 
- `SELECT` - Select the columns we want (if we want to pull all the columns in the table then we don't need to type all the column names - just enter *  )
 
-  `FROM` - from which table we want to pull the data
  
-  `LIMIT` - limit the numbers of rows
  
- `ORDER BY` - for sort the data - by specifying the column name we want to sort the table ( by default OERDER BY is asec order, we want to sort in Desc order then we have to specify `DESC` after the column name).
  we can sort multiple columns and specify DESC after the column name for which we want sort it in DESC order.
  
```SQL
SELECT orders_id, sales_amount
 FROM transcation
ORDER BY sales_amount DESC
LIMIT 10;
```
*here we get Top 10 sales transcation based on sales amount*

---

## WHERE
- `WHERE` - it is acts like a filter *where the orders value is more than $1000* like that. common symbols used in WHERE statement are(for numerical data) >, <, >=, <=, =, !=. we can use it for non numerical columns by using = , !=

```SQL
SELECT orders_id, sales_amount
 FROM transcation
WHERE sales_amount > 1000;
```
*here we get all orders sales amount more than 1000*

---

## LIKE
- `LIKE` - if we want to filter the column then we use `WHERE`, but if we want to filter non-numerical coulmns(Text Columns) by a specific word in this case WHERE function directly not work.

Example: customers names - ram kiran, ram krishana, sultan, ashok

these are the names we have, we want to filter all the customners who as name "ram", if we use WHERE cutomer_name = "ram" - doesn't work here

for this we can use `LIKE` function

```SQL
SELECT customer_names
 FROM customers
 WHERE customer_names LIKE '%ram%';
 ```
 
 *here  we get all the customers who's name is ram*

and the `%` symbol also have importance,

if we use `%` symbol on both sides of word '%ram%' - it filters all names where ram is present.

If we use `%` symbol on right side 'ram%' - it filters only where the name starts with ram.

If we use `%` symbol on left side '%ram' - it filters only where the name ends with ram.

we can use single letters also like name starts with r - 'r%'


---

## IN

- `IN` - If we want to filter the columns by more than one value then we use IN function
```SQL
SELECT markets, customer_names, sales_amount
 FROM transcations
 WHERE markets IN ('hyd', 'kkr', 'alu')
 ```
 
 *here we get data relating that specific markets*
 

 ---
 
 ## AND, BETWEEN, OR
 
`AND, BETWEEN, OR` - when we to filter the data based on multiple conditions then we use AND, BETWEEN.

AND
```SQL
SELECT markets, customer_names, sales_amount
 FROM transcations
WHERE sales_amount >= 1000 AND Markets = 'hyd';
 ``` 
 
*here we filtered where customers market = hyd & sales amount >= 1000*

BETWEEN
```SQL
SELECT markets, customer_names, sales_amount
 FROM transcations
WHERE sales_amount BETWEEN 1000 AND 1500;
 ``` 
  
*here we filtered sales amount between 1000 to 1500*

OR 
```SQL
SELECT markets, customer_names, sales_amount
 FROM transcations
WHERE markets = 'hyd' OR customer_names = 'ram';
 ``` 
 
*here we get markets markets is hyd & customers_names with ram*

We can use all these in single query also

```SQL
SELECT markets, customer_names, sales_amount
 FROM transcations
WHERE (sales_amount BETWEEN 1000 AND 1500) 
AND markets = 'hyd';
 ```  
 
*here we get sales amount btween 1000 to 1500 where markets is filtered hyd - sales in hyd market between 1000 to 1500*

---

## NOT 

 `NOT` - we can use NOT for pulling other than mentioned items, we can use with - NOT LIKE, NOT IN.
 
---
 
## DERIVED COLUMN

- `Derived Columns`  - we can create a new column using existing columns like adding two columns or calculating percentage and give column name by AS statement but we can simply enter name after the condition it automatically take it as column header.

```SQL
SELECT orders_id, sales_amount, (profit/sales_amount)*100 profit_percent
FROM transcation
```

*here we create new column and name it as profit_percent*

---

## COUNT

- `Count` - helpful for counting the number of rows

```SQL
SELECT COUNT(*) AS number_of_customers
 FROM customers_table
 ```
 
 *here we get number of customers and we can use specific column if there is nulls in column*
 
 ---
 
 
 ## DISTINCT 
 
 - `Distinct` - it help us to pull the unique items in the column

```SQL
SELECT DISTINCT customers_id
FROM transcation
```

*here we get all thr unique customers*

---


 
 ## SUM
 
 - `Sum` - adding the all the values in column

```SQL
SELECT SUM(sales_amount) AS total_sales
 FROM transcations
 ```
 
 *here we get total sales value*
 
---

## MIN, MAX

- `MIN, MAX` - pull the min & max value in the column

```SQL
SELECT MIN(sales_amount) min_sales_amount
       MAX(sales_amount) max_sales_amount
  FROM transcation
  ```
  
  ---
    
## GROUP BY

- `Group By` - Group By helps us to group the similiar items like how much each customer bought this year,(here cutomer may purchase multiple times in year but we can group it in single value)

```SQL
SELECT c.customers_id, SUM(sales_amount)  sales_amount
 FROM customers c
 JOIN transcations t
 ON c.customers_id = t.customers_id
 GROUP BY customer_id
 ORDER BY customer_id
 ```
 
 *here we get the total value of each customer purchase, we want to know for this year only then we filter it using WHERE clause ( WHERE order_date BETWEEN 01/01/2021 AND 31/12/2021)*
 
 ---
 
 ## DATE_TRUNC
 
 - `DATE_TRUNC` - same as Group By but DATE_TRUNC groups by date (example total sales by day, visits of the day) we can group not only by day, we  can by 'Second', 'day', 'month', 'year' etc.

```SQL
SELECT DATE_TRUNC('month', orders_date) month, SUM(sales_amount)
 FORM transcations
 GROUP BY 1
 ORDER BY 2 DESC
 ```
 
 here date change like this - 01/01/2021 (for entire jan month same as remaining months)
 
*here we gwt month wise total sales in desc order(highest month first)*

---

## DATE_PART

- `DATE_PART` -  DATE_PART help us to pull the specific part of date like 'day','dow'(0 = sunday, 6 = saturday), 'month', 'year', etc. <br>
example: what is peak day in the week for the last five years

```SQL
SELECT DATE_PART('dow', order_date) peek_day_of_week, SUM(sales_amount) total_sales
 FROM transcation
 WHERE order_date BETWEEN '01/01/2016' AND '31/12/2021'
GROUP BY 1
ORDER BY 2;
```

---
 
 ## HAVING
 
 - `Having` - HAVING is used instead of WHERE(Having function is used when the query is created by agregate functions like sum, divide. here WHERE function not work)

```SQL
SELECT c.customers_id, SUM(sales_amount) sales_amount
 FROM customers c
  JOIN transcation t
  ON c.id = t.id
 GROUP BY 1
 HAVING sales_amount > 1000;
 ```
 
 *here we get total sales amount by customers who's total sales amount is more than 100 (valuable customer)*
 
 
 ---
 
 


