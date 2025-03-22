import React, { useState } from "react";
import PageTitle from "@/Typography/PageTitle";
import { NavLink } from "react-router-dom";
//@ts-ignore
import { HomeIcon } from "../icons";
// import { Card, CardBody, Label, Select } from "@windmill/react-ui";
//@ts-ignore
// import OrdersTable from "../components/OrdersTable";
import OrdersTable from "@/components/OrderTable";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { Select } from "@/components/ui/select";


const Icon = (
    //@ts-ignore
    { icon, ...props }) => {
    const Icon = icon;
    return <Icon {...props} />;
}

const Orders = () => {
    // pagination setup
    const [resultsPerPage, setResultPerPage] = useState(10);
    const [filter, setFilter] = useState("all");

    const handleFilter = (filter_name: String) => {
        // console.log(filter_name);
        if (filter_name == "All") {
            setFilter("all");
        }
        if (filter_name == "Un-Paid Orders") {
            setFilter("un-paid");
        }
        if (filter_name == "Paid Orders") {
            setFilter("paid");
        }
        if (filter_name == "Completed") {
            setFilter("completed");
        }
    };

    return (
        <div>
            <PageTitle>Orders</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-purple-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink to="/app/dashboard" className="mx-2">
                        Dashboard
                    </NavLink>
                </div>
                {">"}
                <p className="mx-2">Orders</p>
            </div>

            {/* Sort */}
            <Card className="mt-5 mb-5 shadow-md">
                <CardContent>
                    <div className="flex items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Filter Orders
                        </p>

                        <Label className="mx-3">
                            <select className="bg-white dark:bg-black  dark:focus:border-purple-500 focus:border-purple-500 border-1 dark:border-gray-500 py-2 rounded-sm px-2"
                                //@ts-ignore
                                onChange={(e: React.MouseEvent<HTMLButtonElement>) => handleFilter(e.target.value)}
                            >
                                <option>All</option>
                                <option>Un-Paid Orders</option>
                                <option>Paid Orders</option>
                                <option>Completed</option>
                            </select>
                        </Label>

                        <Label className="">
                            {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                            <div className="relative text-gray-500  focus-within:text-purple-600  border dark:text-gray-200   border-gray-50  rounded-lg dark:border-gray-500  dark:focus-within:text-purple-400">
                                <input
                                    className="py-2 px-2 dark:bg-black  text-sm text-black border rounded-sm  dark:text-gray-200  focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-purple form-input"
                                    value={resultsPerPage}
                                    onChange={(e) => setResultPerPage(Number(e.target.value))}
                                />

                                <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                    {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                                    Results on Table
                                </div>
                            </div>
                        </Label>
                    </div>
                </CardContent>
            </Card>

            {/* Table */}
            <OrdersTable resultsPerPage={resultsPerPage} filter={filter} />
        </div>
    );
};

export default Orders;
