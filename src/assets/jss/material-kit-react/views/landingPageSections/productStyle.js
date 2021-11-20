import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
    section: {
        padding: "30px 0",
        textAlign: "center",
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    priceRange: {
        ...title,
        marginTop: '15px',
        marginLeft: '15px',
        textDecoration: "none",
    },
    description: {
        color: "#373737",
    },
    imageItem:{
        transition: 'transform .7s',
        display: 'inline-block',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.2)',
            display: 'inline-block',
            overflow: 'hidden',
            cursor: 'pointer',
        }
    },
    imgRounded: {
        borderRadius: "6px !important",
    },
    imgRoundedCircle: {
        borderRadius: "50% !important",
    },
    imgRaised: {
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    imgGallery: {
        width: "100%",
        marginBottom: "2.142rem",
    },
};

export default productStyle;
