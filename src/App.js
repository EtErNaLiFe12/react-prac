import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css'
import Counter from './Counter';


function App() {
  const message = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '24',
    padding: '1rem'
  };

  return (
    <>
     <Wrapper>
       <Hello color="#fb5849" msg="hello react" isSpecial />
       <Hello color="pink"/>
     </Wrapper>
     <Counter/>
     {/* <button style={{width:50, height:20}}>click</button> */}
     <div style={style}>{message}</div>
     <div className="gray-box">{message}</div>
    </>
  );
}

export default App;
