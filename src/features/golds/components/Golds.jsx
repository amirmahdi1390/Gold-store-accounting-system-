import React from 'react'
import { 
  Container, 
  Title, 
  Group, 
  Box,
} from '@mantine/core'
import TableGenerator from '../../shared/components/TableGenerator'
import listFormatter from '../../shared/functions/ListFormatter'
import useGolds from '../../store/states/useGolds'
import SearchBar from '../../shared/components/SearchBar'
import useSearch from '../../store/states/useSearch'

function Golds() {
  let { golds } = useGolds()
  let { searchedItem } = useSearch()
  let list = searchedItem || golds
  
  return (
    <Container size="full" py="md">
      <Box style={{ position: 'relative', marginBottom: '0.8rem' }}>
        <Group justify="space-between" align="center" mb="lg">
          <Title order={2} style={{ 
            fontWeight: 600,
            color: 'gold'
          }}>
            Golds
          </Title>
          <SearchBar listType={"golds"} />
        </Group>
        
        <Box
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e9ecef, transparent)',
            marginTop: '0.5rem'
          }}
        />
      </Box>

      <Box className='max-h-145 overflow-auto'>
        <TableGenerator 
          data={listFormatter(list)} 
          type={"golds"} 
        />
      </Box>

      <Box mt="md" style={{ textAlign: 'center' }}>
        <span style={{
          fontSize: '0.85rem',
          color: '#6c757d',
          fontFamily: 'monospace'
        }}>
          {list.body.length} golds
        </span>
      </Box>
    </Container>
  )
}

export default Golds