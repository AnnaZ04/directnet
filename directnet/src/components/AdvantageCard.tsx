import {motion} from 'framer-motion'

type Props = {
    image: string
    title: string
    description: string
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

function AdvantageCard({ image, title, description}:Props) {
    return(
        <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="g-white bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm text-center transition"
        >
            <div className="flex justify-center items-center mb-4">
            <img src={image} className='w-14 h-14 sm:w-20 sm:h-20 object-contain' />
            </div>
            <h3 className='text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-3'>{title}</h3>
            <p className='text-sm sm:text-base text-gray-600 '>{description}</p>

        </motion.div>
    )
}

export default AdvantageCard