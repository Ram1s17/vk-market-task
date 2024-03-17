import { FC, useContext } from "react"
import { Card } from "antd"
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { observer } from "mobx-react-lite"

import { Product } from "../../types/types"
import { Context } from "../../context/context"


interface ProductCardProps extends Product {
    count: number;
}

const ProductCard: FC<ProductCardProps> = ({ id, image, title, description, price, count }) => {
    const { cartStore } = useContext(Context);

    return (
        <Card
            className="product-card"
            cover={
                <img
                    alt={title}
                    src={image}
                />
            }
            actions={[
                <MinusCircleOutlined
                    className={count === 1 ? 'cursor-default color-red' : ''}
                    onClick={() => cartStore.decreaseProductCount(id)}
                />,
                <div className="cursor-default">
                    {count}
                </div>,
                <PlusCircleOutlined
                    className={count === 10 ? 'cursor-default color-red' : ''}
                    onClick={() => cartStore.increaseProductCount(id)}
                />,
                <div className="cursor-default">
                    Price: {price} RUB
                </div>,
                <DeleteOutlined
                    onClick={() => cartStore.deleteProduct(id)}
                />
            ]}
        >
            <Card.Meta
                title={title}
                description={description}
            />
        </Card>
    )
}

export default observer(ProductCard)