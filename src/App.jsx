import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import logoFooter from "./assets/logo-footer.png";
import subBtnBg from "./assets/subBtnBg.png";
import bgShadow from "./assets/bg-shadow.png";

const fetchPlayers = async () => {
    const res = await fetch("/playersData.json");
    return res.json();
};
const playersPromise = fetchPlayers();

function App() {
    const [availablePlayers, setAvailablePlayers] = useState(true);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [availableBalance, setAvailableBalance] = useState(1000000);

    const addSelectedPlayer = (player) => {
        // console.log(player);
        const updatedSelectedPlayers = [...selectedPlayers, player];

        setAvailableBalance(availableBalance - player.price);
        setSelectedPlayers(updatedSelectedPlayers);
    };

    const removeSelectedPlayer = (player) => {
        console.log(player);
        const updatedSelectedPlayers = selectedPlayers.filter(
            (selected_player) =>
                selected_player.player_name !== player.player_name
        );
        setSelectedPlayers(updatedSelectedPlayers);
    };

    return (
        <>
            <header className="space-y-6">
                <Navbar availableBalance={availableBalance}></Navbar>
                <Banner></Banner>
            </header>
            <main className="max-w-[1320px] mx-auto mt-24 mb-72 px-4">
                <div className="flex flex-wrap justify-between items-center mb-8">
                    <h2 className="font-bold text-2xl">
                        {availablePlayers
                            ? "Available Players"
                            : `Selected Players ${selectedPlayers.length}/6`}
                    </h2>
                    <div className="flex items-center rounded-2xl overflow-hidden border border-gray-300">
                        <p
                            onClick={() => setAvailablePlayers(true)}
                            className={`${
                                availablePlayers
                                    ? "bg-[#E7FE29] font-bold text-black"
                                    : "text-gray-500 font-semibold"
                            } px-6 py-3 cursor-pointer`}
                        >
                            Available
                        </p>
                        <p
                            onClick={() => setAvailablePlayers(false)}
                            className={`${
                                !availablePlayers
                                    ? "bg-[#E7FE29] font-bold text-black"
                                    : "text-gray-500 font-semibold"
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
                        selectedPlayers={selectedPlayers}
                        availableBalance={availableBalance}
                    ></AvailablePlayers>
                ) : (
                    <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        removeSelectedPlayer={removeSelectedPlayer}
                        setAvailablePlayers={setAvailablePlayers}
                    ></SelectedPlayers>
                )}
                {/* <section className="relative h-64 mt-24">
                    <div className="z-10 absolute -bottom-1/2 w-full bg-white rounded-3xl overflow-hidden outline outline-white outline-offset-12">
                        <div
                            style={{ backgroundImage: `url(${bgShadow})` }}
                            className="bg-cover bg-center px-2 py-20 flex flex-col items-center gap-4"
                        >
                            <h2 className="font-bold text-3xl">
                                Subscribe to our Newsletter
                            </h2>
                            <p className="font-inter font-medium text-xl text-gray-400">
                                Get the latest update and news right in your
                                inbox!
                            </p>
                            <div className="flex gap-2 w-full justify-center">
                                <input
                                    className="w-1/3 py-3 pl-3 rounded-xl border border-gray-300"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <button className="rounded-xl bg-[#E7FE29] px-7 py-3 text-black font-semibold cursor-pointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <footer className="bg-[#06091A] relative pt-64 md:pt-48 px-4">
                <div className="absolute -top-40 max-w-[1320px] left-4 right-4 mx-auto bg-white rounded-3xl overflow-hidden outline outline-white outline-offset-12">
                    <div
                        style={{ backgroundImage: `url(${bgShadow})` }}
                        className="bg-cover bg-center px-2 py-20 flex flex-col items-center gap-4"
                    >
                        <h2 className="font-bold text-3xl">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="font-inter font-medium text-xl text-gray-400">
                            Get the latest update and news right in your inbox!
                        </p>
                        <div className="flex gap-2 w-full justify-center">
                            <input
                                className="w-1/3 py-3 pl-3 rounded-xl border border-gray-300"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <button className="rounded-xl bg-[#E7FE29] px-7 py-3 text-black font-semibold cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1320px] mx-auto space-y-16">
                    <div className="flex justify-center">
                        <img src={logoFooter} alt="Logo" />
                    </div>
                    <div className="text-gray-400 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                        <div className="flex-1 space-y-4">
                            <h3 className="font-semibold text-white">
                                About Us
                            </h3>
                            <p className="w-3/5">
                                We are a passionate team dedicated to providing
                                the best services to our customers.
                            </p>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="font-semibold text-white">
                                Quick Links
                            </h3>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="font-semibold text-white">
                                Subscribe
                            </h3>
                            <div className="space-y-5">
                                <p className="w-2/3">
                                    Subscribe to our newsletter for the latest
                                    updates.
                                </p>
                                <div className="rounded-xl overflow-hidden flex flex-wrap justify-between">
                                    <input
                                        className="bg-white py-3 pl-4 text-gray-600 flex-1"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    {/* <button className="relative w-1/3 flex">
                                        <div className="absolute bg-green-200 w-full">
                                            hey
                                        </div>
                                        <span className="bg-red-400 z-10">2</span>
                                    </button> */}
                                    <button className="shrink-1 bg-[#E7FE29] px-7 py-3 text-black font-semibold cursor-pointer">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 text-center text-gray-400 border-t border-gray-700 mt-16">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </footer>
            <ToastContainer transition={undefined} />
        </>
    );
}

export default App;
