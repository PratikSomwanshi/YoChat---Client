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
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
    {
        id: 3,
        content: "New Message",
        sender: "sundarlal",
    },
];

function NewMsg() {
    return (
        <section className="space-y-2 mt-4 ">
            {msg.map((msg) => {
                return (
                    <div className="flex justify-center">
                        <div
                            key={msg.id}
                            className="flex items-center justify-between px-4 py-2 bg-primary-foreground h-16 w-[95%] rounded-lg">
                            <p className="text-white">{msg.sender}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default NewMsg;
