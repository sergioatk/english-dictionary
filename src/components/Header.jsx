import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Header = ({ searchWord }) => {
    return (
        <Flex
            direction='row'
            wrap='wrap'
            bg={'green.400'}
            color={'white'}
            p={'2rem'}
            justify='center'
            fontFamily={'montserrat'}
            fontSize={'3rem'}
        >
            <Box>
                {searchWord ? searchWord : 'Dictionary'}
            </Box>
        </Flex>
    )
}

export default Header