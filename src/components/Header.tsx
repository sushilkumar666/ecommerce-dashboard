import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { useNavigate } from "react-router-dom";
import {
    SearchIcon,
    MoonIcon,
    SunIcon,
    BellIcon,
    MenuIcon,
    OutlinePersonIcon,
    OutlineCogIcon,
    OutlineLogoutIcon,
    //@ts-ignore
} from "../icons";
// import {
//     Avatar,
//     Badge,
//     Input,
//     Dropdown,
//     DropdownItem,
//     WindmillContext,
// } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import response from "../utils/demo/profileData";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
    // const { mode, toggleMode } = useContext(WindmillContext);
    //@ts-ignore
    const { toggleSidebar } = useContext(SidebarContext);
    const navigate = useNavigate();
    const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    function handleNotificationsClick() {
        setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
    }

    function handleProfileClick() {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

    const [darkMode, setDarkMode] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                {/* <!-- Mobile hamburger --> */}
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleSidebar}
                    aria-label="Menu"
                >
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                {/* <!-- Search input --> */}
                <div className="flex justify-center flex-1 lg:mr-32">
                    <div className="relative w-full max-w-xl mr-6  ">
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <Input
                            className="pl-8 border border-gray-200   focus:ring-2 focus:outline-none focus:ring-purple-300 text-gray-700 "
                            placeholder="Search for projects"
                            aria-label="Search"
                        />

                    </div>
                </div>
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    {/* <!-- Theme toggler --> */}
                    <li className="flex">
                        {/* <button
                            className="rounded-md focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleMode}
                            aria-label="Toggle color mode"
                        >
                            {mode === "dark" ? (
                                <SunIcon className="w-5 h-5" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="w-5 h-5" aria-hidden="true" />
                            )}
                        </button> */}

                        <button
                            className="rounded-md focus:outline-none text-sm focus:shadow-outline-purple"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? <SunIcon className="w-5 h-5" aria-hidden="true" /> : <MoonIcon className="w-5 h-5" aria-hidden="true" />}
                        </button>
                    </li>
                    {/* <!-- Notifications menu --> */}
                    <li className="relative">


                        {/* <Dropdown
                            align="right"
                            isOpen={isNotificationsMenuOpen}
                            onClose={() => setIsNotificationsMenuOpen(false)}
                        >
                            <DropdownItem
                                tag="a"
                                href="/app/chats"
                                className="justify-between"
                            >
                                <span>Messages</span>
                                <Badge type="danger">13</Badge>
                            </DropdownItem>
                            <DropdownItem
                                tag="a"
                                href="/app/orders"
                                className="justify-between"
                            >
                                <span>Sales</span>
                                <Badge type="danger">2</Badge>
                            </DropdownItem>
                            <DropdownItem onClick={() => alert("Alerts!")}>
                                <span>Alerts</span>
                            </DropdownItem>
                        </Dropdown> */}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                                    onClick={handleNotificationsClick}
                                    aria-label="Notifications"
                                    aria-haspopup="true"
                                >
                                    <BellIcon className="w-5 h-5" aria-hidden="true" />
                                    {/* <!-- Notification badge --> */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                                    ></span>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Messages</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate("/app/chats")}>
                                        <span>Messages</span>
                                        <DropdownMenuShortcut> <Badge className="bg-red-50 text-red-500">13</Badge></DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/app/chats")}>
                                        Sales
                                        <DropdownMenuShortcut><Badge className="bg-red-50 text-red-500">2</Badge></DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => alert("Alerts!")}>
                                        <span>Alerts</span>

                                    </DropdownMenuItem>

                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    {/* <!-- Profile menu --> */}
                    <li className="relative">

                        {/* <Dropdown
                            align="right"
                            isOpen={isProfileMenuOpen}
                            onClose={() => setIsProfileMenuOpen(false)}
                        >
                            <DropdownItem tag="a" href="/app/manage-profile">
                                <OutlinePersonIcon
                                    className="w-4 h-4 mr-3"
                                    aria-hidden="true"
                                />
                                <span>Profile</span>
                            </DropdownItem>
                            <DropdownItem tag="a" href="/app/settings">
                                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                                <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem onClick={() => alert("Log out!")}>
                                <OutlineLogoutIcon
                                    className="w-4 h-4 mr-3"
                                    aria-hidden="true"
                                />
                                <span>Log out</span>
                            </DropdownItem>
                        </Dropdown> */}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className="rounded-full focus:shadow-outline-purple focus:outline-none border-4 border-purple-200"
                                    onClick={handleProfileClick}
                                    aria-label="Account"
                                    aria-haspopup="true"
                                >
                                    {/* <Avatar
                                className="align-middle"
                                src={response.avatar}
                                alt=""
                                aria-hidden="true"
                            /> */}
                                    <Avatar>
                                        <AvatarImage src={response.avatar} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Messages</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate("/app/manage-profile")}>
                                        <OutlinePersonIcon
                                            className="w-4 h-4 mr-3"
                                            aria-hidden="true"
                                        />
                                        <span>Profile</span>
                                        {/* <DropdownMenuShortcut> <Badge className="bg-red-400">13</Badge></DropdownMenuShortcut> */}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/app/settings")}>
                                        <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                                        <span>Settings</span>
                                        {/* <DropdownMenuShortcut><Badge className="bg-red-400">2</Badge></DropdownMenuShortcut> */}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => alert("Alerts!")}>
                                        <OutlineLogoutIcon
                                            className="w-4 h-4 mr-3"
                                            aria-hidden="true"
                                        />
                                        <span>Alert</span>

                                    </DropdownMenuItem>

                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
