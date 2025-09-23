import remIcon from "../../assets/remIcon.png";

export default function SelectedPlayerCard({ player, removeSelectedPlayer }) {
    return (
        <div className="p-6 border border-gray-300 rounded-xl mb-6 flex justify-between items-center flex-wrap">
            <div className="flex gap-6 items-center flex-wrap">
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={player.player_img}
                        alt="Player image"
                    />
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl">{player.player_name}</h3>
                    <div className="text-gray-400">
                        <p>{player.strong_hand.split(",")[0]}</p>
                        <p>
                            {player.strong_hand.split(",")[1] || ""}
                        </p>
                    </div>
                </div>
            </div>
            <img
                onClick={() => removeSelectedPlayer(player)}
                className="cursor-pointer mt-6 sm:mt-0"
                src={remIcon}
                alt="Remove icon"
            />
        </div>
    );
}
