import { FC, useContext } from "react"
import { observer } from "mobx-react-lite"

import { Context } from "../../context/context"

const SummaryPanel: FC = () => {
    const { cartStore } = useContext(Context)

    return (
        <div className="panel summary-panel">
            <div className="total-price-block">
                <div>Tolal:</div>
                <div>{cartStore.totalPrice} RUB </div>
            </div>
        </div>
    )
}

export default observer(SummaryPanel)