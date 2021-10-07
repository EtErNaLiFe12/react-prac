import React, { useState } from 'react';

export default function InputSample() {

  // const [text, setText] = useState('');

  // const onChange = (e) => {
  //   setText(e.target.value);
  // }

  // const onReset = () => {
  //   setText('');
  // }
  // return (
  //   <div>
  //    <input onChange={onChange} value={text}/>
  //    <button onClick={onReset}>초기화</button> 
  //    <div>
  //      <b>값: </b>
  //       {text}
  //    </div>
  //   </div>
  // );
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  }); // 객체 상태를 업데이트 해줌

  const {name, nickname} = inputs; // 비구조 할당

  const onChange = (e) => {
    const { name, value } = e.target; //비구조할당
    setInputs({
      ...inputs, //spread 문법으로 객체 데이터 복사하여 가져오고
      [name]: value, // 업데이트를 해준다. 여기서 [name]은 문자로 인식을 안하게 하기위함임. // 불변성을 지키기위함
    });
    
  }
  
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  }
  return (
    <div>
     <input name="name" placeholder="이름" onChange={onChange} value={name}/>
     <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
     <button onClick={onReset}>초기화</button>
     <div>
       <b>값: </b>
       {name} ({nickname})
     </div>
    </div>
  );
}