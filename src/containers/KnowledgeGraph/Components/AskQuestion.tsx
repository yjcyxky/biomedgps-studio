import { Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import './AskQuestion.less';

type AskQuestionProps = {
  onCancel?: () => void;
  onOk?: (data: any) => void;
};

const AskQuestion: React.FC<AskQuestionProps> = (props) => {
  return (
    <div className={"question-queryer"}>
      <h3>Question:</h3>
      <Input.TextArea rows={4} placeholder="Please input your question" maxLength={6} />
      <h3>Query (generated by AI):</h3>
      <Input.TextArea rows={4} placeholder="Wait for your input..." maxLength={6} />
      <div className="button-group">
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button type="primary" onClick={() => {
          if (props.onOk) {
            props.onOk({

            });
          }
        }}>Search</Button>
      </div>
    </div>
  )
};

export default AskQuestion;