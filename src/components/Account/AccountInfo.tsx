import * as React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const user = {
    name: 'Sofia Rivers',
    avatar: '/assets/avatar.png',
    jobTitle: 'Senior Developer',
    country: 'USA',
    city: 'Los Angeles',
    timezone: 'GTM-7',
} as const;

export function AccountInfo(): React.JSX.Element {
    return (
        <Card className="w-full p-4">
            <CardContent className="flex flex-col items-center gap-3">
                {/* Avatar */}
                <Avatar className="h-20 w-20">
                    <AvatarImage src={user.avatar} alt="Sofia Rivers" />
                    <AvatarFallback>SR</AvatarFallback>
                </Avatar>

                {/* User Details */}
                <div className="text-center space-y-1">
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.city}, {user.country}</p>
                    <p className="text-sm text-gray-500">{user.timezone}</p>
                </div>
            </CardContent>

            {/* Upload Button */}
            <CardFooter>
                <Button className="w-full" variant="outline">
                    Upload picture
                </Button>
            </CardFooter>
        </Card>
    );
}
