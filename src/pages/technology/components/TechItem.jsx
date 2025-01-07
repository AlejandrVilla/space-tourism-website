import { AnimatePresence, motion } from "framer-motion";
import { childVariants } from "../../../utils/utils";
import "./techItem.scss";

const TechItem = (props) => {
    return (
        <AnimatePresence mode="sync" initial={false}>
            <motion.div 
                variants={childVariants}
                key={props.item.name}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="tech-item-wrap"
            >
                <div className="tech-item-header">
                    <h2 className="text-preset-4">the terminology...</h2>
                    <h1 className="text-preset-3">{props.item.name}</h1>
                </div>
                <p className="text-preset-9">{props.item.description}</p>
            </motion.div>
        </AnimatePresence>
    );
}

export default TechItem;