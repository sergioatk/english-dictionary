import {
    Button,
    Center,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    useToast
} from '@chakra-ui/react'
import '@fontsource/montserrat/300.css'
import { FiBook } from 'react-icons/fi'
import React, { useCallback, useEffect, useRef } from 'react'
import { getWordInfo } from '../services/api'

const SearchInput = ({
    setResults,
    searchWord,
    setSearchWord,
    setLoading
}) => {

    const toast = useToast()
    const textInput = useRef()

    const handleReset = useCallback(() => {
        setSearchWord('')
        setResults([])
        textInput.current.focus()
    }, [setResults, setSearchWord])
    const handleInput = (e) => {
        setSearchWord(e.target.value)
    }

    const handleKeyPress = (e) => {
        const key = e.code
        if (key === 'Backspace') {
            handleReset(key)
        }
    }

    useEffect(() => {
        const handleSearch = async (word) => {

            const response = await getWordInfo(word)
            setLoading(false)
            if (response.status === 200) {
                setResults(response.data)
            }
        }
        const timer = setTimeout(async () => {
            if (searchWord.trim().length > 0) {
                try {
                    setLoading(true)
                    await handleSearch(searchWord.trim())
                } catch (error) {
                    setLoading(false)
                    toast({
                        title: `No results for '${searchWord}'`,
                        status: 'error',
                        isClosable: true,
                        timeout: 800
                    })
                    setTimeout(handleReset, 1000)
                }
            }
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [searchWord, setLoading, setResults, toast, handleReset])

    return (
        <Center fontFamily={'montserrat'}>
            <InputGroup
                my={'1rem'}
                w={'80vw'}
            >
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={FiBook} color='green.300' h='2rem' />}
                />
                <Input
                    ref={textInput}
                    onChange={handleInput}
                    onKeyDown={handleKeyPress}
                    placeholder='Type any word'
                    variant='flushed'
                    fontFamily={'montserrat'}
                    fontSize='1.8rem'
                    value={searchWord}
                />
                <Button
                    ml={5}
                    bg='green.300'
                    onClick={handleReset}
                >Reset</Button>
            </InputGroup>
        </Center>
    )
}

export default SearchInput