import { FoodItem } from "../../InterFaces/interFace";
import Button from "../../UI/Button/Button";
import "./cart.css";



interface IProps {
  data: FoodItem[];
}
const Cart = ({ data }: IProps) => {
  return (
    <>
      <div className="back">
        <div className="cart">
          {data.map((item: FoodItem) => (
            <div key={item.name} className="FoodCard">
              <div className="food_image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
                <Button className="price-btn"> ${item.price}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cart;
