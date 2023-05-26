import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MathTab from "./MathTab";
import ScienceTab from "./ScienceTab";
import WriteTab from "./WriteTab";
const ToyTabs = () => {
  const [mathToy, setMathToy] = useState([]);
  const [writeToy, setWriteToy] = useState([]);
  const [scienceToy, setScienceToy] = useState([]);

  useEffect(() => {
    fetch("https://brainy-box-server.vercel.app/tabToys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const math = data.filter(
          (singleData) => singleData.category === "math"
        );
        const write = data.filter(
          (singleData) => singleData.category === "write"
        );
        const science = data.filter(
          (singleData) => singleData.category === "science"
        );
        setMathToy(math);
        setWriteToy(write);
        setScienceToy(science);
      });
  }, []);

  return (
    <div>
      <h2 className="gradient-title">Shop by category</h2>
      <Tabs>
        <div className="text-black text-center font-bold">
          <TabList>
            <Tab>Math Toys</Tab>
            <Tab>Science Toys</Tab>
            <Tab>Write Toys</Tab>
          </TabList>
        </div>

        <TabPanel>
          <MathTab toys={mathToy} />
        </TabPanel>
        <TabPanel>
          <ScienceTab toys={scienceToy} />
        </TabPanel>
        <TabPanel>
          <WriteTab toys={writeToy} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyTabs;
