import { Card } from 'antd';
import { ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function ProductCard(props) {
    let { element, setCart, cart } = props;


    let addCart = () => {
        if (cart.length <= 0) {
            setCart([{ ...element, amount: 1 }]);
        } else {
            let isAdd = true;
            let newCart = cart.map((e) => {
                if (e.id == element.id) {
                    let cartt = [...cart, { ...e, amount: e.amount + 1 }];
                    console.log(cartt)
                    return cartt
                } else {
                    let cartt = [...cart, { ...element, amount: 1 }];
                    return cartt
                }
            });
            setCart(newCart[0])
        }
    }


    return (
        <div style={{ margin: " 6px " }}>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={element.img}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <ShoppingCartOutlined key="cart" onClick={() => addCart()} />
                ]}
            >
                <Meta

                    title={element.title}
                    description={element.price}

                />
                {element.amount}
            </Card>
        </div >
    )
}
