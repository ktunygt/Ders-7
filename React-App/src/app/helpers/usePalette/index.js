import { useEffect, useState } from "react";
import { paletteChoice } from "../../config";

const usePalette = (theme) => {
    const [palette, setPalette] = useState(
        theme === "light"
            ? require(`../../config/palette/${paletteChoice.light}`)
            : require(`../../config/palette/${paletteChoice.dark}`)
    );

    useEffect(() => {
        setPalette(
            theme === "light"
                ? require(`../../config/palette/${paletteChoice.light}`)
                : require(`../../config/palette/${paletteChoice.dark}`)
        )
    }, [theme]);

    return palette;
};

export default usePalette;
