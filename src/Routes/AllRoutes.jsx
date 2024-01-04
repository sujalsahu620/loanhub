import { Route, Routes } from "react-router-dom"
import {HomePage} from "../Pages/HomePage"
import { LoanPage } from "../Pages/LoanPage"
import { CompanyPage } from "../Pages/CompanyPage"
import { LoginPage } from "../Pages/LoginPage"
import { PaymentPage } from "../Pages/PaymentPage"
import { SupportPage } from "../Pages/SupportPage"
import { DetailsPage } from "../Pages/DetailsPage"
import { PrivateRoute } from "./privateRoute";
import { PartnerPage } from "../Pages/PartnerPage"
export const  AllRoutes = () => {
    return (
     <Routes>
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/company" element={<CompanyPage />}/>
        <Route path="/support" element={<SupportPage />}/>
        <Route path="/partners" element={<PartnerPage/>}/>
        <Route path="/loan" element={
            <PrivateRoute>
            <LoanPage />
          </PrivateRoute>
        }/>
        <Route path="/payment" element={
            <PrivateRoute>
            <PaymentPage />
            </PrivateRoute>
        }/>
        <Route path="/details" element={
            <PrivateRoute>
            <DetailsPage />
            </PrivateRoute>
        }/>
     </Routes>
    );
};