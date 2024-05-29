import * as React from 'react';
import { alpha } from '@mui/material';
import { Box, CardMedia, Container, Stack, Typography, Button } from '@mui/material';


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 12,
          pb: 3,
        }}
      >
        <Box
          id="image"
          sx={(theme) => ({
            my: 3,
            alignSelf: 'center',
            height: { sm: '350px', xs: '250px' },
            width: { sm: '350px', xs: '250px' },
            position: 'relative', 
            overflow: 'hidden',
            borderRadius: '999px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage:  'url("/ALI_HASSAN.jpg")',
            backgroundSize: 'cover',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 30px 15px ${alpha('#9CCCFC', 0.5)}`
                : `0 0 30px 15px ${alpha('#033363', 0.9)}`,
          })}
        />
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '95%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Hello,&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              I'm Ali Hassan
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Experienced Full-Stack Developer with a solid background in information technology. Proficient in JavaScript, TypeScript, React.js, Next.js Node.js, JQuery, Laravel, AWS, HTML, CSS, Bootstrap, PHP, and databases (MySQL, PostgreSQL, MongoDB). Eager to embrace the latest technologies, I bring a blend of analytical and creative skills to solve problems efficiently, always following security standards for robust application security. With a proven track record, I specialize in delivering cost-effective, time-sensitive, and scalable solutions while adhering to the highest security standards. A collaborative team player with a history of individual success in software development.
          </Typography>
        </Stack>

      </Container>
    </Box>
  );
}
