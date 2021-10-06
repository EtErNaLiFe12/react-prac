import React from 'react';

// export default function Hello(props) {
//   return <div style={{color:props.color}}>{props.msg}</div>
// }

export default function Hello({ color, msg, isSpecial }) {
  return (
    <div style={{color}}>
      {/* {isSpecial ? <b>*</b>: null} */}
      {isSpecial && <b>*</b>} 
      {/* && 연산자 사용시 - true일때 오른쪽 실행 false일때는 없음 */}
      {msg}
    </div>
  )
}

Hello.defaultProps = {
  msg: '이름없음'
};
