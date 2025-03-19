import { filterBtns} from "../../InterFaces/interFace"
import Button from "../../UI/Button/Button"
import Nav from "../Nav/Nav"
import './layOyt.css'

interface IProps{
    data:(type:string)=>void;
    search:(name:string)=>void;
    selected:string;
}
const LayOut = ({data,search,selected}:IProps) => {
    return (
        <>
        <div className="layout">
        <Nav serch={search} />
            <div className="flex justify-center gap-2.5 mt-10">
                {
                filterBtns.map((item) => (
                    <Button key={item.name} 
                    onClick={()=>data(item.type)}
                    className={`btn-filter ${selected === item.type ? 'active ' : ''}flex align-items-center`}
                    >
                    {item.type}
                </Button>
                ))
                }
            </div>
        </div>
        </>
    )
}
export default LayOut