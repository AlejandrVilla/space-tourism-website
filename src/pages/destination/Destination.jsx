import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../utils/data.json";
import DestinationItem from "./components/DestinationItem";
import { childVariants } from "../../utils/utils.jsx";
import "./destination.scss";

const destinations = data.destinations;

const Destination = () => {
    const [currentItem, setCurrentItem] = useState("moon");
    const [activeDest, setActiveDest] = useState("moon");

    const handleClick = (item) => {
        setCurrentItem(item);
        setActiveDest(item);
    }

    return (
        <motion.div
            className="destination"
            variants={childVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <div className="destination-content">
                <div className="destination-header">
                    <h2 className="text-preset-5 o1">01</h2>
                    <h2 className="text-preset-5">PICK YOUR DESTINATION</h2>
                </div>
                <div className="destination-item">
                    <div className="destination-img-div">
                        <AnimatePresence mode="sync" initial={false}>
                            {
                            destinations.filter((item) => (currentItem === item.name.toLowerCase())).map((item) => (
                                <motion.img
                                    variants={childVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="destination-img"
                                    key={currentItem}
                                    src={item.images.png}
                                />
                            ))
                            }
                        </AnimatePresence>
                    </div>
                    <div className="destination-item-content">
                        <div className="destination-item-wrap">
                            <div className="destination-nav">
                                <p className={`text-preset-8 dest-link${activeDest === "moon" ? " active" : ""}`} onClick={() => handleClick("moon")}>MOON</p>
                                <p className={`text-preset-8 dest-link${activeDest === "europa" ? " active" : ""}`} onClick={() => handleClick("europa")}>EUROPA</p>
                                <p className={`text-preset-8 dest-link${activeDest === "mars" ? " active" : ""}`} onClick={() => handleClick("mars")}>MARS</p>
                                <p className={`text-preset-8 dest-link${activeDest === "titan" ? " active" : ""}`} onClick={() => handleClick("titan")}>TITAN</p>
                            </div>
                            <AnimatePresence mode="sync" initial={false}>
                                {
                                destinations.filter((item) => (currentItem === item.name.toLowerCase())).map((item) => (
                                    <motion.div
                                        key={currentItem}
                                        className="destination-item-wrap-content"
                                        variants={childVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <DestinationItem item={item} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Destination;