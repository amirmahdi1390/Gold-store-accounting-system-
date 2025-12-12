import { useState, useRef } from 'react';
import { FloatingIndicator, Tabs , Menu,Button,Drawer} from '@mantine/core';
import classes from './styles/Switcher.module.css';
import tabsList from '../store/utils/tabsList';
import { Link, useLocation, useParams } from 'react-router';
import useDrawer from '../store/states/useDrawer';
import FieldGenerator from '../shared/components/FieldGenerator';
import EditFunction from '../shared/components/EditFunction';
import ShowInfoFunction from '../shared/components/ShowInfoFunction';
import AddFunction from '../shared/components/AddFunction';
import Error404 from './../error/pages/Error404.jsx';

function Switcher() {
  
  let {isDrawerOpen,openDrawer,drawerMode}= useDrawer()
  
  
  

  let location = useLocation();
  let a = location.pathname.replace("/", "");  
  const [rootRef, setRootRef] = useState(null);
  // const [value, setValue] = useState(`${tabsList[0]?.name}`);
  const [value, setValue] = useState(`${a? a : tabsList[0]?.name}`);

  
  const controlsRefs = useRef({});

  const setControlRef = (val) => (node) => {
    controlsRefs.current[val] = node;
  };



  return (
    <Tabs variant="light" color="rgba(204, 183, 63, 1"  value={value} className='fixed bottom-0 ml-7' onChange={setValue} >
      
      <Tabs.List ref={setRootRef} className={classes.list}  >
      
        {tabsList?.map((e)=>{
           return (
            <Link to={`/${e?.name}`}>
                          <Tabs.Tab value={e.name} ref={setControlRef(e.name)} className={classes.tab}>
           <Menu trigger='hover' offset={20} position='top' withArrow arrowPosition='center'>
         <Menu.Target>
           <Button variant='none'>{e.name}</Button>
         </Menu.Target>
   
         <Menu.Dropdown>
           <Menu.Item>{e.name} list</Menu.Item>
           <Menu.Item onClick={()=>{
            openDrawer({state:true, content:e.name})
           }}>Add new {e.name}</Menu.Item>
         </Menu.Dropdown>
       </Menu>
           </Tabs.Tab>
            </Link>
           )
        })}
        
        <FloatingIndicator
          target={value ? controlsRefs.current[value] : null}
          parent={rootRef}
          className={classes.indicator}
        >
        </FloatingIndicator>
      </Tabs.List>
      <Drawer radius={"lg"} position="left" size="xl" opened={isDrawerOpen}  onClose={() => {openDrawer({state:false ,content:null,mode:"add",data:null})}}>
      {/* <FieldGenerator/> */}
    {drawerMode == "edit" ?<EditFunction/>:drawerMode == "show info" ? <ShowInfoFunction/> : drawerMode == "add" ? <AddFunction/>:<Error404/>}
    </Drawer>
      <Tabs.Panel value="1"></Tabs.Panel>
      <Tabs.Panel value="2"></Tabs.Panel>
      <Tabs.Panel value="3"></Tabs.Panel>
    </Tabs>
  );
}

export default Switcher;
