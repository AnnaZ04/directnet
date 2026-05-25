type Props = {
    value: string 
    label : string
}

function AboutCard ({value, label}:Props) {
 return (
    <div className="g-white bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm text-center transition">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">
            {value}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 ">
            {label}
        </p>
    </div>
 )
}

export default AboutCard