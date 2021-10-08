import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css'
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  
  // const message = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '24',
  //   padding: '1rem'
  // };

  const [users, setUsers] = useState([
      {
        id: 1,
        username: 'a',
        email: 'wnsqja1111@naver.com'
      },
      {
        id: 2,
        username: 'b',
        email: 'wnsqja2222@naver.com'
      },
      {
        id: 3,
        username: 'c',
        email: 'wnsqja3333@naver.com'
      }
  ]);

  
  const nextId = useRef(4); // rerendering은 안됨

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user])
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });  
    console.log(nextId.current); //4
    nextId.current += 1;
  }

  const [inputs, setInputs] = useState ({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <>
     {/* <Wrapper>
       <Hello color="#fb5849" msg="hello react" isSpecial />
       <Hello color="pink"/>
     </Wrapper>
     <Counter/> */}
    
     {/* <button style={{width:50, height:20}}>click</button> */}
     {/* <div style={style}>{message}</div>
     <div className="gray-box">{message}</div> */}
     {/* <InputSample/> */}
     <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
      />
     <UserList users={users}/>
    </>
  );
}

export default App;
