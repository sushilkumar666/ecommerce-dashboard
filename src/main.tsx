import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Orders from './pages/Orders.tsx'
import ProductsAll from './pages/ProductsAll.tsx'
import AddProduct from './pages/AddProduct.tsx'
import SingleProduct from './pages/SingleProduct.tsx'
import Customers from './pages/Customers.tsx'
import Chats from './pages/Chats.tsx'
import Profile from './pages/Profile.tsx'
import Settings from './pages/Settings.tsx'
import Page404 from './pages/404.tsx'
import Blank from './pages/Blank.tsx'
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from './components/ThemeSuspense';
import { ThemeProvider } from './context/ThemeContext.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard />} />
      <Route path='app/dashboard' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='CreateAccount' element={<CreateAccount />} />
      <Route path='ForgotPassword' element={<ForgotPassword />} />
      <Route path='app/orders' element={<Orders />} />
      <Route path='app/all-products' element={<ProductsAll />} />
      <Route path='app/add-product' element={<AddProduct />} />
      <Route path='app/product/:id' element={<SingleProduct />} />
      <Route path='app/customers' element={<Customers />} />
      <Route path='app/chats' element={<Chats />} />
      <Route path='app/manage-profile' element={<Profile />} />
      <Route path='app/settings' element={<Settings />} />
      <Route path='blank' element={<Blank />} />
      <Route path='404' element={<Page404 />} />
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<ThemedSuspense />}>
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  </Suspense>
)

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