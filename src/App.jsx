
import { Flex, Spacer ,Box } from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons'

import './App.css'

function App() {


  return (
  <>

     <div className='container'>
 <Box className='box'>Logo</Box>
     <Flex p={4} w={200} fontSize={17} className="flex">
         Home
       </Flex>

       <Flex p={4} w={200} fontSize={17} className="flex">
       Trending
       </Flex>

       <Flex p={4} w={200} fontSize={17} className="flex">
       Explore
       </Flex>

       <Flex p={4} w={200} fontSize={17} className="flex">
      Favoutiete
       </Flex>

       <Flex p={4} w={200} fontSize={17}  className="flex" >
      Settting
       </Flex>
     </div>
  </>
  )
}

export default App
