import React, { useContext } from 'react';
import { SearchResultsContext } from '../pages';

import styles from './searchResults.module.css';

const searchResults = () => {
    const { searchResults, setSearchResults } = useContext(
        SearchResultsContext
    );
    // console.log('searchResults', searchResults);
    return (
        <div className={styles.searchResults}>
            {searchResults.total > 0 &&
                searchResults.data.map((result) => {
                    return <p>{result.knowledge}</p>;
                })}

            {searchResults.total === 0 && <div>got none</div>}
        </div>
    );
};

export default searchResults;
