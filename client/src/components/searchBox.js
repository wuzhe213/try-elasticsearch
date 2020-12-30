import React, { useState, useEffect, useContext } from 'react';

import { SearchResultsContext } from '../pages';

const searchBox = () => {
    const { searchResults, setSearchResults } = useContext(
        SearchResultsContext
    );
    const [marginTop, setMarginTop] = useState(200);

    useEffect(() => {
        document.getElementById('id_search').focus();
    }, []);

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            console.log('hi');
            fetch('http://localhost:4000/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    search: event.target.value,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // data就是我们请求的数据
                    console.log('searchResult', data);
                    setSearchResults(data);
                    setMarginTop(20);
                });
        } else {
            // setSearchResults(event.target.value);
        }
    };

    return (
        <div className="search_box">
            <input
                type="text"
                id="id_search"
                autoComplete="off"
                onKeyDown={onKeyDown}
            />

            <style jsx>{`
                .search_box {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    margin-top: ${marginTop}px;
                }

                .search_box > input {
                    width: 400px;
                    height: 40px;
                    background: #ffffff;
                    border: 1px solid #8d8d8d;
                    border-radius: 6px;
                    padding: 0 10px;
                    outline-style: none;
                    font-size: 16px;
                }

                .search_box > input:focus {
                    border: 1px solid #b7b2f6;
                    height: 40px;
                    line-height: 36px;
                    caret-color: #0085bd;
                }
                .search_box > input:hover {
                    border: 1px solid #b2e2f6;
                }
            `}</style>
        </div>
    );
};

export default searchBox;
