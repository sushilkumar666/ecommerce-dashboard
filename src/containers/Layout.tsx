// import React, { useContext, Suspense, useEffect, lazy } from 'react'
// import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
// import routes from '../routes'

// import Sidebar from '../components/Sidebar'
// import Header from '../components/Header'
// import Main from '../containers/Main'
// import ThemedSuspense from '../components/ThemedSuspense'
// import { SidebarContext } from '../context/SidebarContext'

// const Page404 = lazy(() => import('../pages/404'))

// function Layout() {
//   const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
//   let location = useLocation()

//   useEffect(() => {
//     closeSidebar()
//   }, [location])

//   return (
//     <div
//       className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
//     >
//       <Sidebar />

//       <div className="flex flex-col flex-1 w-full">
//         <Header />
//         <Main>
//           <Suspense fallback={<ThemedSuspense />}>
//             <Switch>
//               {routes.map((route, i) => {
//                 return route.component ? (
//                   <Route
//                     key={i}
//                     path={`/app${route.path}`}
//                     render={(props) => <route.component {...props} />}
//                   />
//                 ) : null
//               })}
//               <Redirect exact from="/app" to="/app/dashboard" />
//               <Route component={Page404} />
//             </Switch>
//           </Suspense>
//         </Main>
//       </div>
//     </div>
//   )
// }

// export default Layout



import React from 'react'
import Header from '../components/Header';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom'
import { SidebarContext, useSidebar } from '@/context/SidebarContext';
import { useContext } from 'react';

interface SidebarContextType {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
}

function Layout() {
    const { isSidebarOpen, closeSidebar } = useSidebar();
    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900  ${isSidebarOpen && 'overflow-hidden'}`}>
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Header />
                <div className="h-full overflow-y-auto">
                    <div className="container grid px-6 mx-auto"><Outlet /></div>
                </div>

            </div>
        </div>
    )
}

export default Layout
