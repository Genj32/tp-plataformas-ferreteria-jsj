import { useState, useEffect } from 'react'

export default function FetchRealTime() {
    const [dolares, setDolares] = useState([])
    const [estado, setEstado] = useState("LOADING")
    useEffect(() => {
        const fetchApi = () => {
            fetch("https://dolarapi.com/v1/dolares")
                .then(res => res.json())
                .then(data => {
                    setDolares(data)
                    setEstado("READY")
                })
                .catch(err => {
                    setEstado("ERROR")
                    clearInterval(intervalo)
                })
        }
        const intervalo = setInterval(fetchApi, 1000)
        return () => clearInterval(intervalo)
    }, [])

    if (estado == "LOADING") return <div>Cargando...</div>

    if (estado == "READY") return (
        <div>
            <h1 className='text-4xl my-3' >Dolares</h1>
            <table className='w-full' >
                <thead>
                    <tr>
                        <th>Dolar</th>
                        <th>Compra</th>
                        <th>Venta</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dolares.map(dolar => (
                            <tr key={dolar.nombre} >
                                <td>{dolar.nombre}</td>
                                <td>{dolar.compra}</td>
                                <td>{dolar.venta}</td>
                                <td>{dolar.fechaActualizacion}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

    return <div>Error</div>
}
