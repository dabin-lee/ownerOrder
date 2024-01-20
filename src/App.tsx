import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MenuIndex from "./pages/menu-index";
import GnbLayout from "./layouts/Gnb.layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hi</div>,
  },
  {
    path: "/menu-index",
    element: <MenuIndex></MenuIndex>,
  },
]);

function App() {
  return (
    <>
      {/* <GnbLayout></GnbLayout> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
