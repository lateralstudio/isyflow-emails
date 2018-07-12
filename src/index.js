import "./emailConfig.js";
import InvitationEmail from "./InvitationEmail.js";
import NotificationEmail from "./NotificationEmail.js";
import PropTypes from "prop-types";
import React from "react";
import { renderEmail } from "react-html-email";

console.log("NotificationEmail", NotificationEmail);

export { InvitationEmail, NotificationEmail, renderEmail };
