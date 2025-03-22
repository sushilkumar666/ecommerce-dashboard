import React, { useState, useEffect } from "react";
// import PageTitle from "../components/Typography/PageTitle";
import PageTitle from "@/Typography/PageTitle";
import { Link, NavLink } from "react-router-dom";
import {
    EditIcon,
    EyeIcon,
    GridViewIcon,
    HomeIcon,
    ListViewIcon,
    TrashIcon,
    //@ts-ignore
} from "../icons";
// import {
//   Card,
//   CardBody,
//   Label,
//   Select,
//   Button,
//   TableBody,
//   TableContainer,
//   Table,
//   TableHeader,
//   TableCell,
//   TableRow,
//   TableFooter,
//   Avatar,
//   Badge,
//   Pagination,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from "@windmill/react-ui";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"




import response from "../utils/demo/productData";
import Icon from "../components/Icon";
import { genRating } from "../utils/genarateRating";

interface ResponseType {
    id: number;
    photo: string;
    name: string;
    shortDescription: string;
    featureDescription: string;
    londDescription: string;
    price: string;
    qty: number;
    rating: number;
    reviews: {
        username: string;
        avatar_url: string;
        review: string;
        rate: number
    }[]
}

const ProductsAll = () => {
    const [view, setView] = useState("grid");

    // Table and grid data handlling
    const [page, setPage] = useState(1);
    const [data, setData] = useState<ResponseType[]>([]);

    // pagination setup
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const totalResults = response.length;

    // pagination change control
    function onPageChange(p: number) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        const data: any = response.slice((page - 1) * resultsPerPage, page * resultsPerPage)
        setData(data);
    }, [page, resultsPerPage]);

    // Delete action model
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState<ResponseType | null>(null);
    async function openModal(productId: number) {
        let product = await data.filter((product) => product.id === productId)[0];
        // console.log(product);
        setSelectedDeleteProduct(product);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    // Handle list view
    const handleChangeView = () => {
        if (view === "list") {
            setView("grid");
        }
        if (view === "grid") {
            setView("list");
        }
    };

    return (
        <div>
            <PageTitle>All Products</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-purple-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink to="/app/dashboard" className="mx-2">
                        Dashboard
                    </NavLink>
                </div>
                {">"}
                <p className="mx-2">All Products</p>
            </div>

            {/* Sort */}
            <Card className="mt-5 mb-5 shadow-md">
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                All Products
                            </p>

                            <Label className="mx-3">
                                {/* <Select className="py-3">
                  <option>Sort by</option>
                  <option>Asc</option>
                  <option>Desc</option>
                </Select> */}
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sort" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Sort</SelectLabel>
                                            <SelectItem value="Asc">Asc</SelectItem>
                                            <SelectItem value="Desc">Desc</SelectItem>

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </Label>

                            <Label className="mx-3">
                                {/* <Select className="py-3">
                                    <option>Filter by Category</option>
                                    <option>Electronics</option>
                                    <option>Cloths</option>
                                    <option>Mobile Accerssories</option>
                                </Select> */}

                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sort" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Filter by Category</SelectLabel>
                                            <SelectItem value="Electronics">Electronics</SelectItem>
                                            <SelectItem value="Cloths">Cloths</SelectItem>
                                            <SelectItem value="Mobile Accerssories">Mobile Accerssories</SelectItem>

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </Label>

                            <Label className="mr-8 ">
                                {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                                    <input
                                        className="py-3 px-4 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                        placeholder="Number of Results"
                                        value={resultsPerPage}
                                        onChange={(e) => setResultsPerPage(Number(e.target.value))}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                        {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                                        Results on {`${view}`}
                                    </div>
                                </div>
                            </Label>
                        </div>
                        <div className="">
                            <Button className="bg-[#7e3af2] hover:bg-[#7e3af2] hover:border-gray-500  dark:text-white"
                                // icon={view === "list" ? ListViewIcon : GridViewIcon}

                                onClick={handleChangeView}
                            >
                                {view === "list" ? <ListViewIcon /> : <GridViewIcon />}

                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>


            {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader className="flex items-center">
                   
                    <Icon icon={TrashIcon} className="w-6 h-6 mr-3" />
                    Delete Product
                     
                </ModalHeader>
                <ModalBody>
                    Make sure you want to delete product{" "}
                    {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`}
                </ModalBody>
                <ModalFooter>
                     
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button>Delete</Button>
                    </div>
                    <div className="block w-full sm:hidden">
                        <Button block size="large" layout="outline" onClick={closeModal}>
                            Cancel
                        </Button>
                    </div>
                    <div className="block w-full sm:hidden">
                        <Button block size="large">
                            Delete
                        </Button>
                    </div>
                </ModalFooter>
            </Modal> */}


            {/* Product Views */}
            {view === "list" ? (
                <>

                    <Table className="mb-8">
                        <TableHeader>
                            <TableHead>
                                <TableCell>Name</TableCell>
                                <TableCell>Stock</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>QTY</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Action</TableCell>
                            </TableHead>
                        </TableHeader>
                        <TableBody>
                            {data.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            {/* <Avatar
                                                className="hidden mr-4 md:block"
                                                src={product.photo}
                                                alt="Product image"
                                            /> */}
                                            <Avatar>
                                                <AvatarImage src={product.photo} alt="productImage" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{product.name}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={product.qty > 0 ? "success" : "danger"}>
                                            {product.qty > 0 ? "In Stock" : "Out of Stock"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        {genRating(product.rating, product.reviews.length, 5)}
                                    </TableCell>
                                    <TableCell className="text-sm">{product.qty}</TableCell>
                                    <TableCell className="text-sm">{product.price}</TableCell>
                                    <TableCell>
                                        <div className="flex">
                                            <Link to={`/app/product/${product.id}`}>
                                                <Button

                                                    className="mr-3"

                                                ><EyeIcon /> Preview</Button>
                                            </Link>
                                            <Button

                                                className="mr-3"
                                                variant="outline"

                                            >
                                                <EditIcon />  Edit</Button>
                                            <TrashIcon /> <Button

                                                variant="outline"
                                                onClick={() => openModal(product.id)}

                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {/* <TableFooter>
                        <Pagination
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                label="Table navigation"
                                onChange={onPageChange}
                            />

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



                </>
            ) : (
                <>
                    {/* Car list */}
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
                        {data.map((product) => (
                            <div className="" key={product.id}>
                                <Card className="py-0 pb-4">
                                    <img
                                        className="object-cover w-full"
                                        src={product.photo}
                                        alt="product"
                                    />
                                    <CardContent >
                                        <div className="mb-3 flex items-center justify-between">
                                            <p className="font-semibold truncate  text-gray-600 dark:text-gray-300">
                                                {product.name}
                                            </p>
                                            <Badge

                                                className={product.qty > 0 ? "bg-green-50 whitespace-nowrap text-green-500 dark:text-white dark:bg-green-700" : "bg-red-50 dark:text-white dark:bg-red-500 text-red-500   whitespace-nowrap"}
                                            >
                                                <p className="break-normal ">
                                                    {product.qty > 0 ? `In Stock` : "Out of Stock"}
                                                </p>
                                            </Badge>
                                        </div>

                                        <p className="mb-2 text-purple-500 font-bold text-lg">
                                            {product.price}
                                        </p>

                                        <p className="mb-8 text-gray-600 dark:text-gray-400">
                                            {product.shortDescription}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Link to={`/app/product/${product.id}`}>
                                                    <Button

                                                        className="mr-3 bg-[#7e3af2]"

                                                        size="sm"
                                                    ><EyeIcon /></Button>
                                                </Link>
                                            </div>
                                            <div>
                                                <Button

                                                    className="mr-3"
                                                    variant="outline"

                                                    size="sm"
                                                ><EditIcon /> </Button>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline"><TrashIcon /></Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <Icon icon={TrashIcon} className="w-6 h-6 mr-3" />
                                                            Delete Product

                                                            <AlertDialogDescription>
                                                                Make sure you want to delete product{" "}
                                                                {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`}
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction>Continue</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

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
            )}
        </div>
    );
};

export default ProductsAll;
