import React from "react";

function ChatNavbar() {
    return (
        <div className="flex items-center justify-between px-4 py-2 space-x-1 h-14 bg-primary-foreground ">
            <div className="flex items-center space-x-1">
                <img
                    src="https://avatars.githubusercontent.com/u/77449537?v=4"
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                />
                <h1 className="text-foreground">Username</h1>
            </div>
            <div className="flex items-center space-x-1">
                <button className="bg-primary-foreground rounded-lg px-4 py-2 text-foreground h-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </button>
                <button className="bg-primary-foreground rounded-lg px-4 py-2 text-foreground h-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21a5 5 0 01-7.8 4.1"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ChatNavbar;
