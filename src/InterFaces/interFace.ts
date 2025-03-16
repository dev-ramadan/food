export interface FoodItem {
    id: number;
    name: string;
    text: string;
    image: string;
    price: number;
    type:string
  }

  export  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];