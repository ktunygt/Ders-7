import { useState } from "react";
import Box from "../box";
import Button from "../button";
import Txt from "../txt";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const TaskLabel = ({
    label
}) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const toggleComplete = () => {
        setIsCompleted((prev) => !prev);
    };

    return (
        <Box
            level={3}
            flex
            borderRadius={10}
            height={50}
        >
            <Button
                startIcon={isCompleted ? <FaRegCircleCheck /> : <FaRegCircle />}
                size={20}
                onClick={toggleComplete}
            />
            <Txt>
                {label}
            </Txt>
        </Box>
    );
};

export default TaskLabel;
