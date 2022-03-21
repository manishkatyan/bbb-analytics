import Tabels from "./components/table";
import { Image, Typography, Layout, Menu, Space, Spin } from "antd";
import "./styles.css";
import { useEffect, useState } from "react";
import getData from './services/analytics.service'
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function App() {
  const [data, setData] = useState([])
  useEffect(async () => {
    const res = await getData()
    let soretdData = res.sort(function (a, b) {
      return new Date(b.createdOn) - new Date(a.createdOn);
    });
    setData(soretdData)
  }, [])
  return (

    <div className="container-fluid px-5 ">
      <div className="mt-4 mb-4">
        <Title className="mb-1 pb-0 " level={3}>BigBlueButton Analytics</Title>
        <Text className=" mt-0 pt-0 " >Access analytics of your BigBlueButton online classes</Text>
      </div>
      < div className="App" >
        {data && data.length ?
          <div className="rounded shadow mb-4 px-1">
            <Tabels data={data} />
          </div> :
          <Space size="middle">
            <Spin size="large" />
          </Space>
        }
      </div>
      <Footer style={{ textAlign: 'center' }}><a href="https://higheredlab.com">HigherEdLab.com ©2022</a> </Footer>

    </div >
  );
}
