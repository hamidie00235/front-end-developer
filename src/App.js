import { React } from "react"
import {useState} from 'react';
import { Container ,List,Input,SimpleGrid,ThemeIcon} from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import './App.css';
import Card from './components/Card';
const storeItems=[{
  name:"Utu",
  price:20,
},

{
  name:"Basket Topu",
  price:23,
},

{
  name:"Cikolata",
   price:26,
},



]
function App() {
  let [basketItems,setBasketItems] = useState([]);
  let filteredItems=basketItems.filter((item) =>item.name.ToLowerCase().indexOf(searchValue.toLowerCase())>=0)
  let[ searchValue,setSearchValue] = useState("");
  return (
    <Container>
      <SimpleGrid cols={3} className="store">
{storeItems.map(({name}) =>  {
return ( 
  <Card 
    key={name}
   name={name}
    onAdd={() => setBasketItems([...basketItems,{name}])}/>

  );

})}
      </SimpleGrid>
      <Input.Wrapper label="Arama">
  <Input onChange={ (e)=> setSearchValue(e.target.value)}/>
</Input.Wrapper>
      <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      {filteredItems.map(({ name },index) => (
         <List.Item key={index}>{name}</List.Item>
      ))}
     
      
    </List>
    </Container>
  );
}

export default App;
