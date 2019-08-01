import React from "react";
import ReactAutoLinker from "react-autolinker";

const style = {
    display: "inline"
};

const AutoLinker = props => {
    return <ReactAutoLinker text={props.text} style={style} />;
};

export default AutoLinker;
