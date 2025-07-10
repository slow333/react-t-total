import React from 'react'

function PsqlInstallation() {
  return (
    <div>
      <div id='psql-CRUD' className="for-space"></div>
      <h1>PostgreSQL Basic</h1>
      <h3>CREATE USER</h3>
      <pre>CREATE USER user_name WITH PASSWORD 'password' CREATEROLE CREATEDB;</pre>
      <h3>원격 접속; -d database name</h3>
      <pre># psql -U mydbuser -h 127.0.0.1 -d postgres</pre>
      <h3>CREATE DATABASE</h3>
      <pre>=# CREATE DATABASE database_name;</pre>
      <h4>DROP TATABSE</h4>
      <pre>=# DROP DATABASE database_name;</pre>
      <h4>db connect</h4>
      <pre>=# \c database_name</pre>
      <h3>CREATE TABLE</h3>
      <p>SERIAL : auto increment, BIGSERIAL</p>
      <pre>=# CREATE TABLE person (<br/>
          id SERIAL PRIMARY KEY NOT NULL,<br/>
          name VARCHAR(100) NOT NULL,<br/>
          age INT NOT NULL,<br/>
          address VARCHAR(255) NOT NULL,<br/>
          created_at TIMESTAMP );</pre>
      <h4>DROM TABLE</h4>
      <pre>=# DROP TABLE person;</pre>
      <h3>INSERT</h3>
      <pre>=# INSERT INTO person (name, age, address, created_at)<br/>
          VALUES ('John Doe', 30, '123 Main St', NOW()),<br/>
          ('John Doe', 30, '123 Main St', '2019-02-22');</pre>
      <h4>Import data from file : https://www.mockaroo.com/</h4>
      <pre>=# \copy person FROM '/path/to/file.csv' DELIMITER ',' CSV HEADER;<br/>
    =# \i '/path/to/file.sql';</pre>
    </div>
  )
}

export default PsqlInstallation
