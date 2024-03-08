import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion"

const Card = ({obj,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.05}} className='relative flex-shrink-0 w-44 h-60 rounded-[30px] bg-zinc-900/90 text-zinc-400 overflow-hidden p-6'>
        <FaRegFileAlt />
        <p className='mt-5 text-sm'>Sentiment : Positive</p>
        <div className='footer absolute bottom-0 w-full h-12 left-0 py-3 px-8 bg-violet-600 hover:bg-blue-600'>
            <div className='flex justify-between items-center'>
                <h5 className=''>Summary</h5>
                <GiClick />
            </div>
        </div>
    </motion.div>
  )
}

export default Card