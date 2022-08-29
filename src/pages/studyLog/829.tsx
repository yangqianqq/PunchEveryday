import { useState, Component } from 'react';
import { Row, Col } from 'antd';
import './index.scss';
import ChildrenModule from './modules/829/ChildrenModule';
export default function Index() {
  const [targetList, setTargetList] = useState([
    { label: '新建项目并上传github', status: 1 },
    { label: 'react学习', status: 0 },
  ]);
  const [num, setNum] = useState(0);

  console.log(num);

  return (
    <div>
      <h1>本日计划</h1>
      <Row gutter={20}>
        <Col span={6}>
          <ul>
            {targetList.map((i) => (
              <li key={i.label}>
                {i.label} <span>{i.status === 0 ? '🔲' : '✅'}</span>
              </li>
            ))}
          </ul>
        </Col>
        <Col span={18}>
          <ChildrenModule data={'杨倩'}></ChildrenModule>

          {num}
          <button
            onClick={() => {
              setTimeout(() => {
                setNum(num + 1);
              }, 1);
              setTimeout(() => {
                setNum((val) => val + 1);
              }, 1);
              setTimeout(() => {
                setNum(43);
              }, 1);
            }}
          >
            点击
          </button>
        </Col>
      </Row>
    </div>
  );
}
