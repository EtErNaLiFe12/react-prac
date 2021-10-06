import React, { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);

  const increase = () => {
    // setNum(prevNumber => prevNumber + 1); // 함수형 업데이트 - 최적화랑 관련되어있음
    setNum(num + 1);
  } 

  const decrease = () => {
    setNum(num - 1);
  }
  return (
    <>
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
    </>
  )
}