import C1 from './Components/Component1/Component1'
import Component2 from './Components/Component2/Component2'

function App() {
  return (
    <div className="App">
      <C1 />
      <Component2 />
      <Component2 heading='2' />
      <Component2 heading='3' />
    </div>
  );
}

export default App;



/*
REACT.JS

Declaration library
-just tell what to do
-Not how to do it

Components
-Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. 

*/