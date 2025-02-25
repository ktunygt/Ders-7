import Box from "../../../components/box";
import Button from "../../../components/button";
import Txt from "../../../components/txt";
import Modal from "../../../components/modal";
import { TiThMenu } from "react-icons/ti";
import { useAppSettings } from "../../../context";

const Menu = ({
    renderMenu,
    toggleMenu
}) => {
    const { deviceSize } = useAppSettings();

    if (!renderMenu) return;

    return (
        <>
            {deviceSize <= 2 ? (
                <Modal width={300}>
                    <Content toggleMenu={toggleMenu} />
                </Modal>
            ) : <Content toggleMenu={toggleMenu} />}
        </>
    );
};

const Content = ({
    toggleMenu
}) => {
    return (
        <Box
            level={2}
            borderRadius={30}
            padding={20}
            gridRows={[1, 11]}
            gridColumns={[2, 1]}
        >
            <Txt h size={30}>Menu</Txt>
            <Button
                startIcon={<TiThMenu />}
                size={20}
                location={"end"}
                onClick={toggleMenu}
            />
        </Box>
    );
}

export default Menu;
