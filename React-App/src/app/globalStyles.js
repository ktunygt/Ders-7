import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles({
    "@global": {
        "@import": "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap')",
        body: {
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.5,
        },
        "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
        },
        h1: {
            fontWeight: "normal",
            marginBottom: "0px"
        },
        h2: {
            fontWeight: "normal",
            marginBottom: "0px"
        },
        h3: {
            fontWeight: "normal",
            marginBottom: "0px"
        },
        h4: {
            fontWeight: "normal",
            marginBottom: "0px"
        },
        h5: {
            fontWeight: "normal",
            marginBottom: "0px"
        },
        h6: {
            fontWeight: "normal",
            marginBottom: "0px"
        },
        ul: {
            listStyle: "none",
        },
        ol: {
            listStyle: "none",
        },
        a: {
            textDecoration: "none",
        },
        p: {
            marginBottom: "0px"
        },
        button: {
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
        },
        input: {
            border: "none",
            padding: 0,
            fontFamily: "inherit",
        },
        textarea: {
            border: "none",
            padding: 0,
            fontFamily: "inherit",
        },
    },
});

export default useGlobalStyles;
