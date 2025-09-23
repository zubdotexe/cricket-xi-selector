import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import userIcon from "./assets/userIcon.png";
import flagIcon from "./assets/flagIcon.png";

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
            <main className="max-w-[1320px] mx-auto mt-24">
                <div className="flex justify-between">
                    <h2>Available Players</h2>
                    <div className="flex">
                        <a>Available</a>
                        <a>Selected (<span>0</span>)</a>
                    </div>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {playersJson.map(player => <div className="p-6 space-y-4 border-1 border-gray-200 rounded-2xl cursor-pointer hover:shadow-md">
                        <div className="w-full h-56 rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover" src={player.player_img} alt={`${player.player_name} image`} />
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={userIcon} alt="User icon"></img>
                            <h3 className="font-bold">{player.player_name}</h3>
                        </div>
                        <div className="flex justify-between border-b-1 border-gray-300 pb-4 flex-wrap">
                            <div className="flex gap-1 items-center">
                                <img className="w-5 h-5" src={flagIcon} alt="Flag icon" />
                                <h3 className="text-gray-500">{player.player_nation}</h3>
                            </div>
                            <button className="btn font-semibold text-gray-600">{player.player_role}</button>
                        </div>
                        <div className="flex justify-between flex-wrap">
                            <h3 className="font-bold">Rating</h3>
                            <p>{player.player_rating}</p>
                        </div>
                        <div className="flex justify-between text-gray-600 flex-wrap">
                            <p>{player.strong_hand.split(",")[0]}</p>
                            <p>{player.strong_hand.split(",")[1]}</p>
                        </div>
                        <div className="flex justify-between items-center flex-wrap">
                            <h3 className="font-bold">Price: $<span>{player.price}</span></h3>
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>)}
                </div>
            </main>
        </>
    );
}

export default App;
