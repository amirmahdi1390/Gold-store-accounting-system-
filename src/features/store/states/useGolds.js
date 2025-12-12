import { create } from "zustand";
import goldsList from "../utils/goldsList";
const useGolds = create((set) => ({
  golds: goldsList,
  addGold: (currentValue) =>
    set((prev) => ({
      golds:{...prev.golds,body:[...prev.golds.body,currentValue]}
    })),
    editGold: (currentValue,index) =>
      set((prev) => {
        let currentBody = [...prev.golds.body]
        currentBody[index]= currentValue
        console.log(index);
        
        return {golds:{...prev.golds,body:currentBody}}
      }),
      deleteGold: (index) =>
        set((prev) => ({
        golds:{...prev.golds,body: prev.golds.body.filter((element,eIndex)=>(eIndex !== index))}
        })),

}));

export default useGolds;
