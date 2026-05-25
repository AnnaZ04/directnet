

function Method() {
  return (
    <section id="method" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold  mb-4 text-center">
          Notre méthode
        </h2>
        <p className="font-semibold text-2xl mb-10 text-center text-blue-600">
        Simple & efficace
        </p>

        {/* LINE + STEPS */}
        <div className="relative">

          {/* линия */}
          <div className="absolute top-6 left-[12%] right-[12%] h-0.5 bg-gray-300 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">

            {/* STEP 1 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition duration-300 hover:scale-120 hover:bg-blue-700">
                1
              </div>
              <h3 className="mt-4 font-semibold">Prise de contact</h3>
              <p className="text-gray-600 text-sm mt-2">
                Formulaire ou appel. Réponse sous 24h.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition duration-300 hover:scale-120 hover:bg-blue-700">
                2
              </div>
              <h3 className="mt-4 font-semibold">Devis gratuit</h3>
              <p className="text-gray-600 text-sm mt-2">
                Tarif fixe, transparent, sans surprise.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition duration-300 hover:scale-120 hover:bg-blue-700">
                3
              </div>
              <h3 className="mt-4 font-semibold">Intervention</h3>
              <p className="text-gray-600 text-sm mt-2">
                Notre équipe arrive à l'heure, équipée.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition duration-300 hover:scale-120 hover:bg-blue-700">
                4
              </div>
              <h3 className="mt-4 font-semibold">Résultat garanti</h3>
              <p className="text-gray-600 text-sm mt-2">
                Satisfaction totale ou on revient.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Method