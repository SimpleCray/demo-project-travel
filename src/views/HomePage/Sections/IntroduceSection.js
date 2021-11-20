import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Train, KingBed, Public } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function IntroduceSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Trải Nghiệm Du Lịch"
                            description="Là một huyện miền núi nằm ở phía Tây của tỉnh Khánh Hoà. Khánh Sơn được ví như Đà Lạt thứ 2 của cả nước."
                            icon={Train}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Nơi Ở Tiện Nghi"
                            description="Khách sạn sang trọng và tiện nghi với những cảnh vật tuyệt vời. Đảm bảo cho du khách nơi nghỉ ngơi thoải mái."
                            icon={KingBed}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Travel Guide"
                            description="Đội ngũ HDV năng động và nhiều kinh nghiệm sẽ luôn đồng hành cùng bạn trong quá trình tham quan."
                            icon={Public}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
