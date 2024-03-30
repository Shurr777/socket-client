import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Chat from "../Chat/Chat";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;