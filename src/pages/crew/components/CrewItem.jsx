import { motion, AnimatePresence } from "framer-motion";
import "./crewItem.scss";
import { childVariants } from "../../../utils/utils";

const CrewItem = (props) => {
    return (
        <AnimatePresence mode="sync" initial={false}>
            <motion.div 
                className="crew-item-wrap"
                key={props.item.name}
                variants={childVariants}    
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <div className="crew-item-header">
                    <h2 className="text-preset-4">{props.item.role}</h2>
                    <h1 className="text-preset-3">{props.item.name}</h1>
                </div>
                <p className="text-preset-9">{props.item.bio}</p>
            </motion.div>
        </AnimatePresence>
    );
}

export default CrewItem;