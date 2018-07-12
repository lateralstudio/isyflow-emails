import { A, Box, Email, Image, Item, Span } from "react-html-email";
import { defaultCss } from "./style.js";
import React from "react";

const Style = {
    backgroundColor: "rgb(0, 173, 239)", //#eeeeee",
    primaryColor: "#2196F3",
    alternateColor: "#fff",
    linkColor: "#2196F3",
    mutedColor: "#777777"
};

const defaultBoxProps = {
    cellPadding: 0,
    cellSpacing: 0,
    border: "0",
    width: "100%"
};

const defaultEmailProps = {
    title: "Isyflow",
    align: "center",
    bgcolor: "#00adef",
    width: "100%",
    cellPadding: 0,
    cellSpacing: 0,
    bodyStyle: {
        color: "#888"
    }
};

const getEmailProps = ({ bgColor }) => ({
    title: "Isyflow",
    align: "center",
    bgcolor: bgColor || "#00adef",
    width: "100%",
    cellPadding: 0,
    cellSpacing: 0,
    bodyStyle: {
        color: "#888"
    }
});

const defaultLinkProps = {
    style: {
        color: Style.primaryColor,
        textDecoration: "none"
    }
};

const getLinkProps = ({ style }) => {
    return {
        style: {
            ...defaultLinkProps.style,
            ...style
        }
    };
};

const greetingsStyle = {
    fontSize: "16px"
    //fontWeight: "bold",
};

const HeaderBox = props => {
    return <Item>{props.children}</Item>;
};

const IsyEmail = ({ emailStyle, ...props }) => {
    const emailProps = getEmailProps(emailStyle);
    return (
        <Email {...emailProps} headCSS={defaultCss}>
            {props.children}
        </Email>
    );
};

const EmailPart = props => {
    const style = { ...props.style };
    if (!props.noPadding) {
        style.padding = "10px 20px";
    }
    return (
        <Item style={style}>
            <Box
                {...defaultBoxProps}
                cellPadding={props.cellPadding || 0}
                bgcolor={props.bgColor}
            >
                {props.children}
            </Box>
        </Item>
    );
};

const EmailPartContent = props => {
    return (
        <Item>
            <Box
                {...defaultBoxProps}
                cellPadding={props.cellPadding || 0}
                align="center"
                className="emailContent"
            >
                {props.children}
            </Box>
        </Item>
    );
};

const Whitespace = props => {
    return <Item style={{ padding: props.padding }}>&nbsp;</Item>;
};

const Button = props => {
    return (
        <A
            href={props.url}
            style={{
                textDecoration: "none"
            }}
        >
            <Span
                style={{
                    lineHeight: "36px",
                    backgroundColor: props.bgColor || "#eee",
                    textDecoration: "none",
                    padding: 10,
                    color: props.color || "#000"
                }}
            >
                {props.label}
            </Span>
        </A>
    );
};

export {
    Button,
    defaultBoxProps,
    defaultEmailProps,
    defaultLinkProps,
    getEmailProps,
    getLinkProps,
    IsyEmail as Email,
    EmailPart,
    EmailPartContent,
    HeaderBox,
    Style,
    Whitespace
};
