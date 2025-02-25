import Box from "../../components/box";
import Button from "../../components/button";
import Txt from "../../components/txt";
import { useAppSettings } from "../../context";

const Home = () => {
    const { theme, toggleTheme } = useAppSettings();

    return (
        <Box
            disabled={false}
            padding={20}
            gridColumns={[1, 2, 1]}
            gap={20}
        >
            <Box
                level={3}
                borderRadius={30}
                padding={20}
            >
                <Txt h size={30}>
                    Home Sayfası
                </Txt>
                <Txt>
                    Tema: {theme}
                </Txt>
                <Txt position={"start"} size={20}>
                    Bu yeni komponent
                </Txt>
            </Box>
            <Box>

            </Box>
            <Box
                level={2}
                padding={20}
                borderRadius={30}
            >
                <Button
                    disabled={false}
                    label={"Tema değiştir"}
                    onClick={() => toggleTheme()}
                />
                <Button
                    label={"About Sayfasına Git"}
                    href={"/about"}
                    size={30}
                />
                <Button
                    label={"To Do Sayfasına Git"}
                    href={"/todo"}
                    size={30}
                />
                <Button
                    label={"Google'a Git"}
                    href={"google.com"}
                    external
                />
            </Box>
        </Box>
    )
};

export default Home;
