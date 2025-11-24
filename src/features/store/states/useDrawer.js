import { create } from "zustand";


const useDrawer = create((set) => ({
    drawerState: false,
    setDrawerState: (currentValue) => set(() => ({drawerState: currentValue})) 
}))

export default useDrawer