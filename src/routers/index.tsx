import React from "react";
import AppshellLayout from "@/layouts/appShell";
import ProtectedLayout from "@/layouts/protected";
import AuthLayout from "@/layouts/auth";

import { Routes, Route } from "react-router-dom";
import {
  PageCall,
  PageConnection,
} from "./lazy";
import { ROUTER } from "@/constants/router";



const AppRouter: React.FC = () => {



    return (
        <Routes>
            <Route element={<AuthLayout />}>
                
            </Route>
            <Route element={<ProtectedLayout />}>
                <Route element={<AppshellLayout />}>
                    <Route path={ROUTER.CONNECTION.href} element={<PageConnection />} />
                    <Route path={ROUTER.CALL.href} element={<PageCall />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter;