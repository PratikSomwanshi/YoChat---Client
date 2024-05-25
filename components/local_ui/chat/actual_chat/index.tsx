import React from "react";

const msg = [
    {
        id: 1,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 2,
        content: "New Message",
        sender: "john",
    },
    {
        id: 3,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 4,
        content: "New Message",
        sender: "john",
    },
    {
        id: 5,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 6,
        content: "New Message",
        sender: "john",
    },
    {
        id: 7,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 8,
        content: "New Message",
        sender: "john",
    },
    {
        id: 9,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 10,
        content: "New Message",
        sender: "john",
    },
    {
        id: 11,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 12,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 13,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 14,
        content: "New Message",
        sender: "john",
    },
    {
        id: 15,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 16,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 17,
        content: "New Message",
        sender: "john",
    },
    {
        id: 18,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 19,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 20,
        content: "New Message",
        sender: "john",
    },
    {
        id: 21,
        content: "New Message",
        sender: "manoj",
    },
    {
        id: 22,
        content: "New Message",
        sender: "john",
    },
    {
        id: 22,
        content: "New Message",
        sender: "john",
    },
    {
        id: 22,
        content: "New Message",
        sender: "john",
    },
    {
        id: 22,
        content: "New Message",
        sender: "john",
    },
    {
        id: 22,
        content: "New Message",
        sender: "john",
    },
    {
        id: 22,
        content: "New Message",
        sender: "john",
    },
    {
        id: 22,
        content: "New Message",
        sender: "manoj",
    },
];

function ActualChat() {
    return (
        <div className="mt-2 space-y-1 ">
            {msg.map((item) => (
                <div key={item.id}>
                    {item.sender === "manoj" ? (
                        <div className="flex justify-end">
                            <div className="bg-primary-foreground text-primary px-4 py-2 rounded-lg mx-4">
                                {item.content}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-start">
                            <div className="bg-primary-foreground text-primary px-4 py-2 rounded-lg mx-4">
                                {item.content}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ActualChat;
