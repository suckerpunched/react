import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Text, Box, Link } from 'rebass';

export default function ToolBar(props) {

  return (
    <Flex
      px={2}
      color='white'
      bg='black'
      alignItems='center'
    >  
      <Text p={2} fontWeight='bold'>Rebass</Text> 
      <Box mx='auto' />

      <Link variant='nav'>
        <RouterLink to='userpage'>UserPage</RouterLink>
      </Link>
      
      <Link variant='nav'>
        <RouterLink to='notuserpage'>NotUserPage</RouterLink>
      </Link>
      
    </Flex>
  )

}