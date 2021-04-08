import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MultiSwitch(props) {
  const elements = [];
  let index = 0;

  props.icons.forEach((icon) => {
    elements.push({
      iconName: icon,
      index: index,
    });
    index++;
  });

  return (
    <div className="flex">
      <div className="multiSwitch flex goldBox">
        {elements.map((element) => (
          <button onClick={() => props.setHook(element.index)}>
            <FontAwesomeIcon
              className="icon"
              icon={["fas", element.iconName]}
            />
          </button>
        ))}
        <div
          id="multiSwitchButtonHighlighter"
		  style={{transform: `translateX(${110 * props.hook}px)`}}
        />
      </div>
    </div>
  );
}
