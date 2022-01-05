import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import Product from './Product';
import CartPage from './CartPage';
import { Route, Link } from "react-router-dom"


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default function layout(props) {
    let { products, cart, setCart } = props;
    let countCart = cart.reduce((start, next) => start += next.amount, 0);
    localStorage.setItem('cart', JSON.stringify(cart))
    return (
        <div>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ display: "flex", justifyContent: 'flex-end' }}>
                        <Menu.Item key="3"> <Link to="/cart">{countCart}<ShoppingCartOutlined></ShoppingCartOutlined></Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Home">
                                <Menu.Item key="1"><Link to="/products">Products</Link> </Menu.Item>
                                <Menu.Item key="2"><Link to="/cart">Cart</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Product</Breadcrumb.Item>
                            <Breadcrumb.Item>Cart</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Route exact path="/cart" > <CartPage cart={cart} setCart={setCart} ></CartPage> </Route>
                            <Route axact path="/products">  <Product products={products} setCart={setCart} cart={cart} /> </Route>

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div >
    )
}
