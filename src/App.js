import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import EntryList from "./components/EntryList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { Spinner } from "@chakra-ui/react";

function App() {
  const [results, setResults] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Flex direction={"column"}>
      <Header searchWord={searchWord} />
      <SearchInput
        setResults={setResults}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setLoading={setLoading}
      />
      {loading ? (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.400"
            size="xl"
          />
        </Center>
      ) : (
        <EntryList results={results} />
      )}
    </Flex>
  );
}

export default App;
