import { A, Box, Item, Span } from "react-html-email";
import {
    defaultBoxProps,
    getDefaultLinkProps,
    getLinkProps,
    EmailPart,
    EmailPartContent,
    Whitespace
} from "./Email.js";
import PropTypes from "prop-types";
import React from "react";

const Footer = ({ textColor, ...props }) => {
    const color = textColor || "#fff";
    return (
        <Item>
            <Box {...defaultBoxProps}>
                <Item
                    style={{
                        textAlign: "left",
                        padding: "10px 0px",
                        color
                    }}
                >
                    <Span style={{ color }}>
                        <p>
                            Copyright &copy; 2019{" "}
                            {props.copyright || "Lateral Studio Sàrl"}
                        </p>
                        <p>{props.address || "1010 Lausanne, Switzerland"}</p>
                    </Span>
                    <Span>
                        <p>
                            <A
                                href={props.url || "https://www.isyflow.ch"}
                                {...getLinkProps({ style: { color } })}
                            >
                                {props.urlLabel || "www.isyflow.ch"}
                            </A>
                        </p>
                        {!props.noMail && (
                            <p>
                                <A
                                    href={
                                        props.mailto || "mailto:isy@isyflow.ch"
                                    }
                                    {...getLinkProps({ style: { color } })}
                                >
                                    {props.mailtoLabel || "isy@isyflow.ch"}
                                </A>
                            </p>
                        )}
                    </Span>
                </Item>
            </Box>
        </Item>
    );
};

const EmailPartFooter = ({ bgColor, ...props }) => {
    return [
        <EmailPart key="footer" bgColor={bgColor || "#3596f4"} noPadding={true}>
            <Whitespace padding={5} />
            <EmailPartContent cellPadding={0}>
                <Footer {...props} />
            </EmailPartContent>
            <Whitespace padding={5} />
        </EmailPart>
    ];
};

export default EmailPartFooter;
