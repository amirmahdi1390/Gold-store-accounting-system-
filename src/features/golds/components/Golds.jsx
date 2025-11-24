import React from 'react'
import TableGenerator from '../../shared/components/TableGenerator'
import goldsList from '../../store/utils/goldsList'
import listFormatter from '../../shared/functions/ListFormatter';
function Golds() {
  return (
    <TableGenerator data={listFormatter(goldsList)}  />

  )
}

export default Golds