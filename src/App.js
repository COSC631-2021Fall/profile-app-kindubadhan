import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home'
import Education from './components/education'
import Skills from './components/skills'
import Footer from './components/footer'
import Contact from './components/contact'
import Navbar from './components/navbar';
import { Address } from './components/contact';
import {useState, useEffect} from 'react';


function App() {

  const themes = ['powderblue', 'white', 'orange'];
  const [themeId, setThemeId] = useState(0);

  const switchTheme = () => {
    setThemeId((id) => (id+1)%3)
  }

  const handleKeydown = (Event) => {
    switch (Event.key) {
      case "0":
      case "1":
      case "2":
        setThemeId(parseInt(Event.key, 10));
        break;
      default:
        break;
    }
  }

  useEffect(
    () => {
      window.addEventListener("keydown", handleKeydown);
    }
  );

  return (
    <div>
      <header>
        <Navbar />
        <div><button onClick = {switchTheme}>Switch Theme</button></div>
      </header>
      <main>
        <h1>Kulwinder Kaur</h1>

    <Router> 
            <Route path={["/contact", "/contact/:id", "/"]}>
              <Contact />
            </Route>
            
        </Router>
        <Router>
            <Route path="/footer" component={Footer} />
        </Router>
        <Router>
      <>
      <Route exact path="/" component={Home} />
        <Switch>
        <Route path="/navbar" component={Navbar} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
         
        </Switch>
      </>
    </Router>
    </main></div>
   
  );
}

export default App;


