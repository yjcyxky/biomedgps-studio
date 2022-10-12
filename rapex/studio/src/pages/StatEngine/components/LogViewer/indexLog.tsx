// @ts-nocheck
import { getPlotlyData } from '@/services/swagger/Charts';
import { DownloadOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Col, Empty, Space, Spin } from 'antd';
import { memo, useEffect, useState } from 'react';
import ReactAnsi from 'react-ansi';

import './index.less';

export type LogProps = {
  url: string;
  height: string;
};

// // @ts-ignore
// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // 保存新回调
//   useEffect(() => {
//     savedCallback.current = callback;
//   });

//   // 建立 interval
//   // @ts-ignore
//   useEffect(() => {
//     function tick() {
//       // @ts-ignore
//       savedCallback.current();
//     }

//     if (delay !== null) {
//       const id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }

//     return null;
//   }, [delay]);
// }

const LogViewer: React.FC<LogProps> = (props) => {
  const { url, height } = props;

  const [log, setLog] = useState<string>('');
  // const [status, setStatus] = useState<string>('');

  const buttons = (
    <Space style={{ marginTop: '5px', display: 'flex', justifyContent: 'flex-end' }}>
      <Button icon={<SyncOutlined />}>Force Update</Button>
      <Button icon={<DownloadOutlined />}>Download</Button>
    </Space>
  );

  const loadLog = () => {
    if (url.length > 0) {
      const interval = setInterval(() => {
        getPlotlyData({
          filelink: url,
        }).then((response) => {
          console.log('Load Log: ', response);
          setLog(response.msg);
          // setStatus(response.status);
          clearInterval(interval);
        });
      }, 1000);
    }
  };

  useEffect(loadLog, [url]);

  console.log('LogViewer updated');

  if (!url) {
    return <Empty />;
  }

  if (log) {
    return (
      <Col className="log-container">
        <ReactAnsi bodyStyle={{ height: height, overflowY: 'auto' }} log={log} />
        {buttons}
      </Col>
    );
  }

  return (
    <Col className="spinning">
      <Spin />
    </Col>
  );
};

export default memo(LogViewer);
