const Box = ({ id, move, onClick }) => {
  return (
    <div id={id} onClick={onClick} className="box">
      <h1>{move}</h1>
    </div>
  );
};

export default Box;
