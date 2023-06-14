import  React from 'react';
import { Carousel } from 'antd';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const contentStyle = {
  margin: 0,
  padding:0,
 
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
    
    
    <Carousel afterChange={onChange}>
      <div className='carouselmainBox'>
        
     <div>
     <img  src="https://preview.colorlib.com/theme/capture2/images/hero_1.jpg.webp" alt="" />
   
     </div>
      </div>
      <div className='carouselmainBox'>
      <img src="https://www.istanbulfotografci.com/wp-content/uploads/Du%CC%88g%CC%86u%CC%88n-Hikaye-Fotog%CC%86rafc%CC%A7isi.jpg" alt="" />
      </div>
      <div className='carouselmainBox'>
<img src="https://themagnoliavenue.com/wp-content/uploads/2020/10/Casual-Summer-Wedding-Pigeon-Forge_0012.jpg" alt="" />
      </div>
      <div className='carouselmainBox'>
       <img src="https://lindseyrickardsphotography.com/wp-content/uploads/sites/4202/2020/08/kristin-matt-virginia-mountain-summer-wedding_0094.jpg" alt="" />
      </div>
    </Carousel>
    
<div className='myWorks'>
  <div className='workText'>
    
    <p> My Works </p>
    <h2>See My Works</h2>

 </div>

</div>


<div className='gridImage'>
  

   


</div>





    
    
    
    </>
  );
};
export default Home;