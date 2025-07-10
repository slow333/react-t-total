import React from 'react'

function PsqlConstraints() {
  return (
    <div>
      <div id='psql-constraints' className="for-space"></div>
      <h1>SQL constraints</h1>
      <p>: 테이블에 있는 데이터에 대해 규칙을 정의하는데 사용됨, 이 규칙을 위반하면 action이 중단됨</p>
      <h2>SYNTAX</h2>
      <pre>CREATE TABLE table_name (<br/>
        column1 datatype constraint,<br/>
        column3 datatype constraint,<br/>
        ....<br/>
        );</pre>
      {/* <!-- @@@@@@@@@@@@@@ CONSTRAINT 정보 보기 @@@@@@@@@@@@@@@@@@@ --> */}
      <h3>CONSTRAINTS 정보 보기</h3>
      <pre>SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS<br/>
        WHERE TABLE_SCHEMA = 'db name' AND TABLE_NAME = 'table name';<br/>
        SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS<br/>
        WHERE TABLE_SCHEMA = 'mydb';</pre>

      <h2>SQL Constraints 종류</h2>
      <ul>
        <li>INDEX: 검색 속도 향상</li>
        <li>NOT NULL: NULL을 허용하지 않음</li>
        <li>UNIQUE: 중복된 값을 허용하지 않음</li>
        <li>PRIMARY KEY: NOT NULL + UNIQUE, 기본키로 설정</li>
        <li>FOREIGN KEY: 다른 테이블의 기본키를 참조하는 외래키 설정</li>
        <li>CHECK: 조건을 만족하는 값만 허용</li>
        <li>DEFAULT: 기본값 설정</li>
        <li>FULLTEXT: 텍스트 검색을 위한 인덱스</li>
        <li>SPATIAL: 공간 데이터 검색을 위한 인덱스</li>
        <li>AUTO_INCREMENT: 자동으로 증가하는 정수값을 생성</li>
        <li>CASCADE: 외래키가 참조하는 기본키가 변경될 때 ...</li>
      </ul>
      {/* <!-- @@@@@@@@@@@@@@ index @@@@@@@@@@@@@@@@@@@ --> */}
      <h2>INDEX; 특정 컬럼에 대한 검색 속도를 높임</h2>
      <p>인덱스는 테이블의 특정 컬럼에 대한 검색 속도를 높이기 위해 사용됩니다. </p>
      <p>인덱스는 해당 조건에 맞는 테이블의 데이터를 정렬하여 저장하며,
        검색 시 빠르게 찾을 수 있도록 도와줍니다. 그러나 update시에는 시간이 좀더 소요됨.</p>
      <p>사용자에게는 안보임</p>

      <h3>show indexes</h3>
      <pre>SHOW INDEXS FROM table_name\G; -- index가 있는 column에 대한 정보를 보여줌</pre>

      <h3>create index; 테이블 생성시 적용</h3>
      <pre>CREATE TABLE Customers (<br/>
        CustomerID int NOT NULL,<br/>
        CustomerName varchar(255) NOT NULL,<br/>
        INDEX (CustomerName)<br/>
        -- OR, CONSTRAINT IDX_CustomerName INDEX (CustomerName)<br/>
        );</pre>

      <h3>CREATE INDEX로 추가; 중복 인데스 허용</h3>
      <pre>CREATE INDEX index_name ON table_name (column1, column2, ...);</pre>
      <pre>CREATE INDEX idx_customer_name<br/>
        ON Customers (CustomerName, Age, ...);<br/>
        -- 이렇게 하면 인덱스 순서가 customerName, age 순으로 이루러짐(seq_in_index에 1, 2로 표시됨)<br/>
        -- 인덱스 적용시 순서가 중요함<br/>
        -- 인덱스를 추가허면 순서가 다음에 적용됨<br/>
        -- 하나씩 적용하면 seq_in_index가 1로 적용됨, 여러개 한번에 해야 우선순위를 갖음<br/>
        ALTER TABLE mydb.employees<br/>
        ADD INDEX `job_title_idx` (job_title);<br/>
        explain select * from mydb.employees where job_title = 'Manager'\G; </pre>

      <h3>DROP INDEX</h3>
      <pre>ALTER TABLE table_name DROP INDEX index_name;</pre>

      <h3>CREATE UNIQUE INDEX</h3>
      <h4>중복 인데스 허용 안함</h4>
      <pre>CREATE UNIQUE INDEX index_name ON table_name (column1, column2, ...);</pre>

      <h3>CREATE FULLTEXT INDEX</h3>
      <pre>CREATE FULLTEXT INDEX index_name ON table_name (column1, column2, ...);</pre>

      <h3>CREATE SPATIAL INDEX</h3>
      <pre>CREATE SPATIAL INDEX index_name ON table_name (column1, column2, ...);</pre>

      {/* <!-- @@@@@@@@@@@@@@ not null @@@@@@@@@@@@@@@@@@@ --> */}
      <h2>NOT NULL</h2>
      <pre>CREATE TABLE Customers (<br/>
        CustomerID int NOT NULL,<br/>
        CustomerName varchar(255) NOT NULL );<br/>
        ALTER TABLE Persons MODIFY COLUMN Age int NOT NULL;</pre>
      {/* <!-- @@@@@@@@@@@@@@ unique @@@@@@@@@@@@@@@@@@@ --> */}
      <h2>UNIQUE</h2>
      <h3>테이블 생성시 적용</h3>
      <pre>CREATE TABLE Customers (<br/>
        CustomerID int NOT NULL,<br/>
        CustomerName varchar(255) NOT NULL,<br/>
        UNIQUE(CustomerID, CustomerName)<br/>
        -- OR, CONSTRAINT UC_Customer UNIQUE (CustomerID, CustomerName)<br/>
        );</pre>
      <h3>ALTER TABLE로 추가</h3>
      <pre>ALTER TABLE Persons ADD UNIQUE (ID);</pre>
      <pre>ALTER TABLE Persons ADD CONSTRAINT UC_Person UNIQUE (ID, LastName);</pre>
      <h3>DROP a UNIQUE Constraint</h3>
      <pre>ALTER TABLE Persons DROP INDEX UC_Person;</pre>
      {/* <!-- @@@@@@@@@@@@@@ primRY KEY @@@@@@@@@@@@@@@@@@@ --> */}
      <h2>PRIMARY KEY</h2>
      <h3>테이블 생성시 적용</h3>
      <pre>CREATE TABLE Customers (<br/>
        CustomerID int NOT NULL,<br/>
        CustomerName varchar(255) NOT NULL,<br/>
        PRIMARY KEY (CustomerID)<br/>
        -- OR, CONSTRAINT PK_Customer PRIMARY KEY (CustomerID, CustomerName)<br/>
        );</pre>
      <h3>ALTER TABLE로 추가</h3>
      <pre>ALTER TABLE Persons ADD PRIMARY KEY (ID);<br/>
        ALTER TABLE Persons ADD CONSTRAINT PK_Person PRIMARY KEY (ID, LastName);</pre>

      <h3>DROP a PRIMARY KEY Constraint</h3>
      <pre>ALTER TABLE Persons DROP PRIMARY KEY;</pre>
      {/* <!-- @@@@@@@@@@@@@@ FOREIGN KEY @@@@@@@@@@@@@@@@@@@ -->   */}
      <h2>FOREIGN KEY</h2>
      <h3>테이블 생성시 적용</h3>
      <pre>CREATE TABLE Orders (<br/>
        OrderID INT NOT NULL,<br/>
        OrderNumber INT NOT NULL,<br/>
        CustomerID INT FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),<br/>
        PRIMARY KEY (OrderID),<br/>
        -- OR, FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)<br/>
        -- OR, CONSTRAINT FK_Customer FOREIGN KEY (CustomerID)<br/>
        REFERENCES Customers(CustomerID)<br/>
        );</pre>
      <h3>ALTER TABLE로 추가</h3>
      <pre>ALTER TABLE Orders ADD FOREIGN KEY (CustomerID)<br/>
        REFERENCES Customers(CustomerID);<br/>
        ALTER TABLE Orders ADD CONSTRAINT FK_Customer<br/>
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);</pre>
      <h3>DROP a FOREIGN KEY Constraint</h3>
      <pre>ALTER TABLE Orders DROP FOREIGN KEY FK_Customer;</pre>
      <pre> alter table car<br/>
        add column customer_id INT;<br/>
        alter table car<br/>
        add constraint fk_customer_id foreign key (customer_id)<br/>
        references customers(customer_id);</pre>
      {/* // <!-- @@@@@@@@@@@@@@ CHECK @@@@@@@@@@@@@@@@@@@ -->   */}
      <h2>CHECK</h2>
      <h3>테이블 생성시 적용</h3>
      <pre>CREATE TABLE Persons (<br/>
        ID int NOT NULL,<br/>
        LastName varchar(255) NOT NULL,<br/>
        Age int,<br/>
        CHECK (Age &gt;= 18)<br/>
        -- OR, CONSTRAINT CHK_Age CHECK (Age &gt;= 18 AND City = 'Sandnes')<br/>
        );</pre>
        <h3>ALTER TABLE로 추가</h3>
        <pre>ALTER TABLE Persons ADD CHECK (Age &gt;= 18);<br/>
          ALTER TABLE Persons ADD CONSTRAINT CHK_Age<br/>
          CHECK (Age &gt;= 18 AND City = 'Sandnes');</pre>
        <h3>DROP a CHECK Constraint</h3>
        <pre>ALTER TABLE Persons DROP CHECK CHK_Age;</pre>
      {/* // <!-- @@@@@@@@@@@@@@ DEFAULT @@@@@@@@@@@@@@@@@@@ -->   */}
      <h2>DEFAULT</h2>
      <h3>테이블 생성시 적용</h3>
      <pre>CREATE TABLE Persons (<br/>
        ID int NOT NULL,<br/>
        LastName varchar(255) NOT NULL,<br/>
        Age int DEFAULT 18,<br/>
        -- OR, CONSTRAINT DF_Age DEFAULT 18 FOR Age,<br/>
        orderDate DATE DEFAULT GETDATE()<br/>
        );</pre>
        <h3>ALTER TABLE로 추가</h3>
        <pre>ALTER TABLE Persons ALTER Age SET DEFAULT 18;</pre>
        <h3>DROP a DEFAULT Constraint</h3>
        <pre>ALTER TABLE Persons ALTER Age DROP DEFAULT;</pre>
        <h2>AUTO INCREMENT</h2><p>정수형 데이터에 대해 자동으로 증가하는 값을 생성</p>
        <h3>테이블 생성시 적용</h3>
        <pre>CREATE TABLE Customers (<br/>
          ID int NOT NULL AUTO_INCREMENT,<br/>
          LastName varchar(255) NOT NULL,<br/>
          Age int,<br/>
          PRIMARY KEY (ID)<br/>
          );</pre>
        <h3>자동으로 1부터 시작함(변경하는 방법)</h3>
        <pre>ALTER TABLE Customers AUTO_INCREMENT = 100;</pre>
        <h2>CASCADE</h2>
        <ul>
          <li>ON UPDATE CASCADE: 외래키가 참조하는 기본키가 변경될 때 외래키도 자동으로 변경</li>
          <li>ON DELETE CASCADE: 외래키가 참조하는 기본키가 삭제될 때 외래키도 자동으로 삭제</li>
          <li>ON DELETE SET NULL: 외래키가 참조하는 기본키가 삭제될 때 외래키를 NULL로 설정</li>
          <li>ON DELETE SET DEFAULT: 외래키가 참조하는 기본키가 삭제될 때 외래키를 기본값으로 설정</li>
          <li>ON DELETE RESTRICT: 외래키가 참조하는 기본키가 삭제될 때 외래키를 삭제할 수 없음</li>
          <li>ON DELETE NO ACTION: 외래키가 참조하는 기본키가 삭제될 때 외래키를 삭제할 수 없음</li>
          <li>ON DELETE SET DEFAULT: 외래키가 참조하는 기본키가 삭제될 때 외래키를 기본값으로 설정</li>
          <li>ON DELETE SET NULL: 외래키가 참조하는 기본키가 삭제될 때 외래키를 NULL로 설정</li>
          <li>ON UPDATE SET NULL: 외래키가 참조하는 기본키가 변경될 때 외래키를 NULL로 설정</li>
          <li>ON UPDATE SET DEFAULT: 외래키가 참조하는 기본키가 변경될 때 외래키를 기본값으로 설정</li>
          <li>ON UPDATE CASCADE: 외래키가 참조하는 기본키가 변경될 때 외래키도 자동으로 변경</li>
          <li>ON UPDATE CASCADE: 외래키가 참조하는 기본키가 변경될 때 외래키도 자동으로 변경</li>
        </ul>
      <h3>테이블 생성시 적용</h3>
      <pre>CREATE TABLE Orders (<br/>
        OrderID int NOT NULL,<br/>
        OrderNumber int NOT NULL,<br/>
        CustomerID int,<br/>
        PRIMARY KEY (OrderID),<br/>
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)<br/>
        ON DELETE CASCADE<br/>
        ON UPDATE CASCADE<br/>
        );</pre>
    </div>
  )
}

export default PsqlConstraints
