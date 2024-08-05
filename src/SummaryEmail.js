import { Email, EmailPart, EmailPartContent } from "./Email.js";
import EmailPartFooter from "./EmailPartFooter.js";
import EmailPartHeader from "./EmailPartHeader.js";
import ManageNotifications from "./ManageNotifications.js";
import PropTypes from "prop-types";
import React from "react";
import SpaceBeforeFooter from "./SpaceBeforeFooter.js";
import SummaryItem from "./SummaryItem.js";
import SummaryTitle from "./SummaryTitle.js";

const SummaryEmail = props => {
    return (
        <Email emailStyle={props.emailStyle}>
            <EmailPartHeader
                {...props.header}
                color={props.emailStyle.primaryTextColor}
            />
            {props.title && (
                <EmailPart>
                    <EmailPartContent>
                        <SummaryTitle title={props.title} />
                    </EmailPartContent>
                </EmailPart>
            )}
            <EmailPart>
                <EmailPartContent>
                    {props.items &&
                        props.items.map((item, index) => (
                            <SummaryItem
                                key={index}
                                emailStyle={props.emailStyle}
                                style={{ marginBottom: "15px" }}
                                {...item}
                            />
                        ))}
                </EmailPartContent>
            </EmailPart>
            <SpaceBeforeFooter />
            <EmailPart>
                <EmailPartContent>
                    <ManageNotifications
                        {...props.notifications}
                        color={props.emailStyle.primaryTextColor}
                        itemStyle={{ padding: "0", textAlign: "left" }}
                    />
                </EmailPartContent>
            </EmailPart>
            <EmailPartFooter {...props.footer} />
        </Email>
    );
};

SummaryEmail.propTypes = {
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
    items: PropTypes.array,
    title: PropTypes.string
};

export default SummaryEmail;
