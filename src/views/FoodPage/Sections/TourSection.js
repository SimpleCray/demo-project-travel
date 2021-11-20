import React from "react";
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

const useStyles = makeStyles(styles);

export default function TourSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>
                        Sống những trải nghiệm khó quên
                    </h2>
                    <h5 className={classes.description}>
                        Khánh Hoà không chỉ là xứ trầm đảo yến mà còn có cả
                        những không gian núi non hùng vĩ.
                        <br/>
                        Nếu phía đông Khánh
                        Hoà nổi tiếng với những bãi biển và hòn đảo xinh đẹp thì
                        phía tây Khánh Hoà lại có những ngọn núi hùng vĩ. Đồng
                        thời ở Khánh Sơn còn chưa đựng những nét đẹp về văn hoá
                        của đồng bào nơi đây với những cồng chiêng, đàn đá, …
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Free Chat"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={Chat}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Verified Users"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={VerifiedUser}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Fingerprint"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={Fingerprint}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
