import {useState} from 'react'
function Navbar(){

  const[open, setOpen] = useState(false)
    return (
    <header className="fixed top-0 left-0 w-full  bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* ЛОГО (слева) */}
        <h1 className="text-2xl md:text-4xl font-bold text-red-700 tracking-wide">
          DirectNet
        </h1>

        {/* МЕНЮ (справа) */}
        <nav className="hidden md:flex gap-10 font-normal text-gray-600">
          <a href="#home" className="hover:text-blue-600 transition-colors duration-200">
            Accueil
          </a>

          <a href="#services" className="hover:text-blue-500">
            Services
          </a>

          <a href="#about" className="hover:text-blue-500">
            À propos
          </a>

          <a href="#method" className="hover:text-blue-500">
            Notre méthode
          </a>

          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>

        <button
          onClick ={() => setOpen(!open)} 
          className="md:hidden text-4xl text-gray-700">
            ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 text-gray-700 flex flex-col items-center text-center ">
          <a onClick={() => setOpen(false)} href="#home" className="block hover:text-blue-500">
            Accueil
          </a>

          <a onClick={() => setOpen(false)} href="#services" className="block hover:text-blue-500">
            Services
          </a>

          <a onClick={() => setOpen(false)} href="#about" className="block hover:text-blue-500">
            À propos
          </a>

          <a onClick={() => setOpen(false)} href="#method" className="block hover:text-blue-500">
            Méthode
          </a>

          <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar