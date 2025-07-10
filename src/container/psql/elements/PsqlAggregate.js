import React from 'react'

function PsqlAggregate() {
  return (
    <div>
      <div id='psql-aggregate' className="for-space"></div>
      <h1>SQL Aggregate</h1>
  <h3>The most commonly used SQL arrgregate functions:</h3>
  <ul>
    <li>COUNT() - Returns the number of rows that matches a specified criterion</li>
    <li>SUM() - Returns the total sum of a numeric column</li>
    <li>AVG() - Returns the average value of a numeric column</li>
    <li>MIN() - Returns the smallest value of the selected column</li>
    <li>MAX() - Returns the largest value of the selected column</li>
  </ul>

  <h3>Min and Max</h3>
  <pre>SELECT MIN(Price) FROM Product WHERE condition; <br/>
  SELECT MAX(Price) FROM Product WHERE condition; <br/>
  SELECT categoryID, <br/>
    min(price) AS min_price,<br/>
    max(price) AS max_price,<br/>
    avg(price) AS avg_price<br/>
    FROM product<br/>
    GROUP BY categoryid;</pre>

  <h3>COUNT</h3>
  <pre>SELECT COUNT(*) FROM Product WHERE condition;<br/>
  SELECT COUNT(country) FROM customer;<br/>
  중복 제거안하면 값이 있는 모든 ROW를 샘<br/>
  SELECT count(city) as cityCount, count(DISTINCT country) as 'Country Count' <br/>
    FROM customer WHERE id  &lt; 33;<br/>
  SELECT country, count(*) as '전체 레코드 숫자' <br/>
    FROM customer GROUP BY country;</pre>

  <h3>SUM</h3>
  <pre>SELECT SUM(price) FROM Product WHERE condition;<br/>
  SELECT sum(quantity) FROM order_detail WHERE order_id = 1;<br/>
  SELECT order_id as OrderID, sum(quantity) as Quantity, sum(price) as Price<br/>
    FROM order_detail <br/>
    GROUP BY order_id<br/>
    {`HAVING sum(quantity) > 2;`}<br/>
  SELECT order_id, SUM(quantity * price) AS total_sales<br/>
    FROM order_detail<br/>
    GROUP BY order_id;<br/>
  SELECT SUM(quantity * od.price) AS total_sales<br/>
    FROM order_detail od<br/>
    LEFT JOIN product ON od.product_id = product.id;</pre>

  <h3>AVG</h3>
  <pre>SELECT AVG(price) FROM Product WHERE condition;<br/>
  SELECT CategoryID, AVG(price) AS average_price FROM product GROUP BY CategoryID;<br/>
  SELECT AVG(price) AS average_price FROM product WHERE CategoryID = 1;<br/>
  SELECT * FROM product<br/>
    {`WHERE price > (SELECT AVG(price) FROM product)`}</pre>
    </div>
  )
}

export default PsqlAggregate
