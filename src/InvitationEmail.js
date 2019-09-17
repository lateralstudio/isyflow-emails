import Actions from "./Actions.js";
import { Box, Item } from "react-html-email";
import { Email, EmailPart, EmailPartContent } from "./Email.js";
import { CardBody, CardHeader } from "./Card.js";
import cardStyle from "./cardStyle.js";
import EmailPartFooter from "./EmailPartFooter.js";
import EmailPartHeader from "./EmailPartHeader.js";
import PropTypes from "prop-types";
import React from "react";
import SpaceBeforeFooter from "./SpaceBeforeFooter.js";

const InvitationEmail = props => {
    return (
        <Email emailStyle={props.emailStyle}>
            <EmailPartHeader
                {...props.header}
                color={props.emailStyle.primaryTextColor}
            />
            <EmailPart>
                <EmailPartContent>
                    {props.card.header && <CardHeader {...props.card.header} />}
                    <Item>
                        <Box style={cardStyle}>
                            <CardBody
                                {...props.card.body}
                                emailStyle={props.emailStyle}
                            />
                        </Box>
                    </Item>
                    {props.card.actions && (
                        <Item>
                            <Box>
                                <Actions
                                    actions={props.card.actions}
                                    emailStyle={props.emailStyle}
                                    small={false}
                                    style={{ padding: "20px 0 0 0" }}
                                />
                            </Box>
                        </Item>
                    )}
                </EmailPartContent>
            </EmailPart>
            <SpaceBeforeFooter />
            <EmailPartFooter {...props.footer} />
        </Email>
    );
};

InvitationEmail.propTypes = {
    card: PropTypes.shape({
        body: PropTypes.object.isRequired,
        header: PropTypes.object.isRequired,
        actions: PropTypes.array
    }).isRequired,
    emailStyle: PropTypes.shape({
        bgColor: PropTypes.string,
        primaryColor: PropTypes.string,
        primaryTextColor: PropTypes.string
    }),
    footer: PropTypes.shape({
        bgColor: PropTypes.string,
        textColor: PropTypes.string
    }),
    header: PropTypes.shape({
        logo: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
            url: PropTypes.string.isRequired
        }).isRequired,
        subtitle: PropTypes.node
    }).isRequired,
    actionLabel: PropTypes.string,
    body: PropTypes.node,
    title: PropTypes.node,
    url: PropTypes.string
};

export default InvitationEmail;
