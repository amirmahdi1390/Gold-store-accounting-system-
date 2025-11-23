import React from 'react'
import TableGenerator from '../../shared/components/TableGenerator'
import goldsList from '../../store/utils/goldsList'
function Golds() {
  return (
    <TableGenerator data={goldsList} />
  )
}

export default Golds