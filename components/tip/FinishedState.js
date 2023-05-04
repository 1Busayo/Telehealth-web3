import { useContext, useEffect,useState } from 'react'
import { Web3Context } from '../context/Web3Context'
import Image from 'next/image'
 import checkMark from '../../assets/images/check.png'
 import Link from 'next/link';

 import { joinHuddleroom } from '../../lib/client'
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router'


const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
  closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
}

const FinishedState = ({url}) => {
  const router = useRouter()
  const { getCurrentUserDetails,patRoom } = useContext(Web3Context)


  useEffect(() => {
   // getCurrentUserDetails()
   //joinroom()
  })



      

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Transfer Successful!</div>
      <Image src={checkMark} alt='checkmark' height={100} width={100} />
      {/* <div onClick={() => router.push({url})} className={style.closeButton}>
      Join Room
      </div> */}
      <Button>
              <Link   href={`${url}`}><a target="_blank" >Enter room </a></Link> 
      </Button>
 
      
    </div>
  )
}

export default FinishedState