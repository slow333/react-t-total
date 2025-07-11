import React from 'react'

function PsqlSelect() {
  return (
    <div>
      <div id='psql-select' className="for-space"></div>
      <h1>SELECT</h1>

<h2>SELECT 문법</h2>
<h3>끝에 \G하면 row 단위로 보여줌</h3>
<h3>explain; 세부 정보를 보여줌</h3>
<pre>explain select * from abc\G;</pre>

{/* <!-- ############## 선택자 #########################--> */}
<h2>선택자 종류</h2>
<pre>{`=, >, &lt; , &gt;=, &lt;=
&lt;&gt; 	Not equal. may be written as !=
BETWEEN   Between a certain range(inclusive)
LIKE      Search for a pattern(wildcard: %, _)
IN        To specify multiple possible values for a column
LIMIT     Used to specify the number of records to return
OR, AND, NOT
IS NULL, IS NOT NULL`}</pre>
{/* <!-- ############## where #########################--> */}
<h3>WHERE</h3>
  <pre>{`SELECT column1, column2 FROM table_name WHERE condition;

SELECT * FROM Customers WHERE Country='Mexico' AND email IS NOT NULL;
SELECT * FROM Customers WHERE Country='Mexico' AND City='Mexico City';
SELECT * FROM Customers WHERE Country='Mexico' OR Country='USA';
SELECT * FROM Customers WHERE Country='Mexico' OR country LIKE 'United%';
SELECT * FROM Customers WHERE CustomerID < 10;
-- BETWEEN 시작끝 포함
SELECT * FROM Customers WHERE CustomerID BETWEEN 10 AND 19; 
SELECT * FROM Customers WHERE City IN ('Paris','London');`}</pre>
{/* <!-- ############## and, or #########################--> */}
<h3>AND, OR</h3>
<pre>{`SELECT * FROM customer
  WHERE country = 'Germany' AND (name LIKE 'R%' OR name LIKE 'E%');
SELECT * FROM Customer
  WHERE City = 'Berlin' OR name LIKE 'G%' OR Country = 'Norway'; `}</pre>
{/* <!-- ############## not #########################--> */}
<h3>NOT</h3>
<pre>{`SELECT * FROM customer WHERE NOT country = 'Germany';
SELECT * FROM customer WHERE country NOT LIKE 'G%';
SELECT * FROM customer WHERE id NOT BETWEEN 10 AND 22;
SELECT * FROM customer WHERE city NOT IN('Paris', 'London');
SELECT country, city FROM customer WHERE city NOT IN('Paris', 'London', 'Tulle') 
  AND country NOT IN('Germany', 'France');`}</pre>
{/* <!-- ############## in #########################--> */}
<h3>IN</h3>
<pre>SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');</pre>
{/* <!-- ############## order by #########################--> */}
<h3>ORDER BY</h3>
  <pre>{`SELECT column1, ... FROM table_name ORDER BY column1, column2, ... ASC|DESC;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;  `}</pre>
{/* <!-- ############## null #########################--> */}
<h3>NULL</h3>
<pre>SELECT * FROM Customer WHERE City IS NULL;<br/>
  SELECT * FROM Customer WHERE City IS NOT NULL;</pre>
{/* <!-- ############## intersect #########################--> */}
<h3>INTERSECT: 공통으로 적용되는 범위를 보여줌</h3>
<pre>{`select * from employees where office_id >3  
intersect 
select * from employees where salary < 60000;`}</pre>
{/* <!-- ############## except #########################--> */}
<h3>EXCEPT: 첫번째 쿼리에서 두번째 쿼리의 결과를 제외함</h3>
<pre>{`select * from employees where office_id > 3 
except
select * from employees where salary < 60000;`}</pre>
{/* <!-- ############## limit #########################--> */}
<h3>LIMIT</h3>
<pre>SELECT * FROM Customers LIMIT 5; -- 처음 5개만<br/>
SELECT * FROM Customers OFFSET 10 LIMIT 5; -- 11번째부터 5개<br/>
SELECT * FROM Customers 5, 10; -- 6번째부터 10개</pre>

{/* <!-- ############## sub query        #########################--> */}
<h2>Subquery</h2>
<h3>Subquery는 쿼리 안에 또 다른 쿼리를 넣는 것</h3>
<pre>SELECT column_name(s) FROM table_name<br/>
  WHERE column_name operator<br/>
  (SELECT column_name FROM table_name WHERE condition);</pre>
<h3>Subquery는 SELECT, INSERT, UPDATE, DELETE 문에서 사용 가능</h3>
<pre> SELECT first_name, last_name, salary FROM employees <br/>
  WHERE salary &gt; (SELECT AVG(salary) from employees);</pre>
<pre>SELECT first_name, last_name FROM employees <br/>
  WHERE employee_id IN<br/>
  (SELECT DISTINCT customer_id FROM transactions<br/>
  WHERE customer_id IS NOT NULL);</pre>
<pre>SELECT categoryId, CategoryName,<br/>
  (select max(price) from products p where c.CategoryId = p.CategoryID) as CatMax,<br/>
  (select avg(price) from products p where c.CategoryId = p.CategoryID) as Cat평균<br/>
from categories c;</pre>

{/* <!-- ############## exists, any, all #########################--> */}
<h2>EXISTS</h2>
<h4>if true return value</h4>
<h4>The EXISTS operator is used to test for the existence of any record in a subquery.</h4>
<pre>SELECT column_name(s) FROM table_name<br/>
WHERE EXISTS (SELECT column_name(s) FROM table_name WHERE condition);</pre>
<pre>SELECT SupplierName FROM suppliers<br/>
WHERE EXISTS (SELECT name FROM product <br/>
  WHERE product.supplierID = suppliers.supplierID<br/>
  {`AND Price < 20`} );</pre>

<h2>ANY</h2>
<pre>SELECT ProductName FROM Products<br/>
WHERE ProductID = ANY<br/>
  (SELECT ProductID FROM OrderDetails<br/>
  WHERE Quantity = 10); </pre>
<pre>SELECT name FROM product<br/>
  WHERE id = ANY -- WHERE ID IN 과 동일<br/>
  ( SELECT order_id FROM orders WHERE quantity {`<`} 4);</pre>

<h2>ALL</h2>
<pre>SELECT name FROM product<br/>
  WHERE id = ALL <br/>
  ( SELECT order_id FROM orders WHERE quantity {`<`}  14);</pre>  

    <div id='psql-wildcard' className="for-space"></div>
    <h1>Wildcard</h1>
    <h2>wildcard characters</h2>
    <h4>  %	: 0개 이상의 문자<br/>
   _ : 한개의 문자<br/>
   [charlist]	: 안에 들거간 것중 한개(for example, [a-f])(psql 미지원)<br/>
  [^charlist] : 안에 것을 포함하지 않음(for example, [^a-f])(psql 미지원)<br/>
 ^ : not(psql 미지원)<br/>
 {`{}`} : 특수 문자(psql 미지원)</h4>

  <h3>REGEXP도 가능 : '^' 시작, '$' 끝, 'w' w포함, '^.....$' 5글자, '^.{5}$' 5글자</h3>
  <p>SELECT * FROM Customers<br/>
  WHERE CustomerName REGEXP '^a'; -- a로 시작하는 모든 고객을 반환합니다.<br/>
  WHERE CustomerName REGEXP 'a$'; -- a로 끝나는 모든 고객을 반환합니다.<br/>
  WHERE CustomerName REGEXP 'a|b'; -- a 또는 b가 포함된 모든 고객을 반환합니다.<br/>
  WHERE CustomerName REGEXP '^[a-zA-Z]'; -- 알파벳으로 시작하는 모든 고객을 반환합니다.<br/>
  WHERE CustomerName REGEXP '^[0-9]'; -- 숫자로 시작하는 모든 고객을 반환합니다.</p>
{/* <!-- ################ LIKE ################# --> */}
<h2>LIKE</h2>
<pre>SELECT * FROM Customers<br/>
  WHERE CustomerName LIKE 'a%';</pre>
<pre>SELECT * FROM Customers<br/>
  WHERE CustomerName LIKE 'a_%';</pre>
    <h2>The _ wildcard represents a single character.</h2>
  <pre>SELECT * FROM Customers<br/>
  WHERE city LIKE 'L_nd__';</pre>


 <h3>% Wildcard</h3>
  <pre>{`-- a 또는 b로 시작하는 모든 고객을 반환합니다:
  SELECT * FROM Customers
  WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';

  SELECT * FROM Customers WHERE CustomerName LIKE 'b%s';

  SELECT * FROM Customers WHERE CustomerName LIKE '%or%';

  SELECT * FROM Customers WHERE hire_date LIKE '____-01-__%'; -- 1월 찾기
  SELECT * FROM Customers WHERE CustomerName LIKE 'a__%';
  SELECT * FROM Customers WHERE CustomerName LIKE '_r%';

  /**
   * IN, NOT IN, BETWEEN, NOT BETWEEN
   * IN은 특정 값이 있는지 확인하는 것
   * BETWEEN은 범위에 있는지 확인하는 것
   */`}</pre>

<h2>IN</h2>
<pre>SELECT * FROM Customers<br/>
WHERE City IN ('Berlin', 'London');</pre>

<h3>NOT IN</h3>
<pre>SELECT * FROM Customers<br/>
WHERE City NOT IN ('Berlin', 'London');</pre>

<h3>IN (SELECT)</h3>
<pre>다른 테이블에서 값을 가져오는 경우<br/>
SELECT * FROM Customers<br/>
WHERE City IN (SELECT City FROM Suppliers);</pre>

<h3>NOT IN (SELECT)</h3>
<pre>SELECT * FROM Customers<br/>
  WHERE City NOT IN (SELECT City FROM Suppliers);<br/>
  SELECT * FROM product<br/>
  WHERE product.id NOT IN (SELECT quantity FROM order_detail);</pre>

<h2>BETWEEN</h2>
<pre>SELECT * FROM Customers WHERE City BETWEEN 'Berlin' AND 'London';</pre>

<h3>NOT BETWEEN</h3>
<pre>SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20;</pre>

<h3>BETWEEN with IN</h3>
<pre>SELECT * FROM Products WHERE Price BETWEEN 10 AND 20
  AND CategoryID IN (1,2,3);</pre>

<h3>BETWEEN Text Values</h3>  
<pre>{`SELECT * FROM Products
  WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
  ORDER BY ProductName;
SELECT * FROM Products
  WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
  ORDER BY ProductName;`}</pre>

<h3>BETWEEN with Date Values</h3>
<pre>SELECT * FROM Orders
  WHERE OrderDate BETWEEN '1996-07-04' AND '1996-07-08';</pre>

<h2>Aliases</h2>
<h3>대부분 AS를 빼도 됨</h3>
<pre>{`SELECT ProductName AS Product, Price AS Cost
  FROM Products
  WHERE Price BETWEEN 10 AND 20;
SELECT ProductName Product, Price Cost
  FROM Products
  WHERE Price BETWEEN 10 AND 20;
SELECT ProductName AS "My Great Products" FROM Products;`} </pre>

<h3>Concatenate Columns</h3>
<pre>{`SELECT name , address +',' + city+',' + country address
  FROM customer; // 이거 잘안됨
SELECT name , CONCAT(address,',' ,city,',', country) AS address
  FROM customer;`}</pre>
  
<h3>Alias for Tables</h3>
<pre>{`SELECT o.OrderID, o.OrderDate, c.CustomerName
  FROM Customers AS c, Orders AS o
  WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
SELECT c.name, o.price, c.address
  FROM customer c, order_detail o
  WHERE c.id = o.id;`}</pre>
    </div>
  )
}

export default PsqlSelect
