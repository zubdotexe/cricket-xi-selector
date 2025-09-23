import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { useState } from "react";

const fetchPlayers = async () => {
    const res = await fetch("/playersData.json");
    return res.json();
};
const playersPromise = fetchPlayers();

function App() {
    const [availablePlayers, setAvailablePlayers] = useState(true);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const addSelectedPlayer = (player) => {
        console.log(player)
        const updatedSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(updatedSelectedPlayers);
    };
    
    const removeSelectedPlayer = (player) => {
        console.log(player)
        const updatedSelectedPlayers = selectedPlayers.filter(selected_player => selected_player.player_name !== player.player_name)
        setSelectedPlayers(updatedSelectedPlayers);
    };

    return (
        <>
            <header className="space-y-6">
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className="max-w-[1320px] mx-auto mt-24">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-bold text-2xl">{availablePlayers ? "Available Players" : `Selected Players ${selectedPlayers.length}/6`}</h2>
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
                            Selected (<span>{selectedPlayers.length}</span>)
                        </p>
                    </div>
                </div>
                {availablePlayers ? (
                    <AvailablePlayers
                        playersPromise={playersPromise}
                        addSelectedPlayer={addSelectedPlayer}
                        removeSelectedPlayer={removeSelectedPlayer}
                    ></AvailablePlayers>
                ) : (
                    <SelectedPlayers selectedPlayers={selectedPlayers} removeSelectedPlayer={removeSelectedPlayer}></SelectedPlayers>
                )}
            </main>
        </>
    );
}

export default App;
