import React from 'react';
import './CardDesafio.css';
import likegray from './likegray.png';
import likered from './likered.png';
import checkgray from './checkgray.png';
import checkgreen from './checkgreen.png';
import add from './add.png';


function CardDesafio(props) {
    
    /* like event  ___________________ */
    const [meGusta, cambiarMeGusta] = React.useState(false);

   const MeGusta = () => {
    if (!meGusta) {
        return true;
      }
      return <img onClick={() => cambiarMeGusta(!meGusta)} src={meGusta ? likered : likegray} alt="Me Gusta"/>
    };

    
    /* done event  ___________________ */
    const [checkGray, cambiarCheck] = React.useState(true);

   const CheckGray = () => {
    if (!checkGray) {
        return true;
      }
      return <img onClick={() => cambiarCheck(!checkGray)} src={checkGray ? checkgray : checkgreen} alt="Desafío realizado"/>
    };
  
    /* wishlist event ________________ */

    return (
        
        <div className="card" id="gridcard">
            <div className="header img">
                <img src={props.img}/>
            </div>
            <h4 className="tipo">DESAFÍO DE {props.tipo}</h4>
            <h2 className="titulo">{props.titulo}</h2>
            <p className="descripcion">{props.descripcion}</p>
            <button className="boton"><a href={props.link} target="_blank">{props.boton}</a></button>
            <div className="interaccion">
                <img className="cursor" onClick={() => cambiarMeGusta(!meGusta)} src={meGusta ? likered : likegray} alt="Me Gusta"/>
                <img className="cursor" onClick={() => cambiarCheck(!checkGray)} src={checkGray ? checkgray : checkgreen} alt="Desafío realizado"/>
            </div>
        </div>     
    );
}
  
  
  export default CardDesafio;
