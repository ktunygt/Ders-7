import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
    constainer: ({ palette, level, width, height }) => {
        let background;
        switch (level) {
            case 1:
                background = palette.level1;
                break;
            case 2:
                background = palette.level2;
                break;
            case 3:
                background = palette.level3;
                break;
            default:
                background = palette.level1;
                break;
        }

        return {
            width: width || "100%",
            height: height || "100%",
            backgroundColor: background,
            overflowY: "auto",
            "&:disabled": {
                color: Color(background).darken(0.6).hex(),
                cursor: "not-allowed",
                opacity: 0.6
            }
        }
    },
    overlay: () => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        zIndex: 10
    })
}));

export default useStyles;
