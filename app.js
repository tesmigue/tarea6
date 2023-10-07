import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './tarea2.css';
import NavBar from './Components/navbar.js';
import ContactoForm from './Components/contactoform.js';
import Integrantes from './Components/integrantes.js';
import Objetivos from './Components/objetivos.js';

class App extends Component{
    constructor(props){
    super(props);
    this.state={
        integrantes: [
            {
                nombre: "Miguel Testor",
                foto:"yo.jpg",
                link:"indexpimigue.html"
            },
            {
                nombre:"Satoru Kodama",
                foto:"satoru.jpg",
                link:"indexpisatoru.html"
            },
            {
                nombre:"Gregorio Azocar",
                foto:"grego.jpg",
                link:"indexpigrego.html"
            }
        ]
    };
}   

//render al html
render() {
    return (
      <div className="App">
        <NavBar />
        <header>
          <h1>Grupo 3: VCT</h1>
          <nav>
            <a href="#">Nuestro equipo</a>
            <a href={this.state.integrantes[0].link}>Miguel</a>
            <a href={this.state.integrantes[1].link}>Gregorio</a>
            <a href={this.state.integrantes[2].link}>Satoru</a>
          </nav>
        </header>
        <section>
          <div className="grupo-content">
            <h1>VCT</h1>
            <h3>Vamos con todo!</h3>
            <p>
              Somos "Vamos Con Todo", un grupo de ingenieros informáticos con una gran pasión por el aprendizaje y desarrollo de diseño de software y fullstack. Nuestro grupo está compuesto por {this.state.integrantes.map((integrante) => integrante.nombre)}. Buscamos tener un exitoso semestre y disfrutar de este entretenido ramo.
            </p>
            <a href="indexdescripcion.html">Contacto</a>
          </div>
          <h2 style="position:absolute; text-align:center;color: white;bottom: 50px; margin-left: 580px;"><strong>Integrantes: </strong></h2>
        </section>
        <section>
          <div className="row">
            <Integrantes integrantes={this.state.integrantes} />
            <ContactoForm />
            <Objetivos />
          </div>
        </section>
        <footer>
          <section>
            <div className="objetivos">
              <h2> Nuestros objetivos</h2>
              <ol>
                <li>1. Queremos aprender a trabajar en equipo</li>
                <li>2. Queremos aprender el Frontend</li>
                <li>3. Divertirnos</li>
              </ol>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

// Renderizamos el componente en el DOM
ReactDOM.render(<App />, document.getElementById('root'));