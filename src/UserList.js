import React from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
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