import { useAppSettings } from "../../context";
import usePalette from "../../helpers/usePalette";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import hrefRouter from "../../helpers/hrefRouter";

const Button = ({
    disabled,
    label,
    href,
    external,
    size,
    location,
    startIcon,
    endIcon,
    onClick,
    children
}) => {
    const { theme } = useAppSettings();
    const palette = usePalette(theme);
    const classes = useStyles({ palette, size, label, startIcon, location });

    const navigate = useNavigate();

    return (
        <div className={classes.mainContainer}>
            <button
                disabled={disabled}
                className={classes.buttonContainer}
                onClick={onClick ?? (href ? hrefRouter(href, external, navigate) : undefined)}
            >
                <div className={classes.contentContainer}>
                    {startIcon && <span className={classes.startIconContainer}>{startIcon}</span>}
                    {label || children}
                    {endIcon && <span className={classes.endIconContainer}>{endIcon}</span>}
                </div>
            </button>
        </div>
    );
};

export default Button;
