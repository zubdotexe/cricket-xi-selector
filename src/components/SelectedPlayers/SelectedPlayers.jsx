import SelectedPlayerCard from "./SelectedPlayerCard";

export default function selectedPlayers({ selectedPlayers, removeSelectedPlayer }) {
    console.log(selectedPlayers);
    return (
        selectedPlayers.map(player => <SelectedPlayerCard player={player} removeSelectedPlayer={removeSelectedPlayer}></SelectedPlayerCard>)
    );
}
