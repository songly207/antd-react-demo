import React, { Component } from 'react';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Menu, Breadcrumb } from 'antd';
import { Icon } from 'antd';
import FreeScrollBar from 'react-free-scrollbar';
import './App.css';


const SubMenu = Menu.SubMenu;

class SidMenu extends React.Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div style={{ width: 200, height: '100%'}}>
                <FreeScrollBar autohide='true' fixed='true'>
              <Menu
                  defaultSelectedKeys={['5']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
              >
               
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="5"><Icon type="area-chart" />Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                </Menu.Item>
                    </Menu>
                </FreeScrollBar>
            </div>
        );
    }
}

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'100%'}}>
        <Layout style={{ height: '100%' }}>
            <Header>
            </Header>
            <Layout>
                <Sider >
                    <SidMenu/>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0px 0 0 16px' }}>
                        <Breadcrumb separator=">" style={{ float:'left' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Button/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
