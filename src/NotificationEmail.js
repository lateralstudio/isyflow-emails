import { Email, EmailPart, EmailPartContent } from "./Email.js";
import { Card, CardBody, CardHeader } from "./Card.js";
import EmailPartFooter from "./EmailPartFooter.js";
import EmailPartHeader from "./EmailPartHeader.js";
import PropTypes from "prop-types";
import React from "react";

const NotificationEmail = props => {
    return (
        <Email emailStyle={props.emailStyle}>
            <EmailPartHeader {...props.header} />
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

NotificationEmail.propTypes = {
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
    }).isRequired
};

export default NotificationEmail;
