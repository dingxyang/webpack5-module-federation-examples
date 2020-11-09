import React, { useState } from "react";
import { useSelector, useStore } from "react-redux";
import { Tabs, Button } from "antd";
import "antd/dist/antd.css";
const { TabPane } = Tabs;

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const defPanes = [
  { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
]

const HomePage = () => {
  const host = useSelector((state) => state["host"]);
  const store = useStore();
  const state = store.getState();
  const [panes, setPanes] = useState(defPanes);
  const [newTabIndex, setNewTabIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(defPanes[0].key);

  const onChange = activeKey => {
    setActiveKey({ activeKey });
  };

  const onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  const add = () => {
    let tabIndex = newTabIndex;
    const activeKey = `newTab${tabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    setPanes(panes);
    setNewTabIndex(tabIndex+1);
    setActiveKey(activeKey);
  };

  return (
    <div style={style}>
      <h1>Home Page</h1>
      <h2>Welcome to the future!</h2>
      <p>
        <em>a page being provided by App 1</em>
        {host.key}
      </p>
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={onEdit}
        >
          {panes.map((pane) => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
