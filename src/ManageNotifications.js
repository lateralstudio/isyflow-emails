import { A, Item, Span } from "react-html-email";
import React from "react";

const ManageNotifications = ({
    color,
    fontFamily,
    itemStyle,
    manageLabel,
    manageLinkLabel,
    manageUrl
}) => {
    const link = (
        <A
            href={manageUrl}
            style={{ color, fontFamily, textDecoration: "underline" }}
        >
            {manageLinkLabel}
        </A>
    );
    return (
        <Item style={itemStyle}>
            <Span style={{ color, fontFamily }}>
                {manageLabel} {link}
            </Span>
        </Item>
    );
};

export default ManageNotifications;
