import React from 'react'
import { Box, Center, Flex, List, ListIcon, ListItem } from '@chakra-ui/react'
import { VscChevronRight } from "react-icons/vsc";

const Meaning = ({ result }) => {
    const phonetics = result.phonetics.map(phonetic => {
        return { audio: phonetic.audio, text: phonetic.text }
    })

    const uniqueChars = phonetics.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.text === value.text
        ))
    )
    const audio = phonetics.find(phonetic => phonetic.audio)
    return (
        <>
            {
                <>
                    <Flex
                        direction={'row'}
                        justifyContent='space-evenly'
                        py={4}
                        fontFamily={'montserrat'}
                    >
                        {
                            uniqueChars.slice(0, 3).map(phonetic => {
                                if (phonetic.text) {
                                    return (
                                        <Box
                                            key={phonetic.text}
                                            bg='green.900'
                                            p={2}
                                            borderRadius={7}
                                            color='white'
                                        >{phonetic.text}</Box>
                                    )
                                }
                            })
                        }
                    </Flex>
                    <Center my={3} >
                        {
                            audio?.audio && <audio bg='green.900' src={audio.audio} controls>hola</audio>
                        }
                    </Center>
                </>
            }
            {
                <List
                    spacing={3}
                    mx={7}
                    textAlign='justify'
                >
                    {
                        result.meanings.slice(0, 2).map(meaning => {
                            return meaning.definitions.slice(0, 4).map(def => {
                                return <ListItem
                                    key={def.definition}
                                    fontFamily='montserrat'
                                >
                                    <ListIcon
                                        as={VscChevronRight}
                                        color={'green.400'}
                                    />{def.definition}</ListItem>
                            })
                        })
                    }
                </List>
            }
        </>
    )
}

export default Meaning