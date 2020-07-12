import React from 'react';
import logo from './logo.png';
import './Header.css';
import search from './search.svg';
import user from './user.png';
import help from './help.png';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



function Header () {

    /* modal _______________ */
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div id="gridheader">
            <div className="search-container buscador">
                <div className="search-input">
                    <input type="search" className="search-bar" placeholder="search"/>
                </div>
            </div>

            <div className="logo">
                    <img src={logo} alt="website logo"/>
            </div>

            <div className="help" id="gridhelp">
                <a className="icono"><img onClick={handleOpen} src={help} alt="helpicon"/></a>
            </div>

            <Modal
            open={open}
            onClose={handleClose}>
                <div className="modal">
                    <h1>¿Precisás ayuda?</h1>
                    <p>Si te sentís muy mal en esta cuarentena, dale click para encontrar la ayuda que precisás en este momento. O llamá al 0800 1920.</p>
                    <button className="boton-modal"><a href="https://salud.ladiaria.com.uy/articulo/2020/4/0800-1920-el-telefono-para-recibir-apoyo-emocional-durante-la-pandemia/" target="_blank" rel="noopener noreferrer">preciso ayuda</a></button>
                </div>
            </Modal>
 
        </div>

    );
}

export default Header;