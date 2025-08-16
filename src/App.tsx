import Layout from "./components/common/Layout";
import { Outlet } from "react-router-dom";
import { useTokenInitializer } from "./hooks/tokens/useTokenInitializer";

function App() {
    // Initialize tokens when the app starts
    useTokenInitializer();

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default App;
