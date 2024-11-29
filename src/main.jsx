import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/layout/nav";
import AppRoutes from "./routes";
import { Item } from "./style";
import { MyGlobalStyles } from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <MyGlobalStyles />
      <Nav />
      <Item>
        <AppRoutes />
      </Item>
    </Router>
  </StrictMode>
);
