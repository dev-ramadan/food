import './nav.css'
interface IProps{
serch:(name:string)=>void
}
const Nav = ({serch}:IProps) => {
    return (
        <>
        <div className='pirant container mx-auto'>
            <div className="logo"><img src="logo.svg" alt="logo" /></div>
            <div className="search">
                <input type="text" placeholder="Search Food" 
                onChange={(e) => serch(e.target.value.toLowerCase())}
                />
            </div>
        </div>
        </>
    )
}
export default Nav