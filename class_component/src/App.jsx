import React from 'react';
import ReactDOM from 'react-dom/client';

// class App extends React.Component{
//   render(){
//     return(
//       <h1>hello world</h1>
//     )
//   }
// }
// export default App



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       color:'red',
//       size:'400px'
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>hello world</h1>
//         <p>{this.state.color}</p>
//         <p>{this.state.size}</p>

//       </div>
//     )
//   }
// }
// export default App




// ----------------------------------------------------

class App extends React.Component{
  constructor(props){
    super()
    this.state={
      color:'red',
      size:'400px',
      name:props.name,
    }
  }
  render(){
    return(
      <div>
        <h1>Welcome to class component</h1>
        <p>{this.state.color}</p>
        <p>{this.state.size}</p>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
export default App



// -----------------------------------


// function Car (props) {
//   return <h2>i am a { props.brand } </h2>;
// }

// const myElement = <Car brand="Ford" />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// export default App


// function Car (props){
//   return <h2>i am a { props.brand }</h2>
// }

// function Garage(){
//   return(
//     <>
//     <h1>who lives in my garage?</h1>
//     <Car brand="Ford"/>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);
// export default App