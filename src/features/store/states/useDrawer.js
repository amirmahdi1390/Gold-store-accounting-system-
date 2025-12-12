import { create } from "zustand";

const useDrawer = create((set) => ({
  isDrawerOpen: false,
  drawerContent: null,
  drawerMode: "add",
  drawerData: null,
  openDrawer: ({ state, content, mode, data }) =>
    set(() => ({
      isDrawerOpen: state? state :false,
      drawerContent: content? content:null,
      drawerMode: mode ? mode : "add",
      drawerData: data? data :null,
    })),
}));

export default useDrawer;
