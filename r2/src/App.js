import logo from './logo.svg';
import './App.css';
import Userdata from './Components/Userdata.jsx'
import  Component from './Components/Component.jsx';
import Render from './Components/Render.jsx'
import Card from './Components/Card.jsx'
function App() {
  return (
    <div className="App">
     <Card>
        <h2>News</h2>
      </Card>
      <Card>
        <p>Today’s weather is sunny.</p>
      </Card>

      
    </div>
  );
}

export default App;
