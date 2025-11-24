import { Button, Table } from "@mantine/core";
import React from "react";
import useDrawer from "../../store/states/useDrawer";

function TableGenerator({ data }) {
  let {setDrawerState} = useDrawer()
  let {head,caption,body}= data
  return (
   <div>
    <Table 
      highlightOnHover
      highlightOnHoverColor="gold"
      stickyHeader
      striped={"even"}
      verticalSpacing={"sm"}
      withRowBorders
    >
      <Table.Thead>
      <Table.Tr>
        {head?.map((h)=>{
          return <Table.Th>{h}</Table.Th>
        })}
        <Table.Th>more</Table.Th>
      </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {body?.map((r)=>{
         return(
          <Table.Tr>
          {r?.map((d)=>{
            return <Table.Td>{d}</Table.Td>
          })}
          <Table.Td><Button variant="outline" onClick={()=>{
            setDrawerState(true)
          }}>edit</Button></Table.Td>
        </Table.Tr>
         )
        })}
      </Table.Tbody>
    </Table>
   

   </div>
  );
}

export default TableGenerator;
