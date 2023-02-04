import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/mainRoute";

function App() {
  return (
    <main className="font-poppins ">
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
