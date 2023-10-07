import React,{Component} from 'react';

class Objetivos extends Component{
  render() {
    return (
      <div className="objetivos">
        <h2> Nuestros objetivos</h2>
        <ol>
          <li>1. Queremos aprender a trabajar en equipo</li>
          <li>2. Queremos aprender el Frontend</li>
          <li>3. Divertirnos</li>
        </ol>
      </div>
    );
  }
}

export default Objetivos;