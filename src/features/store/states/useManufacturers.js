import { create } from "zustand";
import manufacturersList from "../utils/manufacturersList";
const useManufacturers = create((set) => ({
  manufacturers:manufacturersList ,
  addManufacturer: (currentValue) =>
    set((prev) => ({
      manufacturers:{...prev.manufacturers,body:[...prev.manufacturers.body,currentValue]}
    })),
    editManufacturer: (currentValue,index) =>
      set((prev) => {
        let currentBody = [...prev.manufacturers.body]
        currentBody[index]= currentValue
        console.log(index);
        
        return {manufacturers:{...prev.manufacturers,body:currentBody}}
      }),

}));

export default useManufacturers
