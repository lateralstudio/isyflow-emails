const defaultCss = `
p {
    margin: 0 !important;
    margin-bottom: 5px !important;
    padding: 0 !important;
};
a:visited {
    color:#fff;
};
@media only screen and (max-device-width: 600px) {
    table.emailContent {
        width: 100% !important;
    };
    font-size: 20px !important;
}
@media only screen and (min-device-width: 601px) {
    table.emailContent {
        width: 600px !important;
    };
}
`.trim();

export { defaultCss };
