import { useState, useEffect } from 'react'
import { Link } from "react-router"
export default function Fetch() {

    const [personajes, setPersonajes] = useState([])
    const [info, setInfo] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    const fetchApi = (uri = `https://api.disneyapi.dev/character?page=${currentPage}&pageSize=50`) => {
        fetch(uri)
            .then((res) => res.json())
            .then(data => {
                setPersonajes(data.data)
                setInfo(data.info)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        // componentDidMount() se invoca inmediatamente después de que un componente se monte (se inserte en el árbol).
        fetchApi()
        // componentDidUpdate() se invoca inmediatamente después de que la actualización ocurra en currentPage.
        return () => {
            console.log("Unmounted")
        }
    }, [currentPage])

    return (
        <section className='space-y-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-slate-800' >Personajes</h1>
                <Link
                    className='rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700'
                    to="/nuevo-personaje"
                >
                    Nuevo personaje
                </Link>
            </div>

            <div className='overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm'>
                <table className='w-full min-w-180'>
                    <thead className='bg-slate-100 text-sm text-slate-700'>
                        <tr>
                            <th className='p-3 text-left font-semibold' >#</th>
                            <th className='p-3 text-left font-semibold' >Nombre</th>
                            <th className='p-3 text-left font-semibold' >Películas</th>
                            <th className='p-3 text-left font-semibold' >Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            personajes.map(personaje => (
                                <tr key={personaje._id} className='border-t border-slate-100 align-top' >
                                    <td className='p-3' >
                                        <img className='h-16 w-16 rounded-md object-cover' src={personaje.imageUrl} alt={personaje.name} />
                                    </td>
                                    <td className='p-3 text-slate-800' >{personaje.name}</td>
                                    <td className='p-3 text-slate-600' >{personaje.films.join(", ")}</td>
                                    <td className='p-3' >
                                        <Link className='font-medium text-indigo-700 hover:text-indigo-900 m-1' to={`/personajes/${personaje._id}`} >
                                            Ver
                                        </Link>
                                        <Link className='font-medium text-amber-700 hover:text-amber-900 m-1' to={`/editar-personaje/${personaje._id}`} >
                                            Editar
                                        </Link>
                                        <Link className='font-medium text-red-700 hover:text-red-900 m-1' to={`/eliminar-personaje/${personaje._id}`} >
                                            Borrar
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
                {currentPage > 1 && (
                    <button className='rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100' onClick={() => setCurrentPage(currentPage - 1)}>
                        Anterior
                    </button>
                )}
                <button className='rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100' onClick={() => setCurrentPage(currentPage + 1)} >{currentPage + 1}</button>
                <button className='rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100' onClick={() => setCurrentPage(currentPage + 2)} >{currentPage + 2}</button>
                <button className='rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100' onClick={() => setCurrentPage(currentPage + 3)} >{currentPage + 3}</button>
                {currentPage < info.totalPages && (
                    <button className='rounded-md bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-900' onClick={() => setCurrentPage(currentPage + 1)}>
                        Siguiente
                    </button>
                )}
            </div>
        </section>
    )
}
