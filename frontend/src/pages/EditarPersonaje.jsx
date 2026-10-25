import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function EditarPersonaje() {

    const { id } = useParams()
    const [personaje, setPersonaje] = useState(null)

    useEffect(() => {
        fetch("https://api.disneyapi.dev/characters/" + id)
            .then(res => res.json())
            .then(data => setPersonaje(data.data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const films = e.target.films.value
        const imageUrl = e.target.imageUrl.value

        console.log({
            name,
            films,
            imageUrl
        })
    }

    return (
        <section className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h1 className="mb-6 text-2xl font-semibold text-slate-800">Editar personaje</h1>
            <form onSubmit={handleSubmit} className="space-y-4" >
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="name">Nombre</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={personaje?.name}
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="films">Películas</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                        type="text"
                        name="films"
                        id="films"
                        placeholder="Separa las películas con ;"
                        defaultValue={personaje?.films}
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="imageUrl">Imagen</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        defaultValue={personaje?.imageUrl}
                    />
                </div>
                <button
                    className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
                    type="submit"
                >
                    Guardar
                </button>
            </form>
        </section>
    )
}