import Link from 'next/link';
import Image from 'next/image';
import { Flex, Select, Box, Text, Input, Spinner, TagLabel, Icon, Button, FormLabel, Stack } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
// import millify from 'millify';

// import DefaultImage from '../assets/images/house.jpg';


const InitialState = ({
  roomname,
  setRoomname,
  createroom,
}) => {

  return (

    <Box maxWidth='1000px' margin='auto' p='4'>
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
        <Text>Create Room</Text>

      </Flex>
      <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
        <Box> <form>
          <FormLabel> Room Title  </FormLabel>
          <Input
            placeholder='Type Here'
            name='addr'
            value={roomname}
            w='300px'
          
            onInput={(e) => setRoomname(e.target.value)}

            focusBorderColor='gray.300'

          />

     


          <Button
            onClick={() => {

              if (roomname) {
                createroom()
              }
            }}>

            Create Room
          </Button>



        </form>
        </Box>
      </Flex>


    </Box>
  )
}

export default InitialState;