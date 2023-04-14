import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <div>
      <Grid container item direction={'column'} mt={'6%'}>
        <Typography variant="h6" fontWeight={'600'}>
          Get in touch {<SendIcon />}
        </Typography>
        <Typography variant="body1">
          Check out{' '}
          <Link
            to="https://github.com/kara4600/kararizzardi.com/blob/main/Kara_Rizzardi_Resume.pdf"
            target={'_blank'}
            style={{ color: '#9DBBE9' }}
          >
            my resume
          </Link>{' '}
          or message me on{' '}
          <Link
            to="https://www.linkedin.com/in/kararizzardi/"
            target={'_blank'}
            style={{ color: '#9DBBE9' }}
          >
            Linkedin
          </Link>
          !
        </Typography>
      </Grid>
    </div>
  );
};

export default Contact;
