# SQL
*Breifly I will explain some sql functions*

## Topics 
1. [Basic Sql Functions](#basic-sql-functions)
1. [WHERE](#where)
   1. [LIKE](#like)
   2. [IN](#in)
   3. [AND, BETWEEN, OR](#and,-between,-or)
1. [NOT](#not)
1. [DERIVED COLUMN](#derived-column)




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
