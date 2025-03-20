import { useState } from "react"
import LayOut from "./Componants/LayOut/LayOut";
import Cart from "./Componants/Cart/Cart";
import { FoodItem } from "./InterFaces/interFace";
import Serves from "./Serves/Serves";
const App = () => {
  const [item,setItem] = useState<FoodItem[]>([]);
  const [selectItem , setSelectItem] = useState('all')
  const [serchItem , setSerchItem] = useState('')
  const filterData = item.filter(item => {
  const dataFilter = selectItem === 'all' || item.type === selectItem;
  const filteredItems = serchItem === '' || item.name.toLowerCase().includes(serchItem);
      return dataFilter && filteredItems
    });

  return (
    <>
  <Serves setItem={setItem}/>
  <LayOut data={setSelectItem} search={setSerchItem} selected={selectItem}/>
  <Cart data={filterData}/>
    </>
  )
}
export default App