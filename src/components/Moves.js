const Moves = ({ id, move, player }) => {
  return (
    <div>
      <p>
        BOX #{id}: {move} made by Player {player}
      </p>
    </div>
  );
};

export default Moves;
