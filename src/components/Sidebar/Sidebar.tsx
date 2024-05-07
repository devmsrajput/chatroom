import Image from 'next/image'
import React from 'react'
import avatar from "./../../../public/avatar.jpg"
import { Settings } from 'lucide-react'
import { BiHome } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { BsCollection } from 'react-icons/bs'
import { GrAchievement } from 'react-icons/gr'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <>
        <motion.div className="avatar flex justify-center mt-10 mr-20">
            <Image src={avatar} className="dimage w-[140px] h-[140px]" alt="avatar" />
        </motion.div>
        <motion.div className="username mt-1">
            <h1 className="text-center text-2xl font-semibold mr-20">Swagger</h1>
        </motion.div>
        <motion.div className="info mt-5 space-y-5">
            <div className="rooms ml-5">
                <button className="flex justify-start items-center text-xl font-semibold"><BiHome className="mr-3" /> <span>Rooms</span></button>
            </div>
            <div className="friends ml-5">
                <button className="flex justify-start items-center text-xl font-semibold"><FaUserFriends className="mr-3" /> <span>Friends</span></button>
            </div>
            <div className="settings ml-5">
                <button className="flex justify-start items-center text-xl font-semibold"><Settings className="mr-3" /> <span>Settings</span></button>
            </div>
            <div className="collection ml-5">
                <button className="flex justify-start items-center text-xl font-semibold"><BsCollection className="mr-3" /> <span>Collections</span></button>
            </div>
            <div className="achievements ml-5">
                <button className="flex justify-start items-center text-xl font-semibold"><GrAchievement className="mr-3" /> <span>Achievements</span></button>
            </div>
        </motion.div>
        <small className="mt-10">By: devmsrajput@gmail.com</small>
        </>
  )
}

export default Sidebar