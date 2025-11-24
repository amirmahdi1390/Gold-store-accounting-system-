import React from 'react'
import TableGenerator from '../../shared/components/TableGenerator'
import manufacturersList from "../../store/utils/manufacturersList"
import listFormatter from '../../shared/functions/ListFormatter'
function Manufacturers() {
  return (
    <TableGenerator data={listFormatter(manufacturersList)} />
  )
}

export default Manufacturers