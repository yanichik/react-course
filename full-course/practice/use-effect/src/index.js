import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
//===================================
const myContainerStyle = {
  maxWidth:'360px',margin:'5px auto 0',
  padding:'5px 0 5px',backgroundColor:'#ddd',
  textAlign:'center',border:'1px solid #000',
  fontSize:'16px',fontFamily:'Helvetica'
};
const myButtonStyle = {
  margin:'0',padding:'4px 10px',
  backgroundColor:'#fff',border:'1px solid #000',
  borderRadius:'10px',font:'inherit',
  cursor:'pointer',outline:'none'
};
const mySpacerStyle = {margin:'5px 0'};
//===================================
const MyCleanUpMessageComponent = () => (
  <b>Cleanup completed</b>
);
//===================================
function MyUseEffectComponent() {
  useEffect(
    () => {
      console.log('useEffect');
      return () => {
        console.log('Cleanup function');
      };
    },
    []
  );
  //---------------------------------
  return (
    <div>
      <b>useEffect Component</b>
    </div>
  );
};
//===================================
function MyApp() {
  const [myBoolean, setMyBoolean] = useState(true);
  const myBooleanHandler = () => {
    setMyBoolean(myPrevBoolean => !myPrevBoolean);
  };
  //---------------------------------
  console.log('MyApp component');
  return (
    <div style={myContainerStyle}>
      See the console
      <br />
      Sparsely, click the button multiple times
      <hr style={mySpacerStyle} />
      <button
        type="button"
        onClick={myBooleanHandler}
        style={myButtonStyle}
      >
        {myBoolean
        ? 'Unmount component'
        : 'Mount component'}
      </button>
      <hr style={mySpacerStyle} />
      <div>
        {myBoolean
        ? <MyUseEffectComponent />
        : <MyCleanUpMessageComponent />}
      </div>
    </div>
  );
}
render(<MyApp />, document.getElementById('root'));