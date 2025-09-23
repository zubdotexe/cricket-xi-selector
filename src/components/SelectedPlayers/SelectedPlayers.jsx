import SelectedPlayerCard from "./SelectedPlayerCard";

export default function selectedPlayers({
    selectedPlayers,
    removeSelectedPlayer,
    setAvailablePlayers,
}) {
    return (
        <div className="pb-20">
            {selectedPlayers.map((player) => (
                <SelectedPlayerCard
                    player={player}
                    removeSelectedPlayer={removeSelectedPlayer}
                ></SelectedPlayerCard>
            ))}

            <button
                onClick={() => setAvailablePlayers(true)}
                className="mt-6 cursor-pointer bg-[#E7FE29] rounded-xl px-5 py-3 font-bold outline-2 outline-black outline-offset-8 "
            >
                Add More Player
            </button>
        </div>
    );
}
