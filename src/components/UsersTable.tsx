import React, { useState, useEffect } from "react";
import response from "../utils/demo/usersData";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "./ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface UserTableProps {
    resultsPerPage: number;
    filter: string;
}

interface UserType {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    joined_on: string;
    state: boolean;
    messages: { flag: string; text: string }[] | null;
}

const UsersTable: React.FC<UserTableProps> = ({ resultsPerPage, filter }) => {
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<UserType[]>([]);

    const totalResults = response.length;

    const onPageChange = (p: number) => {
        setPage(p);
    };

    useEffect(() => {
        const slicedData: UserType[] = response.slice(
            (page - 1) * resultsPerPage,
            page * resultsPerPage
        );
        setData(slicedData);
    }, [page, resultsPerPage, filter]);

    return (
        <div>
            <Table className="mb-8 bg-white dark:bg-black">
                <TableHeader>
                    <TableRow>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Joined on</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-center text-sm">
                                    <Avatar>
                                        <AvatarImage src={user.avatar} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold ml-3">{user.first_name}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">{user.last_name}</span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">{user.email}</span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">
                                    {new Date(user.joined_on).toLocaleDateString()}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <TableFooter>

            </TableFooter> */}

            <TableFooter className=" flex justify-center">
                <TableRow >
                    <TableCell colSpan={100} className="text-center ">
                        <Pagination>
                            <PaginationContent>
                                {/* Previous Button */}
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                        className={page === 1 ? "pointer-events-none opacity-50" : ""}
                                    />
                                </PaginationItem>

                                {/* Dynamic Page Numbers */}
                                {Array.from({ length: Math.ceil(totalResults / resultsPerPage) }, (_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            href="#"
                                            isActive={page === i + 1}
                                            onClick={() => setPage(i + 1)}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                {/* Next Button */}
                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(totalResults / resultsPerPage)))}
                                        className={page === Math.ceil(totalResults / resultsPerPage) ? "pointer-events-none opacity-50" : ""}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </div>

    );
};

export default UsersTable;
