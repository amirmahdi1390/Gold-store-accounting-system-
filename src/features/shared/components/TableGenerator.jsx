import { Button, Table } from "@mantine/core";
import React from "react";
import useDrawer from "../../store/states/useDrawer";

function TableGenerator({ data,type }) {
  let {openDrawer} = useDrawer()
  let buttonType = type ==="manufacturers"?"show info":"edit"
  let {head,caption,body}= data
  return (
   <div>
    <Table 
      highlightOnHover
      highlightOnHoverColor="gray"
      stickyHeader
      striped={"even"}
      verticalSpacing={"sm"}
      withRowBorders
    >
      <Table.Thead >
      <Table.Tr>
        {head?.map((h)=>{
          return <Table.Th>{h}</Table.Th>
        })}
        <Table.Th>more</Table.Th>
      </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {body?.map((r,index)=>{  
         return(
          <Table.Tr>
          {r?.map((d)=>{
            return <Table.Td>{d}</Table.Td>
          })}
          <Table.Td><Button variant="outline" onClick={()=>{
            openDrawer({state:true ,content:type,mode:buttonType,data:index})
          }}>{buttonType}</Button></Table.Td>
        </Table.Tr>
         )
        })}
        <Table.Caption>{caption}</Table.Caption>
      </Table.Tbody>
      
    </Table>
   

   </div>
  );
}

export default TableGenerator;
