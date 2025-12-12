import React from 'react'
import TableGenerator from '../../shared/components/TableGenerator'
import goldsList from '../../store/utils/goldsList'
import listFormatter from '../../shared/functions/ListFormatter';
import useGolds from '../../store/states/useGolds';
function Golds() {
  let {golds} = useGolds()
  return (
    <TableGenerator data={listFormatter(golds)} type={"golds"} />

  )
}

export default Golds