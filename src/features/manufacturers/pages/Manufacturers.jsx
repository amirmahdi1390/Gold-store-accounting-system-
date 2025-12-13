
import React, { useState, useRef, useEffect } from 'react'
import { 
  Container, 
  Paper, 
  Title, 
  TextInput, 
  Group, 
  ActionIcon,
  Box,
  rem,
  Collapse
} from '@mantine/core'
import { IconSearch, IconX } from '@tabler/icons-react'
import TableGenerator from '../../shared/components/TableGenerator'
import listFormatter from '../../shared/functions/ListFormatter'
import useManufacturers from '../../store/states/useManufacturers'
import SearchBar from '../../shared/components/SearchBar'
import useSearch from '../../store/states/useSearch'

function Manufacturers() {
  let { manufacturers } = useManufacturers()
  let {searchedItem} = useSearch()
  let list = searchedItem || manufacturers
  return (
    <Container size="full" py="md">
      {/* Header with Search */}
      <Box style={{ position: 'relative', marginBottom: '0.8rem' }}>
        <Group justify="space-between" align="center" mb="lg">
          <Title order={2} style={{ 
            fontWeight: 600,
            color: 'gold'
          }}>
            Manufacturers
          </Title>
           <SearchBar listType={"manufacturers"}/>
         
        </Group>
        
        {/* Subtle divider */}
        <Box
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e9ecef, transparent)',
            marginTop: '0.5rem'
          }}
        />
      </Box>

      {/* Table */}
     
        <Box className='max-h-145 overflow-auto' >
          <TableGenerator 
            data={listFormatter(list)} 
            type={"manufacturers"} 
          />
        </Box>
    

      {/* Subtle footer */}
      <Box mt="md" style={{ textAlign: 'center' }}>
        <span style={{
          fontSize: '0.85rem',
          color: '#6c757d',
          fontFamily: 'monospace'
        }}>
          {list.body.length} manufacturers
        </span>
      </Box>
    </Container>
  )
}

export default Manufacturers