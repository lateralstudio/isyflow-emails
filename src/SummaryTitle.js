import React from "react";
import { Item, Span } from "react-html-email";

const SummaryTitle = ({ title }) => {
    return (
        <Item>
            <Span style={{ fontSize: "22px", lineHeight: "32px" }}>
                {title}
            </Span>
        </Item>
    );
};

export default SummaryTitle;
