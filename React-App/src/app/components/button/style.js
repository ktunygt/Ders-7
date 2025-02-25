import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    mainContainer: ({ location }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: location || "center"
    }),
    buttonContainer: ({ palette, size }) => ({
        padding: 10,
        color: palette.label,
        backgroundColor: palette.level3,
        fontSize: size,
        borderRadius: 8,
        "&:not(:disabled):hover": {
            backgroundColor: Color(palette.level3).darken(0.2).hex()
        },
        "&:disabled": {
            backgroundColor: Color(palette.level3).darken(0.6).hex(),
            cursor: "not-allowed",
            opacity: 0.6
        }
    }),
    contentContainer: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }),
    startIconContainer: ({ label, size }) => ({
        marginRight: label ? 8 : 0,
        display: "flex",
        fontSize: size || 20
    }),
    endIconContainer: ({ startIcon, label, size }) => ({
        marginLeft: label
            ? 8
            : startIcon
                ? 8
                : 0,
        display: "flex",
        fontSize: size || 20
    })
});

export default useStyles;
