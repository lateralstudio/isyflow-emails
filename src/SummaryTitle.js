import React from "react";
import { Item, Span } from "react-html-email";

const SummaryTitle = ({ title, fontFamily }) => {
    return (
        <Item>
            <Span style={{ fontSize: "22px", fontFamily, lineHeight: "32px" }}>
                {title}
            </Span>
        </Item>
    );
};

export default SummaryTitle;
