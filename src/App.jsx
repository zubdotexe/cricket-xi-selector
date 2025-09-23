import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import { useState } from "react";

const res = await fetch("/playersData.json");
const playersJson = await res.json();

function App() {
    const [availablePlayers, setAvailablePlayers] = useState(true);
    console.log(availablePlayers);
    return (
        <>
            <header className="space-y-6">
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className="max-w-[1320px] mx-auto mt-24 space-y-9">
                <div className="flex justify-between">
                    <h2 className="font-bold text-2xl">Available Players</h2>
                    <div className="flex items-center rounded-2xl overflow-hidden border border-gray-300">
                        <p
                            onClick={() => setAvailablePlayers(true)}
                            className={`${
                                availablePlayers ?
                                "bg-[#E7FE29] font-bold text-black" : "text-gray-500 font-semibold"
                            } px-6 py-3 cursor-pointer`}
                        >
                            Available
                        </p>
                        <p
                            onClick={() => setAvailablePlayers(false)}
                            className={`${
                                !availablePlayers ?
                                "bg-[#E7FE29] font-bold text-black" : "text-gray-500 font-semibold"
                            } px-6 py-3 cursor-pointer`}
                        >
                            Selected (<span>0</span>)
                        </p>
                    </div>
                </div>
                {availablePlayers ? (
                    <AvailablePlayers
                        playersJson={playersJson}
                    ></AvailablePlayers>
                ) : (
                    <h3>Selected Players</h3>
                )}
                {/* <h3>Selected Players</h3> */}
            </main>
        </>
    );
}

export default App;
