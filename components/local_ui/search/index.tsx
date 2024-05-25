import React from "react";
import { CiSearch } from "react-icons/ci";
import NewMsg from "./new_msg";

function Search() {
    return (
        <section className="h-screen flex flex-col justify-center">
            <div className="bg-primary h-[98%] rounded-lg ">
                <div className="flex items-center justify-between px-4 py-2 space-x-1 h-14">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-input text-foreground rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
                    />
                    <button className="bg-primary-foreground rounded-lg px-4 py-2 text-foreground h-full">
                        <CiSearch size="20px" />
                    </button>
                </div>
                <div className="h-[92.4%] overflow-y-scroll msg">
                    <NewMsg />
                </div>
            </div>
        </section>
    );
}

export default Search;
