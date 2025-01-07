import { motion } from "framer-motion";
import { childVariants } from "../../utils/utils.jsx";
import Card from "./components/Card.jsx";
import "./home.scss";

const Home = () => {
    return (
        <motion.div 
            className="home"
            variants={childVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <Card/>
        </motion.div>
    );
}

export default Home;