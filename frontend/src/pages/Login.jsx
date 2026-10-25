import { useNavigate } from "react-router"
import { roles } from "../utils/utils"
import { toast } from "react-toastify"
import { Bounce } from "react-toastify"

export default function Login() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value

        if (email == "admin@admin.com" && pass == "123456") {
            localStorage.setItem("usuario", JSON.stringify(
                {
                    email: email,
                    rol: roles.ADMIN

                }
            ))
            navigate("/personajes")
        } else {
            toast.error('Usuario/Contraseña incorrectos', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (
        <section className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h1 className="mb-6 text-2xl font-semibold text-slate-800">Iniciar sesión</h1>
            <form onSubmit={handleSubmit} className="space-y-4" >
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="admin@admin.com"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="pass">Contraseña</label>
                    <input
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                        type="password"
                        name="pass"
                        id="pass"
                        placeholder="******"
                    />
                </div>
                <button
                    className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
                    type="submit"
                >
                    Ingresar
                </button>
            </form>
        </section>
    )
}