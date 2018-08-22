import { Email, EmailPart, EmailPartContent } from "./Email.js";
import { Card, CardBody, CardHeader } from "./Card.js";
import EmailPartFooter from "./EmailPartFooter.js";
import EmailPartHeader from "./EmailPartHeader.js";
import ManageNotifications from "./ManageNotifications.js";

import PropTypes from "prop-types";
import React from "react";

const NotificationEmail = props => {
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
            <EmailPart>
                <EmailPartContent>
                    <ManageNotifications
                        {...props.notifications}
                        color={props.emailStyle.primaryTextColor}
                        itemStyle={{ padding: "20px 0", textAlign: "left" }}
                    />
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
    }).isRequired,
    notifications: PropTypes.shape({
        manageLabel: PropTypes.string,
        manageLinkLabel: PropTypes.string,
        manageUrl: PropTypes.string
    })
};

export default NotificationEmail;
