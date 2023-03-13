'use client'

import Image from 'next/image';

import '../css/header.scss';

import { useState } from 'react';

import SearchBar from './searchBar';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const [searchList, setList] = useState(Array);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <div className="logo">
                    <Image
                        src="Logo.svg"
                        width={200}
                        height={100}
                        alt="Logo"
                    />
                </div>
                <SearchBar setList={setList} />
                <div className="menu_button" >
                    <button
                        onClick={toggleOpen}
                    >

                        <div className="line" style={isOpen ? { transform: "translateY(6px) rotate(135deg)" } : {}}></div>
                        <div className="line" style={isOpen ? { opacity: 0 } : { opacity: 1 }}></div>
                        <div className="line" style={isOpen ? { transform: "translateY(-6px) rotate(-135deg)" } : {}}></div>

                    </button>
                </div>
            </header>

            {/* search dropdown menus */}
            <div className='second_row'>
                <div className="empty"></div>
                <div className="search_dropdown">

                    {searchList && searchList.map((val: any, index) => {
                        //show five search results
                        if (index < 5) {
                            return (
                                <a href='#' key={index} className='search_item'>{val.name.substr(0, 15)}</a>
                            )
                        }

                    })}
                </div>

                <div className="menu">
                    {isOpen && (
                        <div className='menu_container'>
                            <a href="#">
                                <div
                                    className='menu_item'
                                >
                                    Account
                                </div>
                            </a>


                            <div className="menu_item">
                                <a
                                    href="#"
                                    className=''

                                >
                                    Settings
                                </a>
                            </div>
                            <div className="menu_item">
                                <a
                                    href="#"
                                    className=''

                                >
                                    Log Out
                                </a>
                            </div>
                        </div>
                    )}
                </div >

            </div>

        </>
    )
}

export default Header;
