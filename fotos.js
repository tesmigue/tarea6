import React,{Component} from 'react';

class Integrantes extends Component{
  render() {
    return (
      <div className="row">
        {this.props.integrantes.map((integrante) => (
          <div className="column">
            <p style="color: white; margin-left: 50px;"><strong>{integrante.nombre}</strong></p>
            <div className="mi-foto">
              <a href={integrante.link}>
                <img src={integrante.foto} />
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Integrantes;