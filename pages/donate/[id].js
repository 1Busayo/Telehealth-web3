import {useState, useContext} from 'react'
import { Web3Context } from '../../components/context/Web3Context'
import {  useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import InitialState from '../../components/tip/InitialState'
import LoadingState from '../../components/tip/LoadingState'
import FinishedState from '../../components/tip/FinishedState'
import { pinJSONToIPFS, pinFileToIPFS } from '../../lib/pianta'
import { client , joinHuddleroom } from '../../lib/client'
 import {ethers} from 'ethers'
 import { contracTipABI,  contractAddress} from '../../lib/constants'

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
    contracTipABI,
    signer
    )

  return transactionContract



}

const Donate = () => {
    const { currentAccount, setAppStatus, patRoom } = useContext(Web3Context)
    const router = useRouter()
  
    const [amount, setAmount] = useState('')
    const [Links, setLinks] = useState({})
    const [addrto, setAddrto] = useState('')
    const [status, setStatus] = useState('initial')
  
  const  { id } = router.query;

    const sendbtn = async () => {
      if (!addrto || !amount ) return
      setStatus('loading')
  
    
  

  
        try {
                if (metamask) {
                //  const { addressTo, amount, keyword, message } = formData;
                  const transactionsContract = getEthereumContract();
                  const parsedAmount = ethers.utils.parseEther(amount);
          
                  await metamask.request({
                    method: "eth_sendTransaction",
                    params: [{
                      from: currentAccount,
                     // to: addrto,
                       to:"0x251e2e956765C58D441ae79F2B978529526Bd0B7",
                      // gas: "0x5208",
                      value: parsedAmount._hex,
                    }],
                  });
          
                //   const transactionHash = await transactionsContract.addToBlockchain("0x251e2e956765C58D441ae79F2B978529526Bd0B7", parsedAmount, " payment to connsult the doctor", "");
                  
              
                  
                //   //setIsLoading(fatruelse);
                // //  setIsLoading(false);
                //   console.log(`Loading - ${transactionHash.hash}`);
                //   await transactionHash.wait();
                //   console.log(`Success - ${transactionHash.hash}`);
                // //  setIsLoading(false);
          
                //   const transactionsCount = await transactionsContract.getTransactionCount();
          
                //   setTransactionCount(transactionsCount.toNumber());


                  { console.log('patroom', patRoom.room_id) }

                  if (patRoom !== undefined) {
                      await joinHuddleroom(patRoom.room_id, (result) => {
          
          
                          setLinks(result)
          
                          { console.log('linx', result) }
          
                        setStatus('finished')
                      })
          
          
          
          
          
          
                  }
          
          
                
                //  window.location.reload();
                } else {
                  setStatus('finished')
                  console.log("No ethereum object");
                }
        } catch (error) {
          console.log(error);
          setStatus('finished')
        //  throw new Error("No ethereum object");
          
        }
    
    
  
  
  
    }
  
  const modalChildrren = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
        return (
          <InitialState
            
            addrto ={id}
            setAddrto={setAddrto}
            amount ={amount}
            setAmount={setAmount}
            sendbtn={sendbtn}
          />
        )
  
      case 'loading':
        return <LoadingState />
  
      case 'finished':
        return <FinishedState
          url={Links.redirectUrl}
         />
  
      default:
        router.push('/')
        setAppStatus('error')
        break
    }
  }
  
  
    return <> {(modalChildrren(status))} </>
  }
  

export default Donate