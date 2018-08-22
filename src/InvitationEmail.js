import { Email, EmailPart, EmailPartContent } from "./Email.js";
import { Card, CardBody, CardHeader } from "./Card.js";
import EmailPartFooter from "./EmailPartFooter.js";
import EmailPartHeader from "./EmailPartHeader.js";
import PropTypes from "prop-types";
import React from "react";

const InvitationEmail = props => {
    return (
        <Email emailStyle={props.emailStyle}>
            <EmailPartHeader
                {...props.header}
                color={props.emailStyle.primaryTextColor}
            />
            <EmailPart>
                <EmailPartContent>
                    <Card>
                        <CardHeader {...props.card.header} />
                        <CardBody
                            {...props.card.body}
                            emailStyle={props.emailStyle}
                        />
                    </Card>
                </EmailPartContent>
            </EmailPart>
            <EmailPartFooter {...props.footer} />
        </Email>
    );
};

InvitationEmail.propTypes = {
    card: PropTypes.shape({
        body: PropTypes.object.isRequired,
        header: PropTypes.object.isRequired
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
