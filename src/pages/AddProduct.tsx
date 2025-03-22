import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../components/Icon";
import PageTitle from "@/Typography/PageTitle";
//@ts-ignore
import { HomeIcon, AddIcon, PublishIcon, StoreIcon } from "../icons";
// import {
//     Card,
//     CardBody,
//     Label,
//     Input,
//     Textarea,
//     Button,
//     Select,
// } from "@windmill/react-ui";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface FormTitleProps {
    children: ReactNode
}

const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
    return (
        <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
            {children}
        </h2>
    );
};

const AddProduct = () => {
    return (
        <div>
            <PageTitle>Add New Product</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-purple-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink to="/app/dashboard" className="mx-2">
                        Dashboard
                    </NavLink>
                </div>
                {">"}
                <p className="mx-2">Add new Product</p>
            </div>

            <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
                <Card className="row-span-2 md:col-span-2">
                    <CardContent>
                        <FormTitle>Product Image</FormTitle>
                        <input
                            type="file"
                            className="mb-4 text-gray-800 dark:text-gray-300"
                        />

                        <FormTitle>Product Name</FormTitle>
                        <Label>
                            <Input className="mb-4" placeholder="Type product name here" />
                        </Label>

                        <FormTitle>Product Price</FormTitle>
                        <Label>
                            <Input className="mb-4" placeholder="Enter product price here" />
                        </Label>

                        <FormTitle>Short description</FormTitle>
                        <Label>
                            <Textarea
                                className="mb-4"
                                rows={3}
                                placeholder="Enter product short description here"
                            />
                        </Label>

                        <FormTitle>Stock Qunatity</FormTitle>
                        <Label>
                            <Input
                                className="mb-4"
                                placeholder="Enter product stock quantity"
                            />
                        </Label>

                        <FormTitle>Full description</FormTitle>
                        <Label>
                            <Textarea
                                className="mb-4"
                                rows={5}
                                placeholder="Enter product full description here"
                            />
                        </Label>

                        <div className="w-full">
                            <Button size="lg" >
                                <AddIcon />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="h-48">
                    <CardContent>
                        <div className="flex mb-8">
                            <Button className="mr-3 bg-blue-500" >
                                <PublishIcon />  Publish
                            </Button>
                            <Button variant="link" >
                                <StoreIcon />  Save as Draft
                            </Button>
                        </div>
                        <Label className="mt-4">
                            <FormTitle>Select Product Category</FormTitle>
                            {/* <Select className="mt-1">
                                <option>Electronic</option>
                                <option>Fashion</option>
                                <option>Cosmatics</option>
                                <option>Food and Meal</option>
                            </Select> */}
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        <SelectItem value="Electronic">Electronic</SelectItem>
                                        <SelectItem value="Fashion">Fashion</SelectItem>
                                        <SelectItem value="Cosmatics">Cosmatics</SelectItem>
                                        <SelectItem value="Food and Meal">Food and Meal</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Label>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddProduct;
