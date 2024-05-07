import Image from 'next/image'
import React from 'react'
import avatar from "../../../public/avatar.jpg"
import { motion } from 'framer-motion'

const Messages = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}} className="p-1 flex justify-between font-semibold font-sans text-xs border m-1">
        <div className="avatar ml-1 w-[130px] flex border-r">
            <Image src={avatar} alt="avatar" className="w-[40px] h-[40px] mr-1" />
            <p className="flex flex-wrap w-[80px] h-auto overflow-hidden break-words">Swagger</p>
        </div>
        <div className="message w-[300px] px-1 tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, aperiam, deleniti qui ut et odio voluptatibus dolore in amet cumque minus? Accusamus tempora nisi exercitationem quia dolores amet alias ex.
        </div>
    </motion.div>
  )
}

export default Messages