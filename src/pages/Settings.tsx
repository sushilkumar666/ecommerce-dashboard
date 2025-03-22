import * as React from 'react';

import { Notifications } from '@/components/Settings/Notifications';
import { UpdatePasswordForm } from '@/components/Settings/updatePasswordForm';


export default function Page(): React.JSX.Element {
    return (
        <div className="space-y-6">
            {/* Title */}
            <h2 className="text-2xl font-bold">Settings</h2>

            {/* Sections */}
            <Notifications />
            <UpdatePasswordForm />
        </div>
    );
}
