import { useAppSettings } from "../../context";
import usePalette from "../../helpers/usePalette";
import useStyles from "./style";

const Txt = ({
    size,
    position,
    children,
    ...props
}) => {
    const { theme } = useAppSettings();
    const palette = usePalette(theme);
    const classes = useStyles({ palette, size, position });

    const { h, p } = props;
    const Tag =
        h ? "h3" :
        p ? "p" :
        "p";

    return (
        <div
            className={classes.container}
            {...props}
        >
            <Tag className={classes.tag}>
                {h ? <strong>{children}</strong> : children}
            </Tag>
        </div>
    )
};

export default Txt;
