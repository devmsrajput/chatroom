"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import roomBg from "./../../public/room-bg.jpg";
import Messages from "@/components/Messages/Messages";
import Dialog from "@/components/Dialog/Dialog";
import { MenuIcon } from "lucide-react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { RiVipCrown2Line } from "react-icons/ri";
// import { Gift, MailWarning, MessageCirclePlus, Plus, User } from "lucide-react";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [show, setShow] = useState(false);

  const refOne: React.RefObject<HTMLElement> = useRef(null);

  // const handleClicks = (e: any) => {
  //   e.stopPropagation();

  //   const room = document.querySelector(".room")!;
  //   const rect = room.getBoundingClientRect();
  //   const X = Math.abs(Math.ceil(e.clientX - rect.left));
  //   const Y = Math.abs(Math.ceil(e.clientY - rect.top));

  //   const offX = e.offsetX;
  //   const offY = e.offsetY;

  //   console.log("CLIENT: ", X, Y);
  //   console.log("Offset: ", offX, offY);

  //   const limitXRight = 337 - 100;
  //   const limitXLeft = 50;
  //   const limitYBottom = 343 - 100;
  //   const limitYTop = 50;

  //   if (
  //     X > limitXLeft &&
  //     X < limitXRight &&
  //     Y > limitYTop &&
  //     Y < limitYBottom
  //   ) {
  //     setX(X - 50);
  //     setY(Y - 50);
  //   } else if (X > limitXRight) {
  //     X < limitXRight + 50 ? setX(X - 50) : setX(X - 100);
  //     if (Y > limitYBottom) {
  //       Y > limitYBottom ? setY(Y - 100) : setY(Y - 50);
  //     } else if (Y < limitYTop) {
  //       setY(Y);
  //     } else {
  //       Y < limitYBottom + 50 ? setY(Y - 50) : setY(Y - 100);
  //     }
  //   } else if (X < limitXLeft) {
  //     setX(X);
  //     if (Y > limitYBottom) {
  //       setY(Y - 100);
  //     } else if (Y < limitYTop) {
  //       setY(Y);
  //     } else {
  //       setY(Y - 50);
  //     }
  //   } else if (Y > limitYBottom) {
  //     Y < limitYBottom + 50 ? setY(Y - 50) : setY(Y - 100);
  //     setX(X - 50);
  //   } else if (Y < limitYTop) {
  //     setY(Y);
  //     setX(X - 50);
  //   }
  // };


//   const handleClicks = (e: any) => {
//     e.stopPropagation();

//     const room = document.querySelector(".room")!;
//     const rect = room.getBoundingClientRect();
//     const X = Math.abs(Math.ceil(e.clientX - rect.left));
//     const Y = Math.abs(Math.ceil(e.clientY - rect.top));

//     const limitXRight = 337 - 100;
//     const limitXLeft = 50;
//     const limitYBottom = 343 - 100;
//     const limitYTop = 50;

//     let newX = X;
//     let newY = Y;

//     if (X > limitXRight) {
//         newX = X < limitXRight + 50 ? X - 50 : X - 100;
//     } else if (X < limitXLeft) {
//         newX = X;
//     } else if (X > limitXLeft && X < limitXRight) {
//         newX = X - 50;
//     }

//     if (Y > limitYBottom) {
//         newY = Y < limitYBottom + 50 ? Y - 50 : Y - 100;
//     } else if (Y < limitYTop) {
//         newY = Y;
//     } else if (Y > limitYTop && Y < limitYBottom) {
//         newY = Y - 50;
//     }

//     setX(newX);
//     setY(newY);
// };


const handleClicks = (e: any) => {
  
  const room = document.querySelector(".room")!;
  const rect = room.getBoundingClientRect();
  const X = Math.abs(Math.ceil(e.clientX - rect.left));
  const Y = Math.abs(Math.ceil(e.clientY - rect.top));

  const limitXRight = 337 - 100;
  const limitXLeft = 50;
  const limitYBottom = 343 - 100;
  const limitYTop = 50;

  let newX = X > limitXRight 
              ? (X < limitXRight + 50 ? X - 50 : X - 100)
              : (X < limitXLeft ? X : (X > limitXLeft && X < limitXRight ? X - 50 : X));

  let newY = Y > limitYBottom 
              ? (Y < limitYBottom + 50 ? Y - 50 : Y - 100)
              : (Y < limitYTop ? Y : (Y > limitYTop && Y < limitYBottom ? Y - 50 : Y));

  setX(newX);
  setY(newY);
};



  const captureOutsideClick: EventListener = (e) => {
    if (refOne.current && !refOne.current?.contains(e.target as HTMLElement)) {
      setShow(false);
    }

    if(scope2.current && !scope2.current?.contains(e.target as HTMLElement)){
      animate2(scope2.current, {
        left: "100%"
      })
    }
  };

  useEffect(() => {
    document.addEventListener("click", captureOutsideClick, true);

    return () => document.removeEventListener("click", captureOutsideClick, true);
  }, []);

  // const avatarRef = useRef(null)
  const [scope, animate] = useAnimate()

  const handleTaps = ()=> {
    animate(scope.current, {
      scaleX: [1, 1, 1.5, 1, 1.2, 1, 1.1, 1],
      scaleY: [1, 1, 0.5, 1, 0.8, 1, 0.9, 1]
    }, {duration: 2})
  }

  // Sidebar animation:
  const [isAnimate, setIsAnimate] = useState(false)

  const [scope2, animate2] = useAnimate()

  // const sidebarRef = useRef(null)

  const handleSidebarAnimation = ()=> {
    animate2(scope2.current, {
      left: "44%"
    }, {
      type: "spring",
      damping: 10,
      duration: 0.5,
    })
  }

  return (
    <main className="flex mx-auto h-screen flex-col items-center z-50 justify-between w-[calc(50vh)] relative overflow-x-hidden">
      <div className="border shadow h-screen w-[calc(50vh)] p-1 flex flex-col">
        <div className="chat h-[50%]">
          <div className="menu h-[35px] flex justify-between mt-2 px-2">
            <div className="vip">
              <RiVipCrown2Line className="text-2xl" />
            </div>
            <div className="menu">
              <button onClick={handleSidebarAnimation}>
                <MenuIcon />
              </button>
            </div>
          </div>
          <div className="messages overflow-y-auto h-[40vh] no-scrollbar">
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
          </div>
        </div>
        <div
          onClick={handleClicks}
          className="z-20 room overflow-hidden h-[50%] border relative"
        >
          <Image
            src={roomBg}
            alt="room-bg"
            className="w-full h-full z-0 absolute"
            priority={true}
          />
          <div
            className="z-50"
            onClick={(e) => {
              setShow((pre) => !pre);
              e.stopPropagation()
            }}
          >
            <motion.div
              ref={scope}
              onClick={handleTaps}
              className="image w-[100px] z-10 h-[100px] text-center relative"
              animate={{
                x,
                y,
                scaleX: [1, 1, 1.5, 1, 1.2, 1, 1.1, 1],
                scaleY: [1, 1, 0.5, 1, 0.8, 1, 0.9, 1]
              }}
              transition={{
                type: "just", 
                duration: 2,
                ease: "easeOut"
              }}
            />
          </div>
        </div>
        <AnimatePresence>
          <span ref={refOne}>
            <Dialog showData={show} />
          </span>
        </AnimatePresence>
        <div className="message">
          <input
            className="w-full bg-inherit border-none py-2 px-3 outline-none"
            placeholder="Write your message here"
          />
        </div>
      </div>
      <motion.div 
      initial={{
        left: "100%"
      }}
      transition={{
        when: "beforeChildren",
        staggerChildren: 0.2
      }}
      ref={scope2}
      className="absolute bg-slate-900 z-40 w-[270px] h-screen flex flex-col">
        <Sidebar />
      </motion.div>
    </main>
  );
}
