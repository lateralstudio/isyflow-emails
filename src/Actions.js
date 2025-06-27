import { Box, Item, Span } from "react-html-email";
import { Button } from "./Email.js";
import PropTypes from "prop-types";
import React from "react";

const Actions = ({ actions, emailStyle, fontFamily, small, style }) => {
    return (
        <Box>
            <Item style={style}>
                <Span>
                    {actions.map((action, index) => (
                        <Span key={index}>
                            <Button
                                bgColor={emailStyle.primaryColor}
                                color={emailStyle.alternateTextColor}
                                fontFamily={fontFamily}
                                label={action.label}
                                small={small}
                                url={action.url}
                            />
                            &nbsp;
                        </Span>
                    ))}
                </Span>
            </Item>
        </Box>
    );
};

Actions.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            url: PropTypes.string
        })
    ).isRequired,
    emailStyle: PropTypes.object.isRequired,
    fontFamily: PropTypes.string,
    small: PropTypes.bool,
    style: PropTypes.object
};

export default Actions;
