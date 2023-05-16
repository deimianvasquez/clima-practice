import React, { useState } from 'react'
import PropTypes from 'prop-types';


const Formulario = ({ datosConsultar, consultarClima }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    })

    const handleChange = (event) => {
        setBusqueda({
            ...busqueda,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        datosConsultar(busqueda)
    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label>Ciudad</label>
                <input
                    type='text'
                    className='form-control'
                    name="ciudad"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>País</label>
                <select
                    className='form-control'
                    name="pais"
                    onChange={handleChange}
                >
                    <option>Seleccione un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="CO">Colombia</option>
                    <option value="VE">Venezuela</option>
                </select>
            </div>

            <button type='submit' className='btn btn-primary w-100 mt-3'>Consultar</button>
        </form>
    )
}

export default Formulario;

Formulario.propTypes = {
    datosConsultar: PropTypes.func
}