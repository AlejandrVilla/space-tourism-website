import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import data from "../../utils/data.json";
import TechItem from "./components/TechItem";
import { childVariants } from "../../utils/utils";
import "./technology.scss";

const technology = data.technology;

const Technology = () => {
    const [currenTech, setCurrenTech] = useState("launch vehicle");

    const handleClick = (tech) => {
        setCurrenTech(tech);
    }

    const screenWidth = window.innerWidth;

    return (
        <motion.div
            className="tech"
            variants={childVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <div className="tech-content">
                <div className="tech-header">
                    <h2 className="text-preset-5 o3">03</h2>
                    <h2 className="text-preset-5">SPACE LAUNCH 101</h2>
                </div>
                <div className="tech-item">
                    <div className="tech-item-content">
                        <ul className="tech-list">
                            <li className={`tech-list-button${currenTech === "launch vehicle" ? " active" : ""}`} onClick={() => handleClick("launch vehicle")}><p className="text-preset-4">0</p></li>
                            <li className={`tech-list-button${currenTech === "spaceport" ? " active" : ""}`} onClick={() => handleClick("spaceport")}><p className="text-preset-4">1</p></li>
                            <li className={`tech-list-button${currenTech === "space capsule" ? " active" : ""}`} onClick={() => handleClick("space capsule")}><p className="text-preset-4">2</p></li>
                        </ul>
                        {
                            technology.filter((item) => (currenTech === item.name.toLowerCase())).map((item, index) => (<TechItem key={index} item={item} />))
                        }
                    </div>
                    <div className="tech-img-div">
                        <AnimatePresence mode="sync" initial={false}>
                            {
                                technology.filter((item) => (currenTech === item.name.toLowerCase())).map((item) => (
                                    <motion.img
                                        className="tech-img"
                                        key={currenTech}
                                        variants={childVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        src={screenWidth <= 700 ? item.images.landscape : item.images.portrait}
                                        alt="tech image"
                                    />
                                ))
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Technology;