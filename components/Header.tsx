'use client'

import '../css/header.scss';

import { useState } from 'react';

import SearchBar from './searchBar';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const [searchList, setList] = useState(Array);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const topLine = {

    }


    return (
        <>
            <header>
                <div className="logo">Logo</div>
                <SearchBar setList={setList} />
                <div className="menu_button">
                    <button
                        onClick={toggleOpen}
                    >


                        <div className="line" style={isOpen ? { transform: "translateY(6px) rotate(45deg)" } : {}}></div>

                        <div className="line" style={isOpen ? { opacity: 0 } : { opacity: 1 }}></div>
                        <div className="line" style={isOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : {}}></div>

                    </button>
                    {isOpen && (
                        <div className="flex flex-col justify-center h-max rounded-md bg-slate-800 absolute top-12 border-black border-2 right-0 w-36" >

                            <a className="flex justify-center border-b-2 py-2 border-black  text-black hover:bg-blue-600 " href="#">
                                <div
                                    className='text-white'
                                >
                                    Account
                                </div>
                            </a>


                            <div className="flex justify-center border-b-2 py-2 border-black text-black hover:bg-blue-600 ">
                                <a
                                    href="#"
                                    className='text-white'

                                >
                                    Settings
                                </a>
                            </div>
                            <div className="flex justify-center text-black py-2 hover:bg-blue-600 ">
                                <a
                                    href="#"
                                    className='text-white'

                                >
                                    Log Out
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header >

            {/* search dropdown menu */}
            < div className={`flex flex-col items-center transition delay-500 relative right-1 z-0 ${searchList.length > 0 ? 'bottom-0' : 'bottom-6'}`
            }>
                <div className="bg-gray-700 rounded flex flex-col gap-1 w-[19rem] p-2">

                    {searchList && searchList.map((val: any, index) => {
                        console.log(val)
                        if (index < 5) {
                            return (
                                <a href='#' key={index} className='h-fit ml-1 p-2 transition delay-100 flex flex-wrap text-white border-[1px] border-white rounded hover:text-blue-400 focus:text-blue-600'>{val.name}</a>
                            )
                        }

                    })}
                </div>

            </div >

        </>
    )
}

export default Header;
