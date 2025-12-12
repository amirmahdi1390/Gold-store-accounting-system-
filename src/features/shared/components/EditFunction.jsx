import React, { useEffect } from 'react'
import FieldGenerator from './FieldGenerator'
import { useForm } from 'react-hook-form'
import { Button } from '@mantine/core'
import useDrawer from '../../store/states/useDrawer'
import useGolds from '../../store/states/useGolds'
import useManufacturers from '../../store/states/useManufacturers'
function EditFunction() {
    let {control,reset,formState:{errors},handleSubmit} = useForm()
    let {drawerContent,drawerData,openDrawer} = useDrawer()
    let {manufacturers,editManufacturer}= useManufacturers()
    let {golds,editGold} = useGolds()
  
    let listStore ={
      golds:golds.body[drawerData-1],
      manufacturers:manufacturers.body[drawerData-1]
    }
    let editStore= {
      golds:editGold,
      manufacturers:editManufacturer
    }
    let editFunction = editStore[drawerContent]
    let list = listStore[drawerContent]
    console.log(list);
    useEffect(()=>{
      reset(list)
    },[list])
    function submit(data) {
      editFunction(data,drawerData-1)
      openDrawer({state:false})
    }
  return (
    <>
    <FieldGenerator formControl={control} />
    <div className='flex gap-2 mt-3'>
    <Button variant="outline" color='green' onClick={handleSubmit(submit)} >save changes</Button>
    <Button variant="outline" onClick={()=>{
      reset(list)
    }}>reset form</Button>
    <Button variant="outline" color='red' onClick={()=>{
      console.log(manufacturers);
      
    }}>delete {drawerContent}</Button>
    </div>
    </>
  )
}

export default EditFunction