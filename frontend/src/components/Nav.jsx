import { Link } from 'react-router'

export default function Nav() {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    return (
        <div className='w-full bg-gray-100 sticky top-0 z-40 flex items-center justify-between p-5' >
            <div className='flex items-center space-x-1 sm:space-x3' >
                <Link className='px-1 py-3 text-sm font-medium text-gray-600' to="/">home</Link>
                <Link className='px-1 py-3 text-sm font-medium text-gray-600' to="/personajes">personajes</Link>
                <Link className='px-1 py-3 text-sm font-medium text-gray-600' to="/contact">contact</Link>
                {!usuario && <Link className='px-1 py-3 text-sm font-medium text-gray-600' to="/login">login</Link>}
                {usuario && <Link className='px-1 py-3 text-sm font-medium text-gray-600' to="/logout">Salir</Link>}
            </div>
        </div>
    )
}
