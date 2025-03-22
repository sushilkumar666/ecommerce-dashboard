'use client';

import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function Notifications(): React.JSX.Element {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <Card>
                {/* Header */}
                <CardHeader>
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    <p className="text-sm text-gray-500">Manage the notifications</p>
                </CardHeader>

                {/* Content */}
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Notifications */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Email</h3>
                        <div className="space-y-1">
                            <label className="flex items-center space-x-2">
                                <Checkbox defaultChecked />
                                <span>Product updates</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Checkbox />
                                <span>Security updates</span>
                            </label>
                        </div>
                    </div>

                    {/* Phone Notifications */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Phone</h3>
                        <div className="space-y-1">
                            <label className="flex items-center space-x-2">
                                <Checkbox defaultChecked />
                                <span>Email</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Checkbox />
                                <span>Security updates</span>
                            </label>
                        </div>
                    </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex justify-end">
                    <Button className='bg-purple-700 hover:bg-purple-800 text-white' type="submit">Save changes</Button>
                </CardFooter>
            </Card>
        </form>
    );
}
