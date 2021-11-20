import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "./Sections/HomeParallax.js";
import styles from "assets/jss/material-kit-react/views/homePage.js";
// Sections for this page
import { testAction } from "redux/actions/home.actions.js";
import IntroduceSection from "./Sections/IntroduceSection.js";
import TeamSection from "./Sections/TeamSectionHome.js";
import WorkSection from "./Sections/WorkSectionHome.js";
import TourSection from "./Sections/TourSection.js";
import { randomFromRange } from "common/commonFunctions.js";
import FoodCarousel from "./Sections/FoodCarousel.js";

// Parallax Carousel
const hpbg1 = require("assets/img/homepage/hpbg1.jpg").default;
const hpbg2 = require("assets/img/homepage/hpbg2.jpg").default;
const hpbg3 = require("assets/img/homepage/hpbg3.jpg").default;
const hpbg4 = require("assets/img/homepage/hpbg4.jpg").default;

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const state = useSelector((state) => state);
    console.log(state);
    const { test } = useSelector((state) => state.home);

    const [imageIndex, setImageIndex] = useState(0);

    const { ...rest } = props;
    const parallaxImages = [hpbg1, hpbg2, hpbg3, hpbg4];

    useEffect(() => {
        dispatch(testAction());
    }, []);

    const onNavigateImage = (move) => {
        const newIndex =
            move === "previous"
                ? imageIndex - 1 < 0
                    ? parallaxImages.length - 1
                    : imageIndex - 1
                : imageIndex + 1 > parallaxImages.length - 1
                ? 0
                : imageIndex + 1;
        setImageIndex(newIndex);
    };

    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Khánh Sơn Travel"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "primary",
                }}
                {...rest}
            />
            <Parallax filter image={parallaxImages[imageIndex]}>
                {/* <NavigateBefore
                    className={classes.navigateIcon}
                    onClick={() => onNavigateImage("previous")}
                /> */}
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>
                                Your Story Starts With Us.
                            </h1>
                            <h4>
                                Every landing page needs a small description
                                after the big bold title, that{"'"}s why we
                                added this text here. Add here all the
                                information that can make you or your product
                                create the first impression.
                            </h4>
                            <br />
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play" />
                                Watch video
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
                {/* <NavigateNext
                    className={classes.navigateIcon}
                    onClick={() => onNavigateImage("next")}
                /> */}
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    {/* <IntroduceSection />
                    <TourSection/>
                    <TeamSection />
                    <WorkSection /> */}
                    <FoodCarousel />
                </div>
            </div>
            <Footer />
        </div>
    );
}
