import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import "./Cards.css"

const ProductCard = ({ item }) =>  {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: "100%" }}>
          <img src={`https:${item?.imageUrl}`}  alt="item pics"  className='product-image'/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs" className="brand-name">{item?.brandName}</Typography>
        <Typography level="body-xs"  className="product-name">{item?.name.substring(0, 30)  +  " ... "}</Typography>  
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
         {item?.price.current.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;