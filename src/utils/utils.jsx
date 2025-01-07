const routeVariants = {
    hidden: {
        opacity: 0,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.5,
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.5,
        }
    },
}

const childVariants = {
    hidden: {
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
        }
    },
}

export { routeVariants, childVariants };