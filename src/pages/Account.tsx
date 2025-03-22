import * as React from 'react';
import AccountDetailsForm from '@/components/Account/AccountDetailsForm';
import { AccountInfo } from '@/components/Account/AccountInfo';


export default function Account(): React.JSX.Element {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="text-2xl font-semibold">Account</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                    <AccountInfo />
                </div>
                <div className="md:col-span-1">
                    <AccountDetailsForm />
                </div>
            </div>
        </div>
    );
}