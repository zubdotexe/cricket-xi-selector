import PlayerCard from "./PlayerCard";


export default function AvailablePlayers({playersJson}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playersJson.map((player) => (
                <PlayerCard player={player}></PlayerCard>
            ))}
        </div>
    );
}
