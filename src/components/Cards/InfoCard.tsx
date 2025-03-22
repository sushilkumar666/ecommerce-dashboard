import React, { ReactNode } from 'react'

import { Card, CardContent } from '@/components/ui/card'

interface InforCardProps {
  title: string;
  value: string | number;
  children?: ReactNode;
}

const InfoCard: React.FC<InforCardProps> = ({ title, value, children: icon }) => {
  return (
    <Card>
      <CardContent className="flex items-center h-fit">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default InfoCard
