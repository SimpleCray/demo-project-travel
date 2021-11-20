import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./homeParallaxStyle.js";
import { randomFromRange } from "common/commonFunctions.js";

const useStyles = makeStyles(styles);

export default function HomeParallax(props) {
    const randomStart = randomFromRange(8, 60);
    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    } else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { filter, className, children, style, image, small } = props;
    const classes = useStyles();
    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined,
    });
    return (
        <div
            id="parallax"
            className={parallaxClasses}
            style={{
                ...style,
                transform: transform,
            }}
        >
            <div className={classes.video}>
                {/* <iframe
                    width={window.innerWidth}
                    height={window.innerHeight*1.3}
                    frameBorder="0"
                    allowFullScreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Homepage video"
                    // src={`https://www.youtube.com/embed/linlz7-Pnvw?controls=0&amp;start=${randomStart};showinfo=0&amp;rel=0&autoplay=1&amp;loop=1&amp&mute=1;`}
                    src={`${window.location.origin}/video/homevideo.mp4?controls=0&amp;start=${randomStart};showinfo=0&amp;rel=0&autoplay=1&amp;loop=1&amp&mute=1;`}
                    
                    // src={`${window.location.origin}/video/homevideo.mp4`}
                /> */}
                <video 
                    width={window.innerHeight*1.2*16/9}
                    height={window.innerHeight*1.2}
                    autoPlay
                    loop
                    muted
                >
                    <source src={`${window.location.origin}/video/homevideo.mp4#t=${randomStart}`} type="video/mp4"/>
                </video>
            </div>
            {children}
        </div>
    );
}

HomeParallax.propTypes = {
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string,
    image: PropTypes.string,
    small: PropTypes.bool,
};
