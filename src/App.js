import Topbar from "./Layouts/Topbar/Topbar";
import Leftbar from "./Layouts/Leftbar/Leftbar";
import Main from "./Layouts/Main/Main";
import { Grid, ThemeProvider  } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";

import AssignmentPage from "./Pages/AssignmentPage/AssignmentPage";
import { theme } from "./Assets/Styles/theme";

import AssetPage from "./Pages/AssetPage/AssetPage";
import PrivateRoute from './Routes/PrivateRoute'
function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">

<ThemeProvider theme={theme}>
      <Topbar />

      <Grid container>
        <Grid item xs={3}>
          <Leftbar />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            backgroundColor: "#d3d3d3",
          }}
        >
          <Main />
         
          <Routes>
         
         
          <Route element={<PrivateRoute />}>
            
           <Route path="/asset-list" element={<AssetPage />} />
            <Route path="/assignment-list" element={<AssignmentPage />} />
           
          </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Grid>
        
      </Grid>
      </ThemeProvider>
    </div>
  )
}

export default App