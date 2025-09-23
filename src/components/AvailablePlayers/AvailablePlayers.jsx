import PlayerCard from "./PlayerCard";
import { use } from "react";

export default function AvailablePlayers({
    playersPromise,
    addSelectedPlayer,
    removeSelectedPlayer,
    selectedPlayers
}) {
    const playersJson = use(playersPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playersJson.map((player) => (
                <PlayerCard
                    key={player.player_name}
                    player={player}
                    addSelectedPlayer={addSelectedPlayer}
                    removeSelectedPlayer={removeSelectedPlayer}
                    selectedPlayers={selectedPlayers}
                ></PlayerCard>
            ))}
        </div>
    );
}
