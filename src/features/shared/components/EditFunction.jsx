import React, { useEffect } from 'react'
import FieldGenerator from './FieldGenerator'
import { useForm } from 'react-hook-form'
import { Button } from '@mantine/core'
import useDrawer from '../../store/states/useDrawer'
import useGolds from '../../store/states/useGolds'
import useManufacturers from '../../store/states/useManufacturers'
import { toast } from 'react-toastify'
function EditFunction() {
    let {control,reset,formState:{errors},handleSubmit} = useForm()
    let {drawerContent,drawerData,openDrawer} = useDrawer()
    let {manufacturers,editManufacturer,deleteManufacturer}= useManufacturers()
    let {golds,editGold,deleteGold} = useGolds()
  
    let listStore ={
      golds:golds.body[drawerData-1],
      manufacturers:manufacturers.body[drawerData-1]
    }
    let editStore= {
      golds:editGold,
      manufacturers:editManufacturer
    }
    let deleteStore ={
      golds:deleteGold,
      manufacturers:deleteManufacturer
    }
    let deleteFunction = deleteStore[drawerContent]
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
     function handleDelete() {
            toast.error(
              <div >
                <h5 >Are You Sure About Deleting This from {drawerContent}?</h5>
               <div className='flex gap-2'>
               <Button color='red' variant='outline' onClick={() => {
                   deleteFunction(drawerData-1)
                   openDrawer({state:false})
                }}>Yes</Button>
                <Button color='gray' variant='outline'>Cancel</Button>
               </div>
              </div>, {
              autoClose: false,
              closeOnClick: true,
              position: 'top-center'
            })
          }
  return (
    <>
    <FieldGenerator formControl={control} />
    <div className='flex gap-2 mt-3'>
    <Button variant="outline" color='green' onClick={handleSubmit(submit)} >save changes</Button>
    <Button variant="outline" onClick={()=>{
      reset(list)
    }}>reset form</Button>
    <Button variant="outline" color='red' onClick={handleDelete}>delete {drawerContent}</Button>
    </div>
    </>
  )
}

export default EditFunction