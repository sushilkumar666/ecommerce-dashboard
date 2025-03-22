import React, { useState, useEffect } from "react";
// import {
//     TableBody,
//     TableContainer,
//     Table,
//     TableHeader,
//     TableCell,
//     TableRow,
//     TableFooter,
//     Avatar,
//     Badge,
//     Pagination,
// } from "@windmill/react-ui";
import response from "../utils/demo/orderData";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Badge } from "./ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


interface OrderTableProps {
    resultsPerPage: number,
    filter: string,
}


interface OrderType {
    avatar: string,
    name: string,
    amount: number,
    status: string,
    date: string
}


const OrdersTable: React.FC<OrderTableProps> = ({ resultsPerPage, filter }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<OrderType[]>([]);

    // pagination setup
    const totalResults = response.length;

    // pagination change control
    //@ts-ignore
    function onPageChange(p) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        // If Filters Applied
        if (filter === "paid") {
            setData(
                response
                    .filter((order) => order.status === "Paid")
                    .slice((page - 1) * resultsPerPage, page * resultsPerPage)
            );
        }
        if (filter === "un-paid") {
            setData(
                response
                    .filter((order) => order.status === "Un-paid")
                    .slice((page - 1) * resultsPerPage, page * resultsPerPage)
            );
        }
        if (filter === "completed") {
            setData(
                response
                    .filter((order) => order.status === "Completed")
                    .slice((page - 1) * resultsPerPage, page * resultsPerPage)
            );
        }

        // if filters dosent applied
        if (filter === "all" || !filter) {
            setData(
                response.slice((page - 1) * resultsPerPage, page * resultsPerPage)
            );
        }
    }, [page, resultsPerPage, filter]);

    return (
        <>
            {/* Table */}

            <Table className="mb-8 bg-white dark:bg-black">
                <TableHeader>
                    <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-center text-sm">
                                    {/* <Avatar
                                            className="hidden mr-3 md:block"
                                            src={user.avatar}
                                            alt="User image"
                                        /> */}
                                    <Avatar>
                                        <AvatarImage

                                            src={user.avatar} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold ml-3">{user.name}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">#000{i}</span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">$ {user.amount}</span>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    className={`${user.status === "Un-paid"
                                        ? "bg-red-100 text-red-800"
                                        : user.status === "Paid"
                                            ? "bg-green-100 text-green-800"
                                            : user.status === "Completed"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-blue-100 text-blue-800"}`}

                                >
                                    {user.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">
                                    {new Date(user.date).toLocaleDateString()}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
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





        </>
    );
};

export default OrdersTable;
