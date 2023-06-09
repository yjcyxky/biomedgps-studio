import { Modal, Tabs } from "antd";
import React, { useState } from "react";
import { SearchObject, EdgeStat } from './typings';
import TransferTable from './Components/TransferTable';
import type { DataType } from './Components/TransferTable';
import UploadNode from './Components/UploadNode';
import QueryForm from './Components/QueryForm';
import AskQuestion from "./Components/AskQuestion";
import type { APIs } from './typings';

import './AdvancedSearch.less'

type AdvancedSearchProps = {
  visible: boolean;
  onOk?: (searchObj: SearchObject) => void;
  onCancel?: () => void;
  searchObject?: SearchObject;
  edgeStat: EdgeStat[],
  parent?: HTMLElement;
  apis: APIs;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = (props) => {
  const [activeKey, setActiveKey] = useState<string>("single");

  // Batch Tab
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const items = [
    {
      label: "Single Query",
      key: "single",
      children: <QueryForm edgeStat={props.edgeStat} onCancel={props.onCancel}
        onOk={props.onOk} searchObject={props.searchObject} {...props.apis} />
    },
    {
      label: "Batch Query",
      key: "batch",
      children: <TransferTable dataSource={dataSource} onOk={props.onOk} onCancel={props.onCancel} />
    },
    {
      label: "Ask Question",
      key: "question",
      children: <AskQuestion onCancel={props.onCancel} onOk={props.onOk} />
    }
  ]

  return (
    <Modal className="advanced-search" title="Advanced Search" onCancel={props.onCancel}
      open={props.visible} destroyOnClose={true} footer={null}
      getContainer={props.parent ? props.parent : document.body}>
      <Tabs
        defaultActiveKey="single"
        activeKey={activeKey}
        tabPosition="left"
        items={items}
        destroyInactiveTabPane={true}
        onChange={(key) => { setActiveKey(key) }}
        tabBarExtraContent={
          // TODO: add upload function
          activeKey === "batch" ?
            <UploadNode onUpload={(dataSource) => {
              setDataSource(dataSource)
            }} getLabels={props.apis.getLabels} />
            : null
        }
      />
    </Modal>
  );
};

export default AdvancedSearch;
