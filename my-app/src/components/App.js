import React from 'react';
import '../App.css';
import Button from './Button';
//import HelloWolrd from './HelloWolrd';
import RenderPropComponent from '../patterns/render-prop/simple';
import SimpleHoc from '../patterns/hoc/simple-hoc';

// function App() {
//   return (
//     <>
//     <div>App</div>
//     <Button />
//     <HelloWolrd />
//     </>
//   )
// }

const App = () => <>
  <div>App</div>
  <Button />
  <RenderPropComponent/>
  <SimpleHoc />
</>

export default App;
