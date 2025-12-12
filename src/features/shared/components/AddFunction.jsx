import React from 'react'
import FieldGenerator from './FieldGenerator'
import { Button } from '@mantine/core'
import useDrawer from '../../store/states/useDrawer'
import useGolds from '../../store/states/useGolds'
import useManufacturers from '../../store/states/useManufacturers'
import { useForm } from 'react-hook-form'

function AddFunction() {
    let {drawerContent,openDrawer} = useDrawer()
    console.log(drawerContent);
    
      let {control,handleSubmit} = useForm()
      let {addGold} = useGolds()
      let {addManufacturer} = useManufacturers()
      let statesStore = {
        manufacturers: addManufacturer,
        golds:addGold
      }
      let addFunction = statesStore[drawerContent]
      function submit(data) {
        addFunction(data)
        openDrawer({state:false})
      }
  return (
  <>
    <FieldGenerator formControl={control}/>
    <Button variant='outline' onClick={handleSubmit(submit)}>
    add to {drawerContent}
    </Button>
  </>
  )
}

export default AddFunction