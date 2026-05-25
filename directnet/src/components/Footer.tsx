function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start text-center md:text-left">

          {/* LEFT */}
          <div >
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              DirectNet
            </h2>
            <p className="text-gray-400">
              Entreprise de nettoyage professionnelle pour immeubles et entreprises.
            </p>
          </div>

          {/* CENTER */}
          <div >
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <p className="text-gray-400">+33 6 12 34 56 78</p>
            <p className="text-gray-400">contact@directnet.fr</p>
            <p className="text-gray-400">Grenoble, France</p>
          </div>

          

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DirectNet. Tous droits réservés.
        </div>

      </div>
    </footer>
  )
}

export default Footer