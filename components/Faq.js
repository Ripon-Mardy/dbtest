'use client'
import React, {useState} from 'react'
import FaqData from '@/FaqData/FaqData'
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    console.log(FaqData);
    const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(selected === index ? null : index);
  };
  return (
    <>
    <div className='w-2/4 mx-auto'>
      {FaqData.map((item, index) => (
        <div key={index} className="faq-item" onClick={() => handleClick(index)}>
          <motion.div
            initial={false}
            animate={{ backgroundColor: selected === index ? '#f0f0f0' : 'transparent' }}
            // whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className='py-2 bg-gray-400 text-white my-3 p-2 rounded-md'>{item.question}</h3>
          </motion.div>
          <AnimatePresence>
            {selected === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                // exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p>{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
    </>
  )
}

export default Faq
