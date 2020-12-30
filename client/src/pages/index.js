import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NavBar from '../components/navbar';
import SearchBox from '../components/searchBox';
import SearchResults from '../components/searchResults';
import Suggestions from '../components/suggestions';
import Footer from '../components/footer';

import { createContext, useState } from 'react';

export const SearchResultsContext = createContext({
    searchResults: [],
    setSearchResults: () => {},
});

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const value = { searchResults, setSearchResults };

    return (
        <div className={styles.app}>
            <SearchResultsContext.Provider value={value}>
                {/* <NavBar /> */}
                <SearchBox />
                <SearchResults />
                {/* <Suggestions /> */}
                {/* <Footer /> */}
            </SearchResultsContext.Provider>
        </div>
    );
}
