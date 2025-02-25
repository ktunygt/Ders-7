import Navigation from "./navigation";
import useGlobalStyles from "./globalStyles";
import Box from "./components/box";

function App() {
    useGlobalStyles();

    return (
        <Box style={{ width: "100vw", height: "100vh" }}>
            <Navigation />
        </Box>
    );
}

export default App;
