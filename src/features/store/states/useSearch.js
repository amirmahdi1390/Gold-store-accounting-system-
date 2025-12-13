import { create } from "zustand";
import useGolds from "./useGolds";
import useManufacturers from "./useManufacturers"

let fieldStore = {
    manufacturers: [
        'companyName', 'contactPerson', 'phone', 'email', 'about', 'age', 'gender'
    ],
    golds: ["category", "quantity", "totalWeight"]
}

let listStore = {
    manufacturers: useManufacturers,
    golds: useGolds
}

const useSearch = create((set) => ({
  searchedItem: null,
  searchItem: (currentValue, list) => {
    let searchFields = fieldStore[list]
    let searchList = listStore[list]

    let data = searchList.getState();
    let fullList = data[list] // کل آبجکت لیست
    let listBody = fullList?.body || []
    let searchValue = currentValue.toLowerCase().trim()
    
    // اگر سرچ خالی بود، کل آبجکت لیست رو برگردون
    if (searchValue == "") {
        set({ searchedItem: null});
        return;
    }
    
    // منطق فیلتر و سام
    let filteredList = listBody.filter(item => {
      return searchFields.some(field => {
        let value = item[field]
        if (value) {
          let stringValue = value.toString().toLowerCase()
          return stringValue.includes(searchValue)
        }
        return false
      })
    })
    
    // ساخت آبجکت جدید با body فیلتر شده
    let result = {
      ...fullList,
      body: filteredList
    }
    
    set({ searchedItem: result })
  }
}))

export default useSearch