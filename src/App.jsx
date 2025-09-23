import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";

const res = await fetch("/playersData.json");
const playersJson = await res.json();
console.log(playersJson);

function App() {
    return (
        <>
            <header className="space-y-6">
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className="max-w-[1320px] mx-auto mt-24 space-y-9">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Available Players</h2>
                    <div className="flex items-center rounded-2xl overflow-hidden border-1 border-gray-300">
                        <p className="bg-[#E7FE29] font-bold px-6 py-3 cursor-pointer">Available</p>
                        <p className="text-gray-400 px-6 py-3 cursor-pointer">
                            Selected (<span>0</span>)
                        </p>
                    </div>
                </div>
                <AvailablePlayers playersJson={playersJson}></AvailablePlayers>
            </main>
        </>
    );
}

export default App;
