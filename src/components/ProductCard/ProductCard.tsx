import { FC } from "react"
import { Card } from "antd"
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"

import { Product } from "../../types/types"


interface ProductCardProps extends Product {
    count: number;
}

const ProductCard: FC<ProductCardProps> = ({ image, title, description, price, count }) => {
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
                <MinusCircleOutlined className={count === 1 ? 'cursor-default color-red' : ''} />,
                <div className="cursor-default">{count}</div>,
                <PlusCircleOutlined className={count === 10 ? 'cursor-default color-red' : ''} />,
                <div className="cursor-default">Price: {price}</div>,
                <DeleteOutlined />
            ]}
        >
            <Card.Meta
                title={title}
                description={description}
            />
        </Card>
    )
}

export default ProductCard