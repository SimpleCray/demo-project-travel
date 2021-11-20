import { container, title } from "assets/jss/material-kit-react.js";

const tourPageStyles = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container,
    },
    // title: {
    //     ...title,
    //     display: "inline-block",
    //     position: "relative",
    //     marginTop: "30px",
    //     minHeight: "32px",
    //     color: "#FFFFFF",
    //     textDecoration: "none",
    // },
    // subtitle: {
    //     fontSize: "1.6rem",
    //     maxWidth: "500px",
    //     margin: "10px auto 0",
    // },
    brand: {
        color: "#FFFFFF",
        textAlign: "left",
    },
    title: {
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative",
    },
    subtitle: {
        fontSize: "1.7rem",
        maxWidth: "500px",
        margin: "10px 0 0",
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    navigateIcon: {
        width: "100px",
        transform: "scale(3)",
        "&:hover": {
            transition: "all 0.2s ease",
            color: "white",
        },
        zIndex: "13",
    },
};

export default tourPageStyles;
