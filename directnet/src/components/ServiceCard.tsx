type Props = {
    icon: string
    title: string
    description: string
}

function ServiceCard({icon, title, description}:Props) {
    return(
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition hover:-translate-y-2 flex flex-col items-center text-center ">
            <img src={icon}  
                  className="w-20 h-20 mx-auto mb-4 object-contain transition duration-300 hover:scale-110" 
            />
            <h3 className="text-2xl font-semibold text-blue-600 text-center ">
                {title}
            </h3>
            <p className="text-gray-600">
            {description}
            </p>
        </div>
    )
}

export default ServiceCard