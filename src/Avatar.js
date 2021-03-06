import { Image, Span } from "react-html-email";
import PropTypes from "prop-types";
import React from "react";

const Avatar = props => {
    if (props.url) {
        return (
            <Image
                src={props.url}
                width={props.size || 32}
                height={props.size || 32}
                style={{ display: "inline-block" }}
            />
        );
    }
    if (props.letter) {
        const size = "40px";
        return (
            <Span
                style={{
                    display: "block",
                    width: size,
                    height: size,
                    backgroundColor: props.backgroundColor || "#aaa",
                    textAlign: "center"
                }}
            >
                <Span
                    style={{
                        color: props.color || "#fff",
                        lineHeight: size
                    }}
                >
                    {props.letter}
                </Span>
            </Span>
        );
    }
    return null;
};

Avatar.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.color,
    letter: PropTypes.string,
    size: PropTypes.number,
    url: PropTypes.string
};

export default Avatar;
