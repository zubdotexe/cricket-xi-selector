import userIcon from "../../assets/userIcon.png";
import flagIcon from "../../assets/flagIcon.png";
import { useState } from "react";

export default function PlayerCard({
    player,
    addSelectedPlayer,
    removeSelectedPlayer,
}) {
    const [playerSelected, setPlayerSelected] = useState(false);

    const handlePlayerSelected = () => {
        const newVal = !playerSelected;
        setPlayerSelected(newVal);
        newVal ? addSelectedPlayer(player) : removeSelectedPlayer(player);
    };

    return (
        <div className="p-6 space-y-4 border-1 border-gray-200 rounded-2xl cursor-pointer hover:shadow-md">
            <div className="w-full h-56 rounded-xl overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={player.player_img}
                    alt={`${player.player_name} image`}
                />
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
                <button className="btn font-semibold text-gray-600">
                    {player.player_role}
                </button>
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
                <h3 className="font-bold">
                    Price: $<span>{player.price}</span>
                </h3>
                <button onClick={handlePlayerSelected} className="btn">
                    {playerSelected ? "Drop Player" : "Choose Player"}
                </button>
            </div>
        </div>
    );
}
