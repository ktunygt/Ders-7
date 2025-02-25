import { useAppSettings } from "../../context";
import Box from "../../components/box";
import Menu from "./menu";
import Main from "./main";
import Details from "./details";
import { useState } from "react";

const Todo = () => {
    const { deviceSize } = useAppSettings();

    const [renderMenu, setRenderMenu] = useState(deviceSize > 2);
    const [renderDetails, setRenderDetails] = useState(deviceSize > 2);

    const toggleMenu = () => {
        setRenderMenu((prev) => !prev);
    };

    const toggleDetails = () => {
        setRenderDetails((prev) => !prev);
    };

    let gridColumns = []; // [1, 2, 1]
    if (renderMenu && deviceSize > 2) gridColumns.push(1);
    gridColumns.push(2);
    if (renderDetails) gridColumns.push(1);

    return (
        <Box
            gridColumns={gridColumns}
            padding={20}
            gap={20}
        >
            
            <Menu renderMenu={renderMenu} toggleMenu={toggleMenu} />
            <Main renderMenu={renderMenu} toggleMenu={toggleMenu} />
            <Details renderDetails={renderDetails} toggleDetails={toggleDetails} />
        </Box>
    );
};

export default Todo;
