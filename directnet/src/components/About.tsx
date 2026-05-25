import {motion} from 'framer-motion'
import AdvantageCard from './AdvantageCard'
import AboutCard from './AboutCard'

function About(){
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

   
    return(
        <section id="about" className="bg-white dark:bg-gray-800
text-gray-800 dark:text-white ">
          <div className="max-w-6xl mx-auto px-6">

            

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center"
              initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
            >
                <AboutCard
                    value='500+' 
                    label='Clients satisfaits'
                />

                <AboutCard
                    value='8 ans'
                    label="D'expérience"
                />

                <AboutCard
                    value='100%'
                    label='Éco-responsable'
                />

                <AboutCard
                    value='4.9'
                    label='Note moyenne'
                />

            </motion.div >

            <motion.div className="text-center mb-16"
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    Pourquoi choisir DirectNet ?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto sm:text-3xl lg:text-4xl">
                    Une entreprise de nettoyage professionnelle
                    au service des copropriétés et des entreprises.
                </p>

            </motion.div>

            <div className="text-center mb-10">
               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Nos avantages
               </h2>
               
               <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}>

                   <AdvantageCard
                    image = "icons/building.png" 
                    title = 'Entretien des immeubles'
                    description = 'Nettoyage régulier des parties communes, halls, escaliers et espaces collectifs'
                   />

                   <AdvantageCard
                     image ="icons/cleaning.png"
                     title = 'Locaux professionnels'
                     description='Des espaces propres et entretenus
                        pour garantir une image professionnelle.'
                   />

                   <AdvantageCard
                     image = "icons/shield.png" 
                     title='Réactivité'
                     description='Interventions rapides et solutions adaptées
                        à chaque besoin'
                    />
              
                   <AdvantageCard
                    image = "icons/fast.png" 
                     title = 'Fiabilité'
                     description='Une équipe sérieuse et organisée
                        pour un service constant et de qualité'
                    />
                   
               </motion.div>

            </div>
          </div>
        </section>
    )
}

export default About