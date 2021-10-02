import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Education from './components/education'
import Skills from './components/skills'
import Footer from './components/footer'
import Contact from './components/contact'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
);

ReactDOM.render(
  <React.StrictMode>
    <Education />
  </React.StrictMode>,
  document.getElementById('education')
);

ReactDOM.render(
  <React.StrictMode>
    <Skills />
  </React.StrictMode>,
  document.getElementById('skills')
);



ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);