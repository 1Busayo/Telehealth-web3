import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text ,Button } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import doc1 from '../assets/images/doc1.jpg';


const Property = ({ roomid ,acc}) =>

   (
 

    <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      <Box>
        
       <Image src={doc1} width={400} height={260} />  
      </Box>
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='blue.400'> <GoVerified /><Link   href={`/donate/${acc}`}><a target="_blank" >click here to Pay</a></Link></Box>
            
          </Flex>
           
        </Flex>
     
      </Box>

    </Flex>

);


export default Property;