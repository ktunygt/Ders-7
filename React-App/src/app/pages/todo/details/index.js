import { useAppSettings } from "../../../context";
import Box from "../../../components/box";
import Button from "../../../components/button";
import Txt from "../../../components/txt";
import Modal from "../../../components/modal";
import { IoClose } from "react-icons/io5";

const Details = ({
    renderDetails,
    toggleDetails
}) => {
    const { deviceSize } = useAppSettings();

    if (!renderDetails) return;

    return (
        <>
            {deviceSize <= 2 ? (
                <Modal>
                    <Content toggleDetails={toggleDetails}/>
                </Modal>
            ) : <Content toggleDetails={toggleDetails}/>}
        </>
    )
};

const Content = ({
    toggleDetails
}) => {
    return (
        <Box
            level={2}
            borderRadius={30}
            padding={20}
            gridColumns={[3, 1]}
            gridRows={[1, 11]}
        >
            <Txt h size={30}>Details</Txt>
            <Button
                startIcon={<IoClose />}
                size={25}
                location={"end"}
                onClick={toggleDetails}
            />
        </Box>
    );
};

export default Details;
