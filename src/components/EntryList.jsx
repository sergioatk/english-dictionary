import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Meaning from './Meaning'

const EntryList = ({ results }) => {

    useEffect(() => {
        // console.log('results en entry list=>', results)
    }, [results])
    return (
        <Box
        >
            {results.length > 0 && <Meaning result={results[0]} />}
        </Box>
    )
}

export default EntryList