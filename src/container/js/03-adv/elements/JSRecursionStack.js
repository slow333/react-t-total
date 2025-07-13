import React from 'react'

function JSRecursionStack() {
  
  const fib = (n) => {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
  }
  const factorial = (n) => (n === 1) ? 1 : n*(factorial(n-1));

  const sumTo = (num) => (num === 1) ? 1 : num + sumTo(num -1);

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  let sum =0;
  const sumValue = (list) => {
    sum += list.value; // 현재 요소를 출력합니다.
    if (list.next) 
      sumValue(list.next); // 같은 방법을 사용해 나머지 요소를 출력합니다.
    return sum;
  }
  
  return (
    <div>
      <div className="for-space" id='js-recursion'></div>
      <h1>재귀와 스택</h1>
      <h3>pow(x, n)</h3>
      <pre>{`function pow(x, n) {
    if(n ===1 ) return x;
    else x*pow(x*n-1)
  }`}</pre>
    <ul>
      <li> {`Context : { x: 2, n: 1, 첫 번째 줄 } : pow(2, 1)`} </li>
      <li> {`Context : { x: 2, n: 2, 다섯 번째 줄 } : pow(2, 2)`}</li>
      <li> {`Context : { x: 2, n: 3, 다섯 번째 줄 } : pow(2, 3)`}</li>
    </ul>
    <h3>봉급합 구하기</h3>
    <pre>{`let company = { 
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  if (Array.isArray(department)) { // 첫 번째 경우
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // 두 번째 경우
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}
alert(sumSalaries(company)); // 7700`}</pre>
  <pre>{`let list = {
    value: 1, 
      next: { value: 2, 
        next: { value: 3, 
          next: { value: 4, 
            next: null } } }
  };`}</pre>
  <pre>{` let sum;
  function sumValue(obj) {
    sum += obj.value
    if(obj.next) sumValue(obj.next)
    return sum;
  }`} </pre>

      <h3>주어진 숫자까지의 모든 숫자 더하기</h3>
    <pre>{`function sumTo(num) {
  if(num === 1) return num;
  else {
    let sum = 0;
    sum += num + sumTo(num -1);
    return sum;
  }    
}`}</pre>
      <h3>팩토리얼 계산하기</h3>
  <pre>{`function factorial(n) {
  return (n === 1) ? 1 : n*(factorial(n-1));
  }`}</pre>
      <h3>피보나치 수열</h3>
  <pre>{`function fib(n) {
  if(n &lt;= 1) return n;
  return fib(n-1) + fib(n-2);
}`}</pre>
    </div>
  )
}

export default JSRecursionStack
