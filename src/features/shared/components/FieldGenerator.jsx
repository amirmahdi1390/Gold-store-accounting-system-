import React from 'react'
import { goldsFields,manufacturersFields } from '../../store/utils/drawerContent'
import { Input } from '@mantine/core'
import useDrawer from '../../store/states/useDrawer'
function FieldGenerator() {
    let {drawerContent,drawerData,drawerMode,isDrawerOpen} = useDrawer()
    console.log(drawerContent
        ,drawerData,drawerMode,isDrawerOpen);
    
    let fieldStore ={
        golds:goldsFields,
        manufacturers:manufacturersFields
    }
 
    let fields = fieldStore[drawerContent]
   return (
    <>
    {fields?.map((e)=>{
       return(
        <>
         <label>{e.label}</label>
         <Input type={e.type} placeholder={e.placeHolder} name={e.name}  />
        </>
       )
    })}
    </>
   )
    
}

export default FieldGenerator