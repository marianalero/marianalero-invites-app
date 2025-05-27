import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqs from '../../constants/faqs.json';
import HeaderHome from '../../layouts/headerHome';
import Footer from '../../components/Footer/Footer';

const FaqPage = () => {
  return (
    <><HeaderHome></HeaderHome>
    <Box
          sx={{
              minHeight: '100vh',
              py: 8,
              fontFamily: 'Montserrat, sans-serif'
          }}
      >
          <Container maxWidth="md">
              <Typography
                  variant="h4"
                  sx={{
                      mb: 6,
                      textAlign: 'center',
                      fontFamily: 'Cinzel, serif',
                      color: '#a41423'
                  }}
              >
                  Preguntas Frecuentes
              </Typography>

              {faqs.map((section, index) => (
                  <Box key={index} sx={{ mb: 6 }}>
                      <Typography
                          variant="h6"
                          sx={{ mb: 2, color: '#b3151d', fontWeight: 600 }}
                      >
                          {section.category}
                      </Typography>

                      {section.questions.map((faq, qIndex) => (
                          <Accordion
                              key={qIndex}
                              sx={{ bgcolor: '#fff', mb: 1, borderRadius: 1, boxShadow: 1 }}
                          >
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon sx={{ color: '#a41423' }} />}
                              >
                                  <Typography sx={{ fontWeight: 500 }}>
                                      {faq.question}
                                  </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                  <Typography>{faq.answer}</Typography>
                              </AccordionDetails>
                          </Accordion>
                      ))}
                      {index < faqs.length - 1 && (
                          <Divider sx={{ mt: 4, mb: 2, borderColor: '#c8ad78' }} />
                      )}
                  </Box>
              ))}
          </Container>
      </Box>
      <Footer />
    </>
  );
};

export default FaqPage;