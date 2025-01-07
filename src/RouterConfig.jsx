import { motion, AnimatePresence } from "framer-motion";
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { Home, Destination, Crew, Technology, ErrorPage } from "./pages";
import { routeVariants } from './utils/utils.jsx';
import App from "./App.jsx";
import "./routerConfig.scss";

const getWindowType = (width) => {
    if (width <= 800 && width >= 400) return "tablet";
    if (width < 400) return "mobile";
    return "desktop";
}

const RouterConfig = () => {
    const location = useLocation();

    let windowType = getWindowType(window.innerWidth);

    const backgroundImages = {
        "/": `/assets/home/background-home-${windowType}.jpg`,
        "/destination": `/assets/destination/background-destination-${windowType}.jpg`,
        "/crew": `/assets/crew/background-crew-${windowType}.jpg`,
        "/technology": `/assets/technology/background-technology-${windowType}.jpg`,
    };

    const backgroundImage = backgroundImages[location.pathname] || `/assets/home/background-home-${windowType}.jpg`;
    return (
        <>
            <AnimatePresence mode='sync' initial={false}>
                <motion.div
                    key={backgroundImage}
                    variants={routeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="back-image"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></motion.div>
                <Routes location={location}>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path='/destination' element={<Destination />} />
                        <Route path='/crew' element={<Crew />} />
                        <Route path='/technology' element={<Technology />} />
                    </Route>
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default RouterConfig;