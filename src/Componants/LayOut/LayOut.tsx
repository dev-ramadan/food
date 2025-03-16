import { filterBtns} from "../../InterFaces/interFace"
import Button from "../../UI/Button/Button"
import Nav from "../Nav/Nav"
import './layOyt.css'

interface IProps{
    data:(type:string)=>void
    serch:(name:string)=>void
}
const LayOut = ({data,serch}:IProps) => {

    return (
        <>
        <div className="layout">
        <Nav serch={serch} />
            <div className="flex justify-center gap-2.5 mt-10">
                {
                filterBtns.map((item) => (
                    <Button key={item.name} className="btn-filter flex align-items-center"
                    onClick={()=>data(item.type)}
                    >
                    {item.type.toLocaleUpperCase()}
                </Button>
                ))
                }
            </div>
        </div>
        </>
    )
}
export default LayOut