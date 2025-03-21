import React, { useState, useEffect } from "react";
import response from "../utils/demo/usersData";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
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
    PaginationEllipsis,
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
            <Table className="mb-8">
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
                                        <p className="font-semibold">{user.first_name}</p>
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
            <TableFooter>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </TableFooter>
        </div>
    );
};

export default UsersTable;
