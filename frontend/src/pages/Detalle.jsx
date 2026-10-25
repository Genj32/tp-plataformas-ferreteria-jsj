import { useState, useEffect } from "react"
import { Link, useParams } from "react-router"

export default function Detalle() {

    const [personaje, setPersonaje] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch("https://api.disneyapi.dev/characters/" + id)
            .then(res => res.json())
            .then(data => setPersonaje(data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" >
            <div className="flex w-full justify-center" >
                <img className="max-h-96 rounded-lg object-cover" src={personaje?.imageUrl} alt={personaje?.name} />
            </div>
            <div className="flex w-full justify-center" >
                <p className="text-2xl font-semibold text-slate-800">{personaje?.name}</p>
            </div>
            <Link className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900" to="/personajes" >
                Volver
            </Link>
        </section>
    )
}
