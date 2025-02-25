import useStyles from "./style";
import { useAppSettings } from "../../context";
import usePalette from "../../helpers/usePalette";

const Input = ({
    type = "text",
    value,
    onChange,
    placeholder,
}) => {
    const { theme } = useAppSettings();
    const palette = usePalette(theme);
    const classes = useStyles({ palette, type });

    return (
        <div className={classes.wrapper}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={classes.input}
            />
        </div>
    )
};

export default Input;
