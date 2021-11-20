import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import NewTour from "../Components/NewTour";
import CustomInput from "components/CustomInput/CustomInput";
import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import MuiSlider from '@mui/material/Slider';
import Button from "components/CustomButtons/Button.js";
import Slider from "react-slick";

const useStyles = makeStyles(styles);

export default function ProductSection() {
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
    const [value, setValue] = useState([20, 37]);
    const classes = useStyles();

    useEffect(() => {
        // Style the slider next/prev
        const arror = document.getElementsByClassName("slick-arrow");
        for (let i = 0; i < arror.length; i++) {
            arror[i].style.height = "auto";
            arror[i].style.width = "10%";
            arror[i].style.opacity = "0.8";
        }

        // Style the slider slick dots
        const slickDots = document.getElementsByClassName("slick-dots");
        for (let i = 0; i < slickDots.length; i++) {
            slickDots[i].style.marginBottom = "-3rem";
        }
    });

    const handleChangeRange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>New Tour</h2>
                    </GridItem>
                </GridContainer>
                <div style={{textAlign: 'justify'}}>
                    <Slider {...sliderSettings}>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                        <NewTour/>
                    </Slider>
                </div>
            </div>

            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Những tour hiện có</h2>
                    </GridItem>
                </GridContainer>
                <div style={{display: 'flex', flexDirection: 'row', textAlign: 'justify'}}>
                    <div style={{minWidth: 250}}>
                        <h4 className={classes.title}>Bộ lọc</h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                border: '1px solid #cdcdcd',
                                color: 'black',
                                borderRadius: 5
                            }}
                        >
                            <TextField
                                style={{margin: '15px 15px 0 15px'}}
                                label="Tên tour"
                                color="secondary"
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Search/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                style={{margin: '15px 15px 0px 15px'}}
                                label="Kiểu du lịch"
                                color="secondary"
                                variant="outlined"
                                size="small"
                            />
                            <h6 className={classes.priceRange}>Khoảng giá</h6>
                            <MuiSlider
                                style={{margin: 'auto', marginTop: '-10px', width: '85%'}}
                                getAriaLabel={() => 'Khoảng giá'}
                                value={value}
                                onChange={handleChangeRange}
                                valueLabelDisplay="auto"
                            />
                            <h5 style={{margin: '0 0 15px 10px'}}>${value[0]} - ${value[1]}</h5>
                            <Button
                                style={{margin: '15px 60px'}}
                                color="primary"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                    <GridContainer style={{marginLeft: 30}}>
                        {[0,1,2,3,4,5,6,7,8].map((index)=>(
                            <GridItem key={index} xs={12} sm={6} md={4}>
                                <NewTour/>
                            </GridItem>
                        ))}
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
