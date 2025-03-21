import React, { useState, useMemo, ReactNode, createContext } from "react";

// Define the context type
interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
}

// Create context with default values
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Define the props for the provider
interface SidebarProviderProps {
    children: ReactNode;
}

// interface ThemeContextType {
//     mode: Theme;
//     toggleMode: () => void;
// }

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    const value = useMemo(
        () => ({
            isSidebarOpen,
            toggleSidebar,
            closeSidebar,
        }),
        [isSidebarOpen]
    );

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};


