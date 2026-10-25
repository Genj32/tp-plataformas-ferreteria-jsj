import { Outlet } from 'react-router'
import Nav from './Nav'
import { ToastContainer, Bounce } from 'react-toastify'

export default function Layout() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-800'>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Nav />
      <main className='mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8'>
        <Outlet />
      </main>
      <footer className='border-t border-slate-200 px-4 py-4 text-center text-sm text-slate-500'>
        React Plataformas
      </footer>
    </div>
  )
}
