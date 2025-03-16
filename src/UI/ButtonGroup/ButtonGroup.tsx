import './buttonGroup.css'
interface IProps{

}
const ButtonGroup = ({ }:IProps) => {
    return (
        <>
        <div className="button-group">
            <button>item1</button>
            <button>item2</button>
            <button>item3</button>
            <button>item4</button>
        </div>
        </>
    )
}
export default ButtonGroup