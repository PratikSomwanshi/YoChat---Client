import React from "react";
import ChatNavbar from "./chat_navbar";
import ActualChat from "./actual_chat";
import ChatSearch from "./chat_search";

function Chat() {
    return (
        <section className="h-screen flex flex-col justify-center w-[67rem]">
            <div className="flex flex-col bg-primary h-[98%] rounded-lg w-full overflow-hidden">
                <div>
                    <ChatNavbar />
                </div>
                <div className="flex-1 overflow-y-scroll">
                    <ActualChat />
                </div>
                <div className="h-12 mt-2">
                    <ChatSearch />
                </div>
            </div>
        </section>
    );
}

export default Chat;
