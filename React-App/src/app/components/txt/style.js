import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
    container: ({ position }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: position || "start"
    }),
    tag: ({ palette, size }) => ({
        fontSize: size,
        color: palette.label
    })
}));

export default useStyles;
