import { EmailPart, EmailPartContent, Whitespace } from "./Email.js";
import { Box, Image, Item, Span } from "react-html-email";
import PropTypes from "prop-types";
import React from "react";

const EmailPartHeader = ({ color, logo, subtitle }) => (
    <EmailPart>
        <EmailPartContent>
            <Whitespace padding="0px" />
            {logo && (
                <Item style={{ textAlign: "left", padding: "10px 0 0 0" }}>
                    <Image
                        src={logo.url}
                        height={logo.height || (logo.width ? undefined : 40)}
                        width={logo.width}
                        style={{ display: "inline-block" }}
                    />
                </Item>
            )}
            {subtitle && (
                <Item style={{ textAlign: "left" }}>
                    <Box>
                        <Span style={{ fontSize: "large", color }}>
                            {subtitle}
                        </Span>
                    </Box>
                </Item>
            )}
        </EmailPartContent>
    </EmailPart>
);

EmailPartHeader.propTypes = {
    subtitle: PropTypes.node,
    logo: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        url: PropTypes.string.isRequired
    }).isRequired
};

export default EmailPartHeader;
