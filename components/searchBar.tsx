'use client'

import '../css/searchBar.scss'
import { useCallback } from "react"

function debounce(func: Function, wait: number) {
    let timer: any;

    return (...args: any) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = null;
        timer = setTimeout(() => func(...args), wait)
    }

}

export default function SearchBar(props: { setList: Function }) {
    const wait: number = 300;

    const URL = (query:String) => `https://demo.dataverse.org/api/search?q=${query}`

    const debouncedHandleChange = useCallback(
        debounce((query: string) => {
            fetch(URL(query))
                .then((res) => res.json())
                .then((json) => props.setList(json.data.items));

        }, wait),
        []
    );

    function handleChange(searchedText: string) {
        if (searchedText != "") debouncedHandleChange(searchedText)
    }

    return (
        <>
            <div className="searchBar">                             
                <input type="search"
                    placeholder="Search"
                    list="searching"
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button type="submit">Search</button>

            </div>

        </>
    )
}