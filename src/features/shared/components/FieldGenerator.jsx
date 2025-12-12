import React from 'react'
import { goldsFields,manufacturersFields } from '../../store/utils/drawerContent'
import { Input } from '@mantine/core'
import useDrawer from '../../store/states/useDrawer'
import { Controller, useForm } from 'react-hook-form'
function FieldGenerator({formControl}) {
    
    let {drawerContent,drawerData,drawerMode,isDrawerOpen} = useDrawer()
    let fieldStore ={
        golds:goldsFields,
        manufacturers:manufacturersFields
    }
    let fields = fieldStore[drawerContent]
   return (
    <>  
     <h1>{drawerContent} {drawerMode} form</h1>
    {fields?.map((e)=>{
       return(
        <>
         <label>{e.label}</label>
        <Controller
        name={e.name}
        rules={{ required: `${e.label} is required` }}
        control={formControl}
        render={({field,fieldState})=>{
            return  (
                <>
                <Input type={e.type} label="Input labe" placeholder={e.placeHolder} {...field} error={fieldState.error?.message}/>  
                  <p className='text-red-600'>
                    {fieldState.error?.message}
                  </p>
                </>
            )
        }}
        />
        </>
       )
    })}
    </>
   )
    
}

export default FieldGenerator