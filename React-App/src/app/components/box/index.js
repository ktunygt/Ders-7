import { useAppSettings } from "../../context";
import usePalette from "../../helpers/usePalette";
import useStyles from "./style";
import quadParameter from "../../helpers/jssValidates/quadParameter";

const Box = ({
    disabled,
    loading,
    level,
    gridRows,
    gridColumns,
    gap,
    padding,
    borderRadius,
    width,
    height,
    flex,
    style,
    children,
    ...props
}) => {
    const { theme } = useAppSettings();
    const palette = usePalette(theme);
    const classes = useStyles({ palette, level, width, height });

    const finalBorderRadius = quadParameter(borderRadius, "px");
    const finalGridColumns = quadParameter(gridColumns, "fr");
    const finalGridRows = quadParameter(gridRows, "fr");
    const display = gridColumns || gridRows
        ? "grid"
        : flex
            ? "flex"
            : "block";    

    const containerStyle = {
        padding,
        display: display,
        gridTemplateColumns: finalGridColumns,
        gridTemplateRows: finalGridRows,
        borderRadius: finalBorderRadius,
        alignItems: flex && "center",
        justifyContent: flex,
        gap,
        ...style
    }

    return (
        <>
            {disabled && (
                <div
                    className={classes.overlay}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span>Bu işlem şu anda devre dışı.</span>
                </div>
            )}
            <div
                className={classes.constainer}
                style={containerStyle}
                {...props}
            >
                {children}
            </div>
        </>
    )
};

export default Box;
