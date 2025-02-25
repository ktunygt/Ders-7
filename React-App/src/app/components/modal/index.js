import { useEffect, useRef } from "react";
import useStyles from "./style";

const Modal = ({
    width,
    height,
    onClose = () => {},
    children
}) => {
    const modalRef = useRef(null);
    const classes = useStyles({ width, height });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={classes.overlay}>
            <div ref={modalRef} className={classes.modal}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
