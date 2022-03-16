import Tabels from "./components/table";
import { Image, Layout, Menu, Space, Spin } from "antd";
import "./styles.css";
import { useEffect, useState } from "react";
import getData from './services/analytics.service'
const { Header, Content, Footer } = Layout;

export default function App() {
  const [data, setData] = useState([])
  useEffect(async () => {
    const res = await getData()
    setData(res)
  }, [])
  return (
    <Layout className="layout">

      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <Image preview={false} src="/logo.png" width={160} />
        </Menu.Item>
      </Menu>

      <Content style={{
        padding: '20px 5px'
      }}>
        < div className="App" >
          {data && data.length ? <Tabels data={data} /> :
            <Space size="middle">
              <Spin size="large" />
            </Space>
          }
        </div>
      </Content >
      <Footer style={{ textAlign: 'center' }}>Higheredlab ©2022 </Footer>
    </Layout >
  );
}
