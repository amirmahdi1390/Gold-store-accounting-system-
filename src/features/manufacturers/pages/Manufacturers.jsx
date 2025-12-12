import React from 'react'
import TableGenerator from '../../shared/components/TableGenerator'
import manufacturersList from "../../store/utils/manufacturersList"
import listFormatter from '../../shared/functions/ListFormatter'
import useManufacturers from '../../store/states/useManufacturers'
function Manufacturers() {
  let {manufacturers} = useManufacturers()
  return (
    <TableGenerator data={listFormatter(manufacturers)} type={"manufacturers"} />
  )
}

export default Manufacturers