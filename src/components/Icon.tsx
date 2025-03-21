import React, { ComponentType } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    icon: ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, ...props }) => {
    return <IconComponent {...props} />;
};

export default Icon;
