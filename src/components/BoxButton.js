const BoxButton = (props) => {
  return (
    <>
      <div className="buttons">
        <button onClick={props.addBox}> Click to add box</button>{" "}
        <button onClick={props.subBox}> Take that box away</button>
      </div>
    </>
  );
};

export default BoxButton;
