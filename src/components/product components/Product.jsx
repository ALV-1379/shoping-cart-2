import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    url: 'https://dkstatics-public.digikala.com/digikala-static/a0ac657b46d4f81912f0bc8bffe322bacca70dd7_1699361791.jpg',
    title: 'Mobiles',
    width: '50%',
    height: "50%"
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-static/62524e2f1d31fbfd0f68cc3e5928cba4faddd6d6_1703507126.jpg',
    title: 'Laptops',
    width: '50%',
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/ab7a194eb65c3c85854c82a9096c1aeb1d7420d5_1667982004.jpg?x-oss-process=image/quality,q_95/format,webp',
    title: 'Camera',
    width: '50%',
  },
  {
    url: 'https://dkstatics-public.digikala.com/digikala-admin-landing/b0613f04d7d005f84693a3ddb8987ab48b84a94d_1704527303.jpg?x-oss-process=image/format,webp',
    title: 'TV',
    width: '50%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/${title}`);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            onClick={() => handleClick(image.title)}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      
    </>
  );
}
