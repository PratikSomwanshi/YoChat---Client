import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { IoIosSend } from "react-icons/io";

function ChatSearch() {
    return (
        <div className="flex space-x-1 px-2">
            <Input type="text" className="rounded-lg" />
            <Button className="bg-primary-foreground">
                <IoIosSend className="text-white" size="20px" />
            </Button>
        </div>
    );
}

export default ChatSearch;
