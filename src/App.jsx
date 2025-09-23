import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";

function App() {
    return (
        <>
            <header className="space-y-6">
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
        </>
    );
}

export default App;
