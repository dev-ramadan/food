import { useEffect } from "react";

interface IProps{
setItem:(item:[])=>void
}
const Serves = ({ setItem}:IProps) => {
      useEffect(()=>{
        const fetchData = async () => {
          try { 
              const getData = await fetch("https://api.npoint.io/215213174d487054a5b9");
              const res =await getData.json()
              setItem(res)
            }catch(error){
              console.log(error)
            }
          }
          fetchData()
        },[])
        return( <></> );
}
export default Serves