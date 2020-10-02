import React from 'react';
//import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) => {

    //const saludo = 'Hola Mundo';
    return (
        //<Fragment> forma larga en la que hay que importar como muestra la 2da linea
        //la forma corta de fragment es poniendo los signos solos
        <>

            <h1>{ saludo }</h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 )} </pre> */}
            <p>Mi primera aplicacion</p>
        </>

        //</Fragment> 
        );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;