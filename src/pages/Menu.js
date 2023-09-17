import Layout from '../components/Layout'
import MenuCard from './MenuCard'
import '../styles/Menu.css'
import dinnerFood from './dinner'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Menu() {
  // const [menuheading,setmenuheading] = React.useState('Special Dishes')
    const [category, setcategory] = React.useState('');
  
    const handleChange = (event) => {
      setcategory(event.target.value);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));

  return (
    <div>
      <Layout>
        <div className="mininavbar">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Categories</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                label="Categories"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Snack</MenuItem>
                <MenuItem value={20}>Dessert</MenuItem>
                <MenuItem value={30}>Chinese</MenuItem>
              </Select>
            </FormControl>

            <div className="centremenu">Special Dishes</div>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
        </div>

        <div className="cards">
          {dinnerFood.map((element)=>{
            return(
              <MenuCard className="card-items" foodName={element.name} foodImage={element.image} foodDesc={element.description} foodPrice={element.price}></MenuCard>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default Menu
