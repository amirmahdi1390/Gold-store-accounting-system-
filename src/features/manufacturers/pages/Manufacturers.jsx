import React from 'react'
import TableGenerator from '../../shared/components/TableGenerator'
import manufacturersList from "../../store/utils/manufacturersList"
function Manufacturers() {
  return (
    <TableGenerator data={manufacturersList} />
  )
}

export default Manufacturers