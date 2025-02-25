import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    overlay: {
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modal: ({ width, height }) => ({
        padding: "16px",
        borderRadius: "8px",
        width: width,
        height: height
    })
});

export default useStyles;
