import React from 'react';
import './App.css';
import CardDesafio from './components/CardDesafio';
import Header from './components/Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  /* carousel _________________________ */
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-container">
        <button className="carousel-button" onClick={() => goToSlide(currentSlide - 1)}> ← </button>
        <button className="carousel-button" onClick={() => goToSlide(currentSlide + 1)}> → </button>
      </div>
    );
  };

  /* filtro ___________________ */
  
  const [desafios, cambiarDesafios] = React.useState([]);

  React.useEffect(function () {
    fetch('http://localhost:4000/desafios')
      .then(function (respuesta) {
        return respuesta.json();
    })
      .then(function (respuestaJSON) {
        cambiarDesafios(respuestaJSON);
      })
  }, []);

  const [tipoActual, cambiarTipo] = React.useState();

  const filtroDesafios = desafios.filter(function (desafio) {
    if (!tipoActual) {
      return true;
    }
    return desafio.tipo === tipoActual;
  });

  const seleccionarUndia = function() {
    cambiarTipo('UN DÍA')
  }

  const seleccionarUnasemana = function() {
    cambiarTipo('UNA SEMANA')
  }

  const seleccionarDossemanas = function() {
    cambiarTipo('DOS SEMANAS')
  }

  const seleccionarUnmes = function() {
    cambiarTipo('UN MÉS')
  }

  const listaDesafios = filtroDesafios.map(function (desafios) {
    return <CardDesafio
            img={desafios.img}
            tipo={desafios.tipo}
            titulo={desafios.titulo}
            descripcion={desafios.descripcion}
            boton={desafios.boton}
            key={desafios.id}/>;
            
    });
  /* pagina principal ___________________ */  
  return (
    <div>
      <Header />
      <div id="contenedor-todosdesafios">
        <div className="intro">
          <h1>¿Estás al pedo?</h1>
          <h3>Encontrá los desafíos más interesantes para hacer en esta cuarentena.</h3>
        </div>

        <div className="filtros" id="gridfiltros">
          <button onClick={seleccionarUndia} className="boton1 filtro"> 1 DÍA</button>
          <button onClick={seleccionarUnasemana}  className="boton2 filtro"> 1 SEMANA</button>
          <button onClick={seleccionarDossemanas}  className="boton3 filtro"> 2 SEMANAS</button>
          <button onClick={seleccionarUnmes}  className="boton4 filtro"> 1 MÉS</button>
        </div>
      </div>
      
      <Carousel responsive={responsive} arrows={false} customButtonGroup={<ButtonGroup />}>
        <div className="lista-desafios">
          {listaDesafios}
        </div>
      </Carousel>

    </div>
  );
}

export default App;