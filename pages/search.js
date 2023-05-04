import { useState , useContext , useEffect} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg'
import { getroom  } from '../lib/client'



import { Web3Context } from '../components/context/Web3Context';

 


const Search =  () => {
  const {patRoom , currentAccount, tweets } =useContext(Web3Context)
// const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);

  const router = useRouter();
 

  return (
    <Box>
      <Flex
        // onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Patient Room</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>

      <Text fontSize='2xl' p='4' fontWeight='bold'>
       Consult with a doctor {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
       



{/* 
{ tweets.map((property) => <Property property={property} key={property.mimeid} />)} */}

 { patRoom !== undefined ?  <Property  roomid={patRoom.room_id} acc = {currentAccount} /> : ""}





  </Flex>
      {patRoom === undefined && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Doctors Avilable </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
