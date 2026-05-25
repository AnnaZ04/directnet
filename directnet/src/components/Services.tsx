import ServiceCard from "./ServiceCard"

function Services (){
    return(
        <section id="services" className="py-10 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Nos services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

      <ServiceCard
        icon ="icons/cleaning2.png" 
        title ='Immeubles & copropriétés'
        description="Nettoyage complet des parties communes, halls, escaliers et ascenseurs."
        
       />

      <ServiceCard
        icon="icons/cabinet.png"
        title="Bureaux professionnels"
        description="Des espaces propres pour améliorer l’image de votre entreprise."
       />

      <ServiceCard
        icon ="icons/cleaning3.png"
        title="Nettoyage ponctuel"
        description="Interventions rapides après travaux ou événements."
       />

    </div>

  </div>
</section>
    )
}
export default Services