import {motion} from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="pt-24  flex items-start bg-gray-50 pt-20 "
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT SIDE */}
        <motion.div
        initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>

          <h1 className=" text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Nettoyage professionnel <br />
            pour votre maison
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Services de nettoyage fiables et modernes pour appartements,
            maisons et bureaux partout en France.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Demander un devis
            </a>

            <a
              href="#services"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Voir nos services
            </a>
          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}>

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
            alt="Cleaning service"
            className=" rounded-xl md:rounded-2xl  shadow-xl object-cover h-[500px] w-full"
          />

        </motion.div>

      </div>
    </section>
  )
}

export default Hero