import "./emailConfig.js";
import InvitationEmail from "./InvitationEmail.js";
import NotificationEmail from "./NotificationEmail.js";
import PropTypes from "prop-types";
import React from "react";
import { renderEmail } from "react-html-email";

export { InvitationEmail, NotificationEmail, renderEmail };
