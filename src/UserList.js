import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    // props -> state
    // REST API
    // LIBRARY
    // setInterval, setTimeout
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
      //setInterval, setTimeout, clearTimeout, clearInterval
      // 라이브러리 인스턴스 제거
    }
  },[]);
  // }, [] = 배열에 들어가는 값은 deps로 의존성 값을 넣을 수 있음, 넣은 값들은 바뀌거나 변경될때 마다 호출됨);
  return (
    <div>
      <b style = {{
        color: active ? 'green' : 'black',
        cursor: 'pointer'
      }}
      onClick = {()=> onToggle(id)}
      >
        {username}
      </b>

      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}


export default function UserList( { users, onRemove, onToggle } ) {
  // const users = [
  //   {
  //     id: 1,
  //     username: 'a',
  //     email: 'wnsqja1111@naver.com'
  //   },
  //   {
  //     id: 2,
  //     username: 'b',
  //     email: 'wnsqja2222@naver.com'
  //   },
  //   {
  //     id: 3,
  //     username: 'c',
  //     email: 'wnsqja3333@naver.com'
  //   }
  // ];

  return (
    <div>
     {/* <User user={users[0]}/>
     <User user={users[1]}/>
     <User user={users[2]}/> */}
     {
       users.map(
         user => (
         <User 
          key={user.id} 
          user={user} 
          onRemove={onRemove} 
          onToggle={onToggle}
          />)
        //  (user, index) => (<User key={index} user={user}/>)
       )

     }
    </div>
  )
}