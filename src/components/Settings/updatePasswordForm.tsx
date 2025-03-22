'use client';

import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function UpdatePasswordForm(): React.JSX.Element {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <Card className="max-w-sm">
                {/* Header */}
                <CardHeader>
                    <h2 className="text-xl font-semibold">Password</h2>
                    <p className="text-sm text-gray-500">Update password</p>
                </CardHeader>

                {/* Content */}
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" placeholder="Enter new password" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm new password" />
                    </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex justify-end">
                    <Button className='bg-purple-700 hover:bg-purple-800 text-white' type="submit">Update</Button>
                </CardFooter>
            </Card>
        </form>
    );
}
