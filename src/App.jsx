import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import MainLayout from "./layouts/MainLayout";
import Students from "./pages/Students";
import ClassSettings from "./pages/ClassSettings";
import Games from "./pages/Games";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ClassSettings />} />
      <Route path="my-students" element={<Students />} />
      <Route path="my-games" element={<Games />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
