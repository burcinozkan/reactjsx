import logo from './logo.svg';

import 'bulma/css/bulma.css'
import  {Course}  from './Course';
import Angular from './images/angular.jpg'
import bootstrap5 from './images/bootstrap5.png'
import ccsharp from './images/ccsharp.png'
import kompleweb from './images/kompleweb.jpg'


function App() {
  return(
    <div className='App'>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title" >Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className='section'>
        <div className="columns">
        <div className="column">
        <Course 
        image={Angular}
        title="Angular" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quam lacus, maximus lacinia sem 
        interdum in. Nullam scelerisque, felis nec interdum laoreet, dolor metus tincidunt lectus, nec tincidunt mauris orci nec 
        lorem. Duis at felis ipsum."
        />
        </div>
        <div className="column">
        <Course
        image={bootstrap5}
        title="Bootstrap" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quam lacus, maximus lacinia sem 
        interdum in. Nullam scelerisque, felis nec interdum laoreet, dolor metus tincidunt lectus, nec tincidunt mauris orci nec 
        lorem. Duis at felis ipsum."/>
        </div>

        <div className="column">
        <Course 
        image={ccsharp}
        title="CCSharp" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quam lacus, maximus lacinia sem 
        interdum in. Nullam scelerisque, felis nec interdum laoreet, dolor metus tincidunt lectus, nec tincidunt mauris orci nec 
        lorem. Duis at felis ipsum."/>
        </div>

        <div className="column">
               
        <Course 
        image={kompleweb}
        title="Web" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quam lacus, maximus lacinia sem 
        interdum in. Nullam scelerisque, felis nec interdum laoreet, dolor metus tincidunt lectus, nec tincidunt mauris orci nec 
        lorem. Duis at felis ipsum."/>
        </div>
      </div>
        </section>
      </div>
      
       
 

    </div>
  );
}

export default App;
