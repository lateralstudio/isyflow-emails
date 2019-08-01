import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = props => {
    return (
        <ReactMarkdown
            escapeHtml={true}
            source={props.text}
            linkTarget="_blank"
        />
    );
};

export default Markdown;
