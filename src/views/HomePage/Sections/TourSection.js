import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

// @mui/icons-material
import InfoIcon from "@mui/icons-material/Info";

// react component for creating beautiful carousel
import Carousel from "react-slick";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import HomeCarousel from "./HomeCarousel";
import NavPills from "components/NavPills/NavPills";
import Card from "components/Card/Card";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import Slider from "react-slick";

const useStyles = makeStyles(styles);

export default function TourSection() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const classes = useStyles();
    const [pageWidth, setPageWidth] = useState(
        document.documentElement.offsetWidth
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // Style the image list on load
        const imageListItem = document.getElementsByClassName("MuiImageListItem-root");
        for (let i = 0; i < imageListItem.length; i++) {
            imageListItem[i].style.overflow = "hidden";
            imageListItem[i].style.marginRight = "5px";
        }
        // Style the slider next/prev
        const arror = document.getElementsByClassName("slick-arrow");
        for (let i = 0; i < arror.length; i++) {
            arror[i].style.height = "auto";
            arror[i].style.width = "10%";
            arror[i].style.opacity = "0.8";
        }
        return () => window.removeEventListener("resize", handleResize);
    });

    const handleResize = () => {
        setPageWidth(document.documentElement.offsetWidth);
    };
    return (
        <div>
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>
                            Sống những trải nghiệm khó quên
                        </h2>
                        <h4 className={classes.description}>
                            Hạnh phúc ở mỗi hành trình với Khánh Sơn.
                        </h4>
                    </GridItem>
                </GridContainer>
                <ImageList
                    style={{
                        width: pageWidth > 1450 ? "120%" : "100%",
                        marginLeft: pageWidth > 1450 ? "-10%" : 0,
                    }}
                    rowHeight={350}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img + "1"}>
                            <img
                                className={classes.imageItem}
                                // src={`${item.img}?w=248&fit=crop&auto=format`}
                                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={item.img}
                                srcSet={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                // actionIcon={
                                //     <IconButton
                                //         sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                //         aria-label={`info about ${item.title}`}
                                //     >
                                //         <InfoIcon />
                                //     </IconButton>
                                // }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            {/* <HomeCarousel /> */}

            {/* Places section */}
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>
                            Những địa điểm nổi bật
                        </h2>
                        <h4 className={classes.description}>
                            Khánh Sơn có những địa điểm đẹp tuyệt vời ở khắp
                            nơi, luôn sẵn sàng chờ bạn đến tham quan và khám
                            phá.
                        </h4>
                    </GridItem>
                </GridContainer>
                {/* <ImageList
                    style={{
                        width: pageWidth > 1520 ? "130%" : "100%",
                        marginLeft: pageWidth > 1520 ? "-15%" : 0,
                    }}
                    rowHeight={350}
                    cols={4}
                >
                    {itemData2.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                className={classes.imageItem}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                // actionIcon={
                                //     <IconButton
                                //         sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                //         aria-label={`info about ${item.title}`}
                                //     >
                                //         <InfoIcon />
                                //     </IconButton>
                                // }
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}

                <Slider {...sliderSettings}>
                    {itemData2.map((item) => (
                        <ImageList rowHeight={350}>
                            <ImageListItem key={item.img}>
                                <img
                                    className={classes.imageItem}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    // actionIcon={
                                    //     <IconButton
                                    //         sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    //         aria-label={`info about ${item.title}`}
                                    //     >
                                    //         <InfoIcon />
                                    //     </IconButton>
                                    // }
                                />
                            </ImageListItem>
                        </ImageList>
                    ))}
                </Slider>
            </div>

            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Không dừng lại ở đó</h2>
                        <h4 className={classes.description}>
                            Lorem ipsum dolor sit amet, con et con
                        </h4>
                    </GridItem>
                </GridContainer>

                <GridContainer
                    style={{ flexWrap: "nowrap", marginTop: "20px" }}
                >
                    <GridItem
                        xs={12}
                        sm={12}
                        md={8}
                        lg={6}
                        style={{ minWidth: "500px" }}
                    >
                        <NavPills
                            color="primary"
                            tabs={[
                                {
                                    tabButton: "Dashboard",
                                    tabIcon: Dashboard,
                                    tabContent: (
                                        <span
                                            style={{
                                                color: "black",
                                                textAlign: "justify",
                                            }}
                                        >
                                            <p>
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                            <br />
                                            <p>
                                                Dramatically visualize customer
                                                directed convergence without
                                                revolutionary ROI.
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                            <br />
                                            <p>
                                                Dramatically visualize customer
                                                directed convergence without
                                                revolutionary ROI.
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                        </span>
                                    ),
                                },
                                {
                                    tabButton: "Schedule",
                                    tabIcon: Schedule,
                                    tabContent: (
                                        <span
                                            style={{
                                                color: "black",
                                                textAlign: "justify",
                                            }}
                                        >
                                            <p>
                                                Efficiently unleash cross-media
                                                information without cross-media
                                                value. Quickly maximize timely
                                                deliverables for real-time
                                                schemas.
                                            </p>
                                            <br />
                                            <p>
                                                Dramatically maintain
                                                clicks-and-mortar solutions
                                                without functional solutions.
                                                Dramatically visualize customer
                                                directed convergence without
                                                revolutionary ROI.
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                        </span>
                                    ),
                                },
                                {
                                    tabButton: "Tasks",
                                    tabIcon: List,
                                    tabContent: (
                                        <span
                                            style={{
                                                color: "black",
                                                textAlign: "justify",
                                            }}
                                        >
                                            <p>
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                            <br />
                                            <p>
                                                Dramatically visualize customer
                                                directed convergence without
                                                revolutionary ROI.
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                            <br />
                                            <p>
                                                Dramatically visualize customer
                                                directed convergence without
                                                revolutionary ROI.
                                                Collaboratively administrate
                                                empowered markets via
                                                plug-and-play networks.
                                                Dynamically procrastinate B2C
                                                users after installed base
                                                benefits.
                                            </p>
                                        </span>
                                    ),
                                },
                            ]}
                        />
                    </GridItem>
                    <GridContainer style={{ marginLeft: "20px" }}>
                        <GridItem xs={12} sm={12} md={6} lg={6}>
                            <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                            />
                            <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} lg={6}>
                            <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                            />
                            <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                            />
                        </GridItem>
                    </GridContainer>
                </GridContainer>
            </div>
        </div>
    );
}

const itemData = [
    {
        img: "https://pix10.agoda.net/hotelImages/546/546897/546897_15061016260029175407.jpg",
        title: "Place #1",
        author: "Place #1 info",
    },
    {
        img: "https://jptraveltime.com/wp-content/uploads/2019/12/western-looks-jptraveltime.jpg",
        title: "Place #2",
        author: "Place #2 info",
    },
    {
        img: "https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-da-lat-tu-tren-dinh-doi.jpg",
        title: "Place #3",
        author: "Place #3 info",
    },
    {
        img: "https://www.chudu24.com/wp-content/uploads/2017/03/ho-xuan-huong-dalat.jpg",
        title: "Place #4",
        author: "Place #4 info",
    },
];

const itemData2 = [
    {
        img: "https://pix10.agoda.net/hotelImages/546/546897/546897_15061016260029175407.jpg",
        title: "Place #1",
        author: "Place #1 info",
    },
    {
        img: "https://jptraveltime.com/wp-content/uploads/2019/12/western-looks-jptraveltime.jpg",
        title: "Place #2",
        author: "Place #2 info",
    },
    {
        img: "https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-da-lat-tu-tren-dinh-doi.jpg",
        title: "Place #3",
        author: "Place #3 info",
    },
    {
        img: "https://www.chudu24.com/wp-content/uploads/2017/03/ho-xuan-huong-dalat.jpg",
        title: "Place #4",
        author: "Place #4 info",
    },
    {
        img: "https://c0.wallpaperflare.com/preview/707/428/914/outdoor-forest-theung-dalat.jpg",
        title: "Place #5",
        author: "Place #5 info",
    },
    {
        img: "https://c0.wallpaperflare.com/preview/275/946/358/empty-road.jpg",
        title: "Place #6",
        author: "Place #6 info",
    },
    {
        img: "https://uhdwallpapers.org/uploads/converted/19/04/21/lights-on-the-road-of-dalat-vietnam-1920x1080_949644-mm-90.jpg",
        title: "Place #7",
        author: "Place #7 info",
    },
    {
        img: "https://gonatour.vn/vnt_upload/news/08_2021/du_lich_da_lat.jpg",
        title: "Place #8",
        author: "Place #8 info",
    },
];
