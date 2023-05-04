import {useState, useContext} from 'react'
import { Web3Context } from '../components/context/Web3Context'
import {  useRouter } from 'next/router';
import InitialState from '../components/docroom/InitialState'
import LoadingState from '../components/docroom/LoadingState'
import FinishedState from '../components/docroom/FinishedState'
import { pinJSONToIPFS, pinFileToIPFS } from '../lib/pianta'
import { newroom , createHuddleroom } from '../lib/client'
 import {ethers} from 'ethers'
 import { contractABI,  contractAddress , contracTipABI} from '../lib/constants'
 import { useSelector, useDispatch } from 'react-redux'
import { rooms } from '../redux/counter'






let metamask

if (typeof window !== 'undefined') {
  metamask = window.ethereum
}


const getEthereumContract = async () => { 
  if (!metamask) return
  const provider = new ethers.providers.Web3Provider(metamask)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
    )

  return transactionContract



}


const Docroom = () => {
   const { currentAccount, setPatroom ,patRoom,setAppStatus } = useContext(Web3Context)
  const router = useRouter()
  const count = useSelector((state) => state.counter.roomId)
const dispatch = useDispatch()
  console.log('selector',count)

  const [roomname, setRoomname] = useState('')
  const [docroom, setDocroom] = useState({})
//   const [patroom, setPatroom] = useState({})
  const [status, setStatus] = useState('initial')

 


  const createroom = async () => {
    if ( !roomname ) return
    setStatus('loading')

 const create =  await  createHuddleroom(roomname ,(result)=>{

 
   setDocroom(result)
   dispatch(rooms(result))

   newroom({roomid:result.roomId})

   {console.log('pax',patRoom)}
      setStatus('finished')
   
 })
  
 
  
   }


const modalChildren = (modalStatus = status) => {
  switch (modalStatus) {
 
    case 'initial':
      return ( 
        
        <InitialState
        roomname={roomname}
        setRoomname={setRoomname}
          createroom={createroom}
         
        
        />
      )
   
    case 'loading':
      return <LoadingState />

    case 'finished':
      return <FinishedState
            docroom={docroom}
            roomid={docroom.roomId}
            roomlink={docroom.meetingLink}
             />

    default:
      router.push('/')
      setAppStatus('error')
    // setDocStatus('docroom')
      break
  }
}


  return <> {(modalChildren(status))} </>
}

export default Docroom








