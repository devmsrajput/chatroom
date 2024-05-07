import Image from 'next/image'
import React from 'react'
import avatar from "./../../../public/avatar.jpg"
import { Gift, MailWarning, MessageCirclePlus, MessageSquarePlus, Plus, User, User2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaUserFriends } from 'react-icons/fa'
import { BiMessageAdd } from 'react-icons/bi'
import { MdBugReport } from 'react-icons/md'
import { ImWarning } from 'react-icons/im'

const Dialog = ({showData}: any) => {
    return (
        showData ? 
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1,
        }}
        exit={{
            opacity: 0
        }}
        transition={{
            duration: 0.8,
            type: "just",
            delay: 0.5
        }}
        className="dialog border-4 border-gray-700 w-[290px] h-[200px] absolute bg-slate-900 top-[55%] left-[0] right-[0] m-auto z-40 flex p-2 rounded-md">
            <div className="avatar w-[180px] mr-1">
                <Image src={avatar} className="dimage w-[105px] h-[105px]" alt="avatar" />
            </div>
            <div className="info w-full text-xs pl-3">
                <div className="username text-center font-bold text-lg">Swagger</div>
                <div className="data mt-2 space-y-1">
                    <div className="profile"><User2 className="profile inline text-xs mr-1" /> View Profile</div>
                    <div className="add-friend"><FaUserFriends className="add-friend inline text-xl mr-2 ml-[0.8px]" /> Add Friend</div>
                    <div className="message"><MessageSquarePlus className="message inline text-xs mr-1" /> Message</div>
                    <div className="gift"><Gift className="gift inline text-xs mr-1" /> Gift</div>
                </div>
                <div className="report mt-4"><ImWarning className="report inline text-lg ml-1 mr-2" /> Report</div>
            </div>
        </motion.div> : null
    )
}

export default Dialog