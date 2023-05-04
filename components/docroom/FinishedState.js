import Link from 'next/link';
import { useContext, useEffect } from 'react'
import { Web3Context } from '../context/Web3Context'
import Image from 'next/image'
 import checkMark from '../../assets/images/check.png'
import { useRouter } from 'next/router'


const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
  closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
}

const FinishedState = ({docroom,roomid,roomlink}) => {
  const router = useRouter()
  const {  setPatroom, patRoom } = useContext(Web3Context)

  useEffect(() => {
   // getCurrentUserDetails()
  })

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Room Created Successful!</div>
      <Image src={checkMark} alt='checkmark' height={100} width={100} />
      <div onClick={() => router.push('/')} className={style.closeButton}>
        Close
      </div>
    
     
       

      <Link   href={`${roomlink}`}><a target="_blank" >Enter room ({roomid}) </a></Link>

    </div>
 
    
  )
}

export default FinishedState