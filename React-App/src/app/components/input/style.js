import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: ({ palette }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${palette.label}`,
        backgroundColor: palette.level1,
        borderRadius: 8
    }),

    input: ({ palette, type }) => ({
        width: type && type === "date" ? "auto" : "100%",
        height: "100%",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: palette.label,
        fontSize: "1rem",
        padding: "8px"
    })
});

export default useStyles;
