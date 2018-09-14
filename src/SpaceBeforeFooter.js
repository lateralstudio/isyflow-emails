import React from "react";
import { EmailPart, EmailPartContent, Whitespace } from "./Email.js";

const SpaceBeforeFooter = () => (
    <EmailPart>
        <EmailPartContent>
            <Whitespace style={{ padding: "5px" }} />
        </EmailPartContent>
    </EmailPart>
);

export default SpaceBeforeFooter;
