import React, { ReactNode } from 'react'

interface ChartProps {
    children: ReactNode;
    title: string;
}
const Chart: React.FC<ChartProps> = ({ children, title }) => {
    return (
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">{title}</p>
            {children}
        </div>
    )
}

export default Chart
