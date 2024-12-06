import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import "./Homethird.css";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Homethird() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <section className="tab-sec">
      <Container>
        <Box className="bs">
          <AppBar position="static" className="se">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="danger"
              textColor="inherit"
              variant="scrollable"
              allowScrollButtonsMobile
              aria-label="full width tabs example"
            >
              <Tab label="Pics" {...a11yProps(0)} className="tabs" />
              <Tab label="App Design" {...a11yProps(1)} className="tabs" />
              <Tab label="Branding" {...a11yProps(2)} className="tabs" />
              <Tab label="It Solution" {...a11yProps(3)} className="tabs" />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="p-grid">
                <img
                  src="f1.jpg"
                  alt=""
                  className="picss"
                  data-aos="fade-left"
                  data-aos-duration="4000"
                />
                <img
                  src="f2.jpg"
                  alt=""
                  className="picss"
                  data-aos="fade-left"
                  data-aos-duration="4000"
                />
                <img
                  src="f3.jpg"
                  alt=""
                  className="picss"
                  data-aos="fade-left"
                  data-aos-duration="4000"
                />
                <img
                  src="f4.jpg"
                  alt=""
                  className="picss"
                  data-aos="fade-right"
                  data-aos-duration="4000"
                />
                <img
                  src="f5.jpg"
                  alt=""
                  className="picss"
                  data-aos="fade-right"
                  data-aos-duration="4000"
                />
                <img
                  src="f6.jpg"
                  alt=""
                  className="picss"
                  data-aos="fade-right"data-aos-duration="4000"
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <img src="f1.jpg" alt="" className="picss" />
              <img src="f5.jpg" alt="" className="picss" />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <img src="f3.jpg" alt="" className="picss" />
              <img src="f4.jpg" alt="" className="picss" />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <img src="f2.jpg" alt="" className="picss" />
              <img src="f6.jpg" alt="" className="picss" />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Container>
    </section>
  );
}
