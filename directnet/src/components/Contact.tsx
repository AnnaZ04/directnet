import { set, useForm } from 'react-hook-form'
import { motion } from "framer-motion"
import { useState } from 'react'

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()

const [sent, setSent] = useState(false)
const [error, setError] = useState (false)

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)

      setSent(true)
      setError (false)

    } catch (error) {
      console.error(error)
      
      setError(true)
      setSent(false)
    }
  }

  return (
    <section id='contact' className='py-20 bg-gray-50'>

      <div className='max-w-6xl mx-auto px-6'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

          {/* LEFT */}
          <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
  >

            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              Demandez votre devis gratuit
            </h2>

            <p className="text-gray-600 mb-8">
              Nous vous répondons sous 24h.
              Devis personnalisé, sans engagement.
            </p>

       
            <div className='space-y-6 pl-6 border-l border-gray-200 '>

              <div>
                <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                  Téléphone
                </h3>
                <p className="text-gray-600">
                  +33 6 12 34 56 78
                </p>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                  Email
                </h3>
                <p className="text-gray-600">
                  contact@directnet.fr
                </p>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                  Localisation
                </h3>
                <p className="text-gray-600">
                  Grenoble, France
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div className='bg-white p-8 rounded-2xl shadow-sm'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          >

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-4'
            >

              <input
                type="text"
                placeholder="Prénom"
                className='w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-600'
                {...register('firstName', {
                  required: "Le prénom est obligatoire"
                })}
              />

              <input
                type="text"
                placeholder="Nom"
                className='w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-600'
                {...register("lastName", {
                  required: "Le nom est obligatoire"
                })}
              />

              <input
                type="tel"
                placeholder="Téléphone"
                className='w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-600'
                {...register("phone", {
                  required: "Le téléphone est obligatoire"
                })}
              />

              <textarea
                placeholder="Message"
                className='w-full border border-gray-300 p-4 rounded-xl h-32 outline-none focus:border-blue-600'
                {...register("message")}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition'
              >
                {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
              </motion.button>

                {sent && (
                <p className="text-green-600 mt-4">
                   Votre demande a été envoyée !
                </p>
                )} 

                {error && (
                  <p className='text-red-600 mt-4'>
                    Une erreur est survenue.
                  </p>
                )}

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact