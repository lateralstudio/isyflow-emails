import Actions from "./Actions.js";
import AutoLinker from "./AutoLinker.js";
import Avatar from "./Avatar.js";
import { Box, Item, Span } from "react-html-email";
import { Button, defaultBoxProps } from "./Email.js";
import { Card, CardHeader, CardBody } from "./Card.js";
import cardStyle from "./cardStyle.js";
import Markdown from "./Markdown.js";
import PropTypes from "prop-types";
import React from "react";

const SummaryItem = ({ actions, avatar, card, emailStyle, style, title }) => {
    return (
        <Item>
            <Box {...defaultBoxProps} style={style}>
                <Item>
                    <div style={{ width: "48px", float: "left" }}>
                        <Avatar height={48} {...avatar} />
                    </div>
                    <div style={{ marginLeft: "52px" }}>
                        <Span>
                            <Markdown text={title} />
                        </Span>
                        {card && (
                            <Box style={cardStyle}>
                                <CardBody
                                    {...card.body}
                                    emailStyle={emailStyle}
                                />
                            </Box>
                        )}
                        {actions && (
                            <Actions
                                actions={actions}
                                emailStyle={emailStyle}
                                small={true}
                                style={{ padding: "5px 0 0 0" }}
                            />
                        )}
                    </div>
                </Item>
            </Box>
        </Item>
    );
};

SummaryItem.propTypes = {
    actions: PropTypes.array,
    avatar: PropTypes.shape.isRequired,
    card: PropTypes.shape,
    emailStyle: PropTypes.object.isRequired,
    title: PropTypes.node.isRequired
};

export default SummaryItem;
