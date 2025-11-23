import { Table } from '@mantine/core'
import React from 'react'

function TableGenerator({data}) {
  return (
    <Table data={data} highlightOnHover highlightOnHoverColor='green'stickyHeader striped={"even"} verticalSpacing={"sm"} withRowBorders />
  )
}

export default TableGenerator