import { useState } from "react";
import ChatUserCard from "../components/ChatUserCard";
import SelectChatWaiter from "../components/SelectChatWait/SelectChatWaiter";
import PageTitle from "@/Typography/PageTitle";
import SectionTitle from "@/Typography/SectionTitle";
import response from "../utils/demo/usersData";
// import { Avatar, Badge } from "@windmill/react-ui";
import ChatSection from "../components/ChatSection";

import { Badge } from "@/components/ui/badge";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface ResponseType {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    joined_on: string;
    state: boolean;
    messages: { flag: string; text: string }[] | null;
}


const Chats = () => {
    const [selectedChat, setSelectedChat] = useState<ResponseType | undefined>(undefined);

    const handleSelect = (user: ResponseType) => setSelectedChat(user);

    return (
        <div>
            {!selectedChat && <PageTitle>Connect with your customers</PageTitle>}
            {selectedChat && (
                <div className="flex items-center mt-6">
                    {/* <Avatar className="hidden md:inline-flex" src={selectedChat.avatar} /> */}
                    <Avatar>
                        <AvatarImage src={selectedChat.avatar} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="mx-3 inline-flex text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        {selectedChat.first_name} {selectedChat.last_name}
                    </p>

                    <Badge className={`${selectedChat.state === true ? "bg-green-500" : "bg-red-500 "} dark:text-white`} >
                        {selectedChat.state === true ? "Online" : "Away"}
                    </Badge>
                </div>
            )}

            <div className="grid grid-col md:grid-cols-4 gap-1">
                <div className="md:col-span-3 ">
                    {!selectedChat ? (
                        <div className="mt-32 flex flex-col justify-center items-center">
                            <SelectChatWaiter />
                            <p className="text-gray-600 dark:text-gray-400">Select a chat</p>
                        </div>
                    ) : (
                        selectedChat.messages &&
                        <div>
                            <ChatSection messages={selectedChat?.messages} />
                        </div>
                    )}
                </div>
                <div className="">
                    <SectionTitle>Contacts</SectionTitle>
                    {response.map((user, id) => {
                        if (user.messages !== null) {
                            return (
                                <ChatUserCard
                                    key={id}
                                    avatar={user.avatar}
                                    first_name={user.first_name}
                                    last_name={user.last_name}
                                    state={user.state}
                                    handleClick={() => handleSelect(user)}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Chats;
