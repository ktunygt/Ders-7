import Box from "../../../components/box";
import Txt from "../../../components/txt";
import Button from "../../../components/button";
import { TiThMenu } from "react-icons/ti";
import TaskLabel from "../../../components/taskLabel";

const Main = ({
    renderMenu,
    toggleMenu,
    openMenu
}) => {
    return (
        <Box
            level={1}
            borderRadius={30}
            padding={10}
        >
            <Box
                gridRows={[1, 14]}
                gap={20}
            >
                <Box
                    flex={"start"}
                >
                    {!renderMenu && <Button startIcon={<TiThMenu />} size={20} onClick={toggleMenu}/>}
                    <Txt h size={25}>Main</Txt>
                </Box>
                <Box>
                    <TaskLabel label={"Deneme Task"}/>
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
