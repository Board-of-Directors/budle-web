import style from "./EstablishmentList.module.css"
import EstablishmentGroup from "../establishment-group/EstablishmentGroup";

const EstablishmentList = (props) => {
    return (
        <div className={style.wrapper}>
            {
                props.data.map(establishment => {
                    return <EstablishmentGroup
                        establishmentName={establishment.establishmentName}
                        branches={establishment.branches}
                    />
                })
            }
        </div>
    )
}

export default EstablishmentList