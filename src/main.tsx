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
import Account from './pages/Account.tsx'

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
      <Route path='app/manage-profile' element={<Account />} />
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

