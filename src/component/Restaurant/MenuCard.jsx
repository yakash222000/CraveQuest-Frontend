import React from 'react'
import { Button,Accordion,AccordionSummary,AccordionDetails,FormControl,FormGroup,FormControlLabel,Checkbox } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from '@mui/icons-material';

const demo = [
  {
    category : "Nuts & Seeds" ,
    ingredients : ["Cashews"]
  },
  {
    category : "Protein",
    ingredients : ["Ground beef","Bacon strips"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log(value);
  }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img style={{ borderRadius: '10px' }} className='w-[7rem] h-[7rem] object-cover mr-5 border-radius-10x' src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg" alt="" />
            </div>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>Burger</p>
                <p>₹400</p>
                <p className='text-gray-400'> Nice Food.</p>

            </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>     
            <form >
              <div className='flex gap-5 flex-wrap'>
                {
                  demo.map((item) =>
                    <div>
                      <p>{item.category}</p>
                      <FormGroup>
                        {item.ingredients.map((item)=><FormControlLabel control={<Checkbox 
                        onChange={()=>handleCheckBoxChange(item)}/>} label={item} />)}
                        
                    </FormGroup>
                    </div>
                  )
                }
              </div>
              <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">{
                  true?"Add to Cart":"Out of Stock"
                  }</Button>
              </div>
            </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
