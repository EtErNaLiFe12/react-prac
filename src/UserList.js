import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}


export default function UserList( { users } ) {
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
         user => (<User key={user.id} user={user}/>)
        //  (user, index) => (<User key={index} user={user}/>)
       )

     }
    </div>
  )
}