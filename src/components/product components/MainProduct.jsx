import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Mobiles , cameras , Televisions , laptops } from '../../constans/product';
import { useParams } from 'react-router-dom';
import { useBasket } from '../../store/basket';
import { Button } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    let params = useParams()   
    const allProducts = [...Mobiles, ...cameras, ...laptops, ...Televisions];

     let mainselect = allProducts.find((item) => {
        return item.id == params.id
    }) 
  
   
        let { price, name, imageSrc , about , id} = { ...mainselect }
        const { addBasketItem } = useBasket((state) => state.actions)

        return (
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 700,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 700, height: 500 }}>
                            <Img alt="complex" src={imageSrc} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={18} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {about}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    id :{id}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <Button variant="contained" onClick={() => addBasketItem(mainselect)}>add</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                {price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );

    }

