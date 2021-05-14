
import React, { Component, useState } from "react";

/*class App extends Component {
  constructor(props) {
    super(props)*/

    const App=()=>{

    const arrList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'baramati', country: 'India' }
    ];
  
//console.log('dattaaa:',arrList);
 // let cnt=0;
/*
  const hello = (ele, i) => {
      if(ele.country==="India")
      {
        return <List name={ele.name} i={i} />;
      }
    };

*/

    return (
  
    <div id="main">
        {/* Do not remove the main div */}
        <ol>{
            arrList.map((obj,i)=>
            {
              if(obj.country==="India")
              {
              return(<li key={`"location${i}"`}>{obj.name}</li>)
              }  
          })
          }
        </ol>

      </div>

    );
}


export default App;
