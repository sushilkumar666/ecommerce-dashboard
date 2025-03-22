import { useContext } from 'react'

import SidebarContent from './SidebarContent'
// import { Transition, Backdrop } from '@windmill/react-ui'
import Transition from '../Transition';
import { SidebarContext } from '../../context/SidebarContext'

function MobileSidebar() {

    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }

    const { isSidebarOpen, closeSidebar } = context;

    return (
        <Transition show={isSidebarOpen}>
            <>
                <Transition
                    show={true}
                >
                    <div onClick={closeSidebar} />
                </Transition>

                <Transition
                    show={true}
                >
                    <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden">
                        <SidebarContent />
                    </aside>
                </Transition>
            </>
        </Transition>
    )
}

export default MobileSidebar
