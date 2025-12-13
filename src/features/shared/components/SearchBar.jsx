import { ActionIcon, Button, Input, Transition } from '@mantine/core'
import React, { useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
import useSearch from '../../store/states/useSearch';
function SearchBar({listType}) {
    let [isSearchOpen,setSearchOpen] = useState(false)
    let [searchedText,setSearchedText] = useState("")
    let {searchItem} = useSearch()
    function handleSearch(value) {
      setSearchedText(value)
      searchItem(value,listType)
    }

  return (
    <>
  
<div
  onMouseOver={()=>{
    setSearchOpen(true)
  }}
  onMouseLeave={()=>{
    if(searchedText==""){
      setSearchOpen(false)
    }
  }}
  className={`p-4 overflow-hidden justify-center w-5 h-5 duration-400 border-2  border-[gold] rounded-full shadow-[2px_2px_20px_rgba(0,0,0,0.08)]  flex flex-row-reverse group  items-center ${isSearchOpen?"w-[270px] pr-2 pl-0 duration-500 ":null}`}
>
  <div className="flex items-center justify-center fill-white">
   <MdOutlineSearch color='gold' className='text-[18px]'></MdOutlineSearch>
  </div>
  <Input
    type="text"
    variant="none"
    placeholder='search everything you want'
    className="w-full"
    value={searchedText}
    onChange={(e)=>{
      handleSearch(e.target.value)
    }}
  />
</div>
    </>
  )
}

export default SearchBar