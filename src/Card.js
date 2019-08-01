import Avatar from "./Avatar.js";
import { Box, Item, Span } from "react-html-email";
import { Button, defaultBoxProps } from "./Email.js";
import Markdown from "./Markdown.js";
import PropTypes from "prop-types";
import React from "react";

const cardStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#fff"
};

const Card = props => {
    return (
        <Item className="card" style={cardStyle}>
            <Box {...defaultBoxProps} cellPadding={0}>
                {props.children}
            </Box>
        </Item>
    );
};

const CardHeader = ({ avatar, title, subtitle }) => {
    const height = 48;
    const AvatarComp = avatar && <Avatar {...avatar} size={height} />;
    const avatarStyle = {
        display: "inline-block"
    };
    return (
        <Item>
            {AvatarComp && (
                <Span
                    {...avatarStyle}
                    style={{ display: "inline-block", marginRight: "10px" }}
                >
                    {AvatarComp}
                </Span>
            )}
            <Span
                style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    fontSize: "18px",
                    lineHeight: "42px"
                }}
            >
                <Markdown text={title} />
                {subtitle && <Markdown text={subtitle} />}
            </Span>
        </Item>
    );
};

CardHeader.propTypes = {
    avatar: PropTypes.shape({
        letter: PropTypes.string,
        size: PropTypes.number,
        url: PropTypes.string
    }),
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node
};

const CardBody = ({
    actionLabel,
    actionUrl,
    content,
    emailStyle = {},
    title
}) => {
    const itemStyle = {
        padding: "0 0 5px 0"
    };
    const buttonItemStyle = {
        padding: "15px 0 10px 0"
    };
    const items = [];
    if (title) {
        items.push(
            <Item style={itemStyle}>
                <Span>{title}</Span>
            </Item>
        );
    }
    if (content) {
        const contentLines = content.split("\n");
        contentLines.forEach((line, index) => {
            items.push(
                <Item key={index}>
                    {line ? (
                        <Span>
                            <Markdown text={line} />
                        </Span>
                    ) : (
                        <Span>&nbsp;</Span>
                    )}
                </Item>
            );
        });
    }
    if (actionLabel) {
        items.push(
            <Item style={buttonItemStyle}>
                <Span>
                    <Button
                        label={actionLabel}
                        url={actionUrl}
                        bgColor={emailStyle.primaryColor}
                        color={emailStyle.alternateTextColor}
                    />
                </Span>
            </Item>
        );
    }
    return items;
};

CardBody.propTypes = {
    actionUrl: PropTypes.string,
    actionLabel: PropTypes.node,
    emailStyle: PropTypes.shape({
        primaryColor: PropTypes.string,
        primaryTextColor: PropTypes.string
    }),
    content: PropTypes.node,
    title: PropTypes.node
};

export { Card, CardBody, CardHeader };
