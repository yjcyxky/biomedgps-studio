import {
  BarChartOutlined,
  EditOutlined,
  FullscreenExitOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Button, Col, Drawer, Row, Space, Tabs, Tooltip } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { useIntl } from 'umi';

import ChartList from '../ChartList';
import LogViewer from '../LogViewer/indexLog';
import MarkdownViewer from '../MarkdownViewer';
import PlotlyViewer from '../PlotlyViewer/indexClass';

import { getPlotlyData } from '@/services/swagger/Charts';
import type { ChartResult } from '../ChartList/data';

import './index.less';
import { langData } from './lang';

const { TabPane } = Tabs;

export type ResultPanelProps = {
  onClickItem: (chart: string, result?: ChartResult) => void;
  taskId: string;
  logLink: string;
  results: string[];
  charts: string[];
  responsiveKey: number | string;
};

type UIContext = Record<string, any>;

const ResultPanel: React.FC<ResultPanelProps> = (props) => {
  const intl = useIntl();

  const uiContext: UIContext = {};
  Object.keys(langData).forEach((key) => {
    uiContext[key] = intl.formatMessage(langData[key]);
  });

  const { onClickItem, logLink, responsiveKey, taskId, results, charts } = props;

  const [plotlyEditorMode, setPlotlyEditorMode] = useState<string>('Plotly');
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);
  const [editBtnActive, setEditBtnActive] = useState<boolean>(false);
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const [resultMarkdownLink, setResultMarkdownLink] = useState<string | null>(null);
  const [dataSources, setDataSources] = useState<object>({});
  const [dataSourceOptions, setDataSourceOptions] = useState<object[]>([]);

  useEffect(() => {
    if (charts.length > 0) {
      console.log('Chart Task: ', taskId);
      getPlotlyData({ filelink: charts[0] }).then((response) => {
        setDataSources(response);
        setDataSourceOptions(
          Object.keys(response).map((name) => ({
            value: name,
            label: name,
          })),
        );
      });
    }
  }, [results, charts]);

  useEffect(() => {
    if (results.length > 0) {
      setResultMarkdownLink(results[0]);
    }
  }, [results]);

  useEffect(() => {
    if (logLink.length > 0) {
      setEditBtnActive(true);
    } else {
      setEditBtnActive(false);
    }
  }, [logLink]);

  const resultOperations = (
    <Space>
      <Tooltip title="Edit the Chart">
        <Button
          disabled={!editBtnActive}
          type="primary"
          icon={<EditOutlined />}
          onClick={() => {
            setPlotlyEditorMode('PlotlyEditor');
          }}
        >
          {uiContext.edit}
        </Button>
      </Tooltip>
      <Tooltip title="List all charts">
        <Button
          style={{ display: 'none' }}
          onClick={() => {
            setChartsVisible(true);
          }}
          icon={<BarChartOutlined />}
        >
          {uiContext.charts}
        </Button>
      </Tooltip>
      <Tooltip title="List all history">
        <Button
          style={{ display: 'none' }}
          onClick={() => {
            setHistoryVisible(true);
          }}
          icon={<HistoryOutlined />}
        >
          {uiContext.history}
        </Button>
      </Tooltip>
    </Space>
  );

  console.log('ResultPanel updated');

  return (
    <Row className="result-panel">
      <Tabs defaultActiveKey="1" className="tabs-result" tabBarExtraContent={resultOperations}>
        <TabPane
          tab={
            <span>
              <SnippetsOutlined />
              {uiContext.results}
            </span>
          }
          key="1"
        >
          <Col id="result-container" className="result-container">
            <MarkdownViewer url={resultMarkdownLink} />
          </Col>
        </TabPane>
        <TabPane
          tab={
            <span>
              <BarChartOutlined />
              {uiContext.figure}
            </span>
          }
          key="2"
        >
          <Col
            id="graph-container"
            className={`result-container
        ${plotlyEditorMode === 'PlotlyEditor' ? 'full-screen' : 'no-full-screen'}`}
          >
            {plotlyEditorMode === 'PlotlyEditor' ? (
              <Button
                className="exit-editor"
                onClick={() => {
                  setPlotlyEditorMode('Plotly');
                }}
              >
                <FullscreenExitOutlined />
                Exit Editor
              </Button>
            ) : null}
            <PlotlyViewer
              responsiveKey={responsiveKey}
              dataSources={dataSources}
              dataSourceOptions={dataSourceOptions}
              plotlyId={charts[0]}
              key={charts[0]}
              mode={plotlyEditorMode}
            ></PlotlyViewer>
          </Col>
        </TabPane>
        <TabPane
          tab={
            <span>
              <IssuesCloseOutlined />
              {uiContext.log}
            </span>
          }
          key="3"
        >
          <LogViewer height="calc(100vh - 200px)" url={logLink} />
        </TabPane>
      </Tabs>
      <Drawer
        title="Chart Store"
        placement="right"
        closable
        width="70%"
        onClose={() => {
          setChartsVisible(false);
        }}
        visible={chartsVisible}
      >
        <ChartList
          onClickItem={(chart, result) => {
            onClickItem(chart.short_name, result);
            setChartsVisible(false);
          }}
        ></ChartList>
      </Drawer>

      <Drawer
        title="Chart History"
        placement="right"
        closable
        width="70%"
        onClose={() => {
          setHistoryVisible(false);
        }}
        visible={historyVisible}
      >
        {/* <HistoryTable
          onClickItem={(chart, result) => {
            onClickItem(chart, result);
            setHistoryVisible(false);
          }}
        ></HistoryTable> */}
      </Drawer>
    </Row>
  );
};

export default memo(ResultPanel);
