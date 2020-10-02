
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 666 }) => {

    const [ counter, setCounter ] = useState( value ); //usestate devuelve un arreglo con dos valores

    const handleAdd = () => {
        setCounter( counter + 1 ); //ESTA ES UNA FORMA DE SUMAR 1
        //setCounter( (c) => c + 1 ); //ESTA ES OTRA FORMA DE SUMAR 1
    }

    //ESTAS DE ABAJO SON FUNCIONES DE FLECHA RESUMIDAS - SON IGUAL QUE LA QUE ESTÁ ARRIBA
    const handleSub = () => setCounter( counter - 1 );

    const handleReset = () => setCounter( value  );
    
    return (
        
        <>  
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSub }>-1</button>
        </>    
            
        );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


    