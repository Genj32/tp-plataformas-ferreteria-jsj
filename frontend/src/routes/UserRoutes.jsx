import { Suspense, lazy } from 'react'
import ProtectedRoute from '../components/ProtectedRoute.jsx'
import { roles } from '../utils/utils.jsx'

const Fetch = lazy(() => import('../pages/Fetch.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))
const Home = lazy(() => import('../pages/Home.jsx'))
const Login = lazy(() => import('../pages/Login.jsx'))
const Detalle = lazy(() => import('../pages/Detalle.jsx'))
const Logout = lazy(() => import('../pages/Logout.jsx'))
const NuevoPersonaje = lazy(() => import('../pages/NuevoPersonaje.jsx'))
const EditarPersonaje = lazy(() => import('../pages/EditarPersonaje.jsx'))
const EliminarPersonaje = lazy(() => import('../pages/EliminarPersonaje.jsx'))

const userRoutes = [
    {
        path: "/",
        element: <Suspense fallback={<div>Cargando...</div>} ><Home /></Suspense>,
    },
    {
        path: "/contact",
        element: <Suspense fallback={<div>Cargando...</div>} ><Contact /></Suspense>
    },
    {
        path: "/personajes",
        element: <Suspense fallback={<div>Cargando...</div>} >
            <ProtectedRoute element={<Fetch />} rol={roles.ADMIN} /></Suspense>
    },
    {
        path: "/personajes/:id",
        element: <Suspense fallback={<div>Cargando...</div>} >
            <ProtectedRoute element={<Detalle />} rol={roles.SUPERADMIN} /> </Suspense>
    },
    {
        path: "/nuevo-personaje",
        element: <Suspense fallback={<div>Cargando...</div>} >
            <ProtectedRoute element={<NuevoPersonaje />} rol={roles.SUPERADMIN} /> </Suspense>
    },
    {
        path: "/editar-personaje/:id",
        element: <Suspense fallback={<div>Cargando...</div>} >
            <ProtectedRoute element={<EditarPersonaje />} rol={roles.SUPERADMIN} /> </Suspense>
    },
    {
        path: "/eliminar-personaje/:id",
        element: <Suspense fallback={<div>Cargando...</div>} >
            <ProtectedRoute element={<EliminarPersonaje />} rol={roles.SUPERADMIN} /> </Suspense>
    },
    {
        path: "/login",
        element: <Suspense fallback={<div>Cargando...</div>} ><Login /></Suspense>
    },
    {
        path: "/logout",
        element: <Logout />
    }
]

export default userRoutes

