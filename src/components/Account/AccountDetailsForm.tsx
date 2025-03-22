'use client';

// import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const states = [
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
];

export default function AccountDetailsForm() {
    const [formData, setFormData] = useState({
        firstName: "Sushilkumar",
        lastName: "Sharma",
        email: "sushilssharma064@gmail.com",
        phone: "724941XXXXX",
        state: "Maharashtra",
        city: "Mumbai",
    });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <Card className="w-full p-6">
                <CardHeader>
                    <h3 className="text-lg font-semibold">Profile</h3>
                    <p className="text-sm text-gray-500">The information can be edited</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                required
                            />
                        </div>
                        {/* Last Name */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        {/* State */}
                        <div className="flex flex-col gap-2">
                            <Label>State</Label>
                            <Select
                                value={formData.state}
                                onValueChange={(value) => setFormData({ ...formData, state: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a state" />
                                </SelectTrigger>
                                <SelectContent>
                                    {states.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {/* City */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button className='hover:bg-purple-800 text-white bg-purple-700' type="submit">Save details</Button>
                </CardFooter>
            </Card>
        </form>
    );
}
