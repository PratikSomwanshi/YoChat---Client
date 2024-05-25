import React from "react";
import { socket } from "./socket";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/local_ui/navbar";
import Search from "@/components/local_ui/search";
import Chat from "@/components/local_ui/chat";

function page() {
    return (
        <section className="flex space-x-3">
            <div>
                <Navbar />
            </div>
            <div>
                <Search />
            </div>
            <div>
                <Chat />
            </div>
        </section>
    );
}

export default page;
