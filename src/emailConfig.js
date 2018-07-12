import { configStyleValidator } from "react-html-email";

configStyleValidator({
    strict: true,
    warn: false,
    platforms: [
        "gmail",
        "gmail-android",
        "apple-mail",
        "apple-ios",
        "yahoo-mail",
        "outlook",
        "outlook-legacy",
        "outlook-web"
    ]
});
