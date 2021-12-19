import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  const clickHandler = () => {
    console.log("CLICKED");
  };
  return (
    <ChildAsFC color="red" onClick={clickHandler}>
      asdad
    </ChildAsFC>
  );
};

export default Parent;
