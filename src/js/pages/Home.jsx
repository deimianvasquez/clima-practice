import React, { useEffect, useState } from 'react'
import Header from '../component/Header.jsx';
import Formulario from '../component/Formulario.jsx';

const URL_BASE = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = ""


const Home = () => {
    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [error, setError] = useState(false)

    const [resultado, setResultado] = useState({})

    const datosConsultar = ({ ciudad, pais }) => {
        //validarlos
        if (ciudad.trim() === "" || pais.trim() === "") {
            //ejecutamos un error
            console.log("error vacio")
            setError(true)
            return;
        }

        //si existe la guardamos en los estados
        setCiudad(ciudad)
        setPais(pais)
        setError(false)
    }




    const consultarClima = async () => {
        try {
            let response = await fetch(`${URL_BASE}q=${ciudad},${pais}&appid=${API_KEY}`)
            const data = await response.json();
            setResultado(data)

        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        if (ciudad === "") return
        console.log("entre aquí")
        consultarClima()

    }, [ciudad, pais])

    return (
        <>
            <div className='container '>
                <div className="row mb-5 mt-2">
                    <div className="col-12">
                        <Header title={"Weather today | medio dudoso"} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <Formulario datosConsultar={datosConsultar} consultarClima={consultarClima} />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>
                            El clima de {resultado.name} es: {Number(resultado.main?.temp - 273.15).toFixed(0)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
