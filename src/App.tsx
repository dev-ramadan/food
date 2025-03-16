import { useEffect, useState } from "react"
import LayOut from "./Componants/LayOut/LayOut";
import Cart from "./Componants/Cart/Cart";
import { FoodItem } from "./InterFaces/interFace";
const App = () => {
  const [item,setItem] = useState<FoodItem[]>([]);
  const [selectItem , setSelectItem] = useState('all')
  const [serchItem , setSerchItem] = useState('')

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

    const filterData = item.filter(item => {
      const dataFilter = selectItem === 'all' || item.type === selectItem;
      const filteredItems = serchItem === '' || item.name.toLowerCase().includes(serchItem);
      return dataFilter && filteredItems
    })
  return (
    <>
  <LayOut data={setSelectItem} serch={setSerchItem}/>
  <Cart data={filterData}/>
    </>
  )
}
export default App