import React from "react";
import PropTypes from "prop-types";
import "./Tabs.css";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className="bs">
      <AppBar position="static" className="se">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="danger"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Pics" {...a11yProps(0)} className="tabs" />
          <Tab label="Videos" {...a11yProps(1)} className="tabs" />
          <Tab label="Content" {...a11yProps(2)} className="tabs" />
          <Tab label="Creation" {...a11yProps(3)} className="tabs" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img src="ny.png" alt="" className="picss" />
          <img src="ny.png" alt="" className="picss" />
          <img src="ny.png" alt="" className="picss" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa
            fugit inventore tempore quidem saepe amet repellat asperiores beatae
            veritatis, quod ipsam reiciendis molestias soluta et consequatur
          </p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <img src="li.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa
            fugit inventore tempore quidem saepe amet repellat asperiores beatae
            veritatis, quod ipsam reiciendis molestias soluta et consequatur
          </p>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <img src="ny.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa
            fugit inventore tempore quidem saepe amet repellat asperiores beatae
            veritatis, quod ipsam reiciendis molestias soluta et consequatur
          </p>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <img src="ny.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsa
            fugit inventore tempore quidem saepe amet repellat asperiores beatae
            veritatis, quod ipsam reiciendis molestias soluta et consequatur
          </p>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
