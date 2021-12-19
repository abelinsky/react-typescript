import React from "react";

const EventComponent: React.FC = () => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAGGED");
  };

  return (
    <div>
      <input onChange={inputHandler} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
