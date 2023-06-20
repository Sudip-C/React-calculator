import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Calculator() {

const [show,setShow]=useState(0)
const [total,setTotal]=useState(0)


const handleDivide=()=>{
  console.log("divide")
}
const handleAdd=()=>{
  console.log("Add")
  
}
const handleSubs=()=>{
  console.log("Substract")
}
const handleMulti=()=>{
  console.log("Mltiplication")
}

  return (
    <Box bg="green" width="35%" mx="auto" my="100px" pt="30px" h="500px">
      <Box bg="white"w="80%" textAlign="right" m="auto"  borderRadius="10px" padding="10px" >
{total?total:show}
      </Box>
     <VStack w="80%" m="auto"mt="20px">
     <HStack >
        <Button onClick={()=>setShow(0)}>AC</Button>
        {/* <Button>(</Button>
        <Button>)</Button>
        <Button>%</Button> */}
      </HStack>
     <HStack>
        <Button onClick={()=>setShow(7)}>7</Button>
        <Button onClick={()=>setShow(8)}>8</Button>
        <Button onClick={()=>setShow(9)}>9</Button>
        <Button onClick={handleDivide}>/</Button>
      </HStack>
      <HStack>
        <Button onClick={()=>setShow(4)}>4</Button>
        <Button onClick={()=>setShow(5)}>5</Button>
        <Button onClick={()=>setShow(6)}>6</Button>
        <Button onClick={handleMulti}>*</Button>
      </HStack>
      <HStack>
        <Button onClick={()=>setShow(1)}>1</Button>
        <Button onClick={()=>setShow(2)}>2</Button>
        <Button onClick={()=>setShow(3)}>3</Button>
        <Button onClick={handleSubs}>-</Button>
      </HStack>
      <HStack>
        <Button onClick={()=>setShow(0)}>0</Button>
        <Button onClick={()=>setShow(".")}>.</Button>
        <Button onClick={()=>setTotal(0)}>=</Button>
        <Button onClick={handleAdd}>+</Button>
      </HStack>
     </VStack>
    </Box>
  )
}
