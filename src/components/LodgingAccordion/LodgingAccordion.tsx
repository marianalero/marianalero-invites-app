import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Divider,
  Link
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { t } from "i18next";
import Grid from '@mui/material/Grid2';
interface LodgingOption {
  name: string;
  distance: string;
  mapUrl: string;
}

interface LodgingAccordionProps {
  title: string;
  description?: string;
  options: LodgingOption[];

  fontFamilyTitle?: string;
  fontFamilyBody?: string;

  primaryColor?: string;
  secondaryColor?: string;
  dividerColor?: string;
  buttonColor?: string;
}

export const LodgingAccordion = ({
  title,
  description,
  options,
  fontFamilyTitle = "inherit",
  fontFamilyBody = "inherit",
  primaryColor = "#000",
  secondaryColor = "#666",
  dividerColor = "rgba(0,0,0,0.1)",
  buttonColor = "#000"
}: LodgingAccordionProps) => {
  return (
    <Grid container spacing={2} padding={4} >
       <Grid size={{ xs: 12 }} marginBottom={2}  justifyContent={"center"} display={"flex"}>
    <Box maxWidth={720} mx="auto" padding={2} margin={4} sx={{boxShadow:2, borderRadius:1, backgroundColor: "white"}} >
      <Accordion
        elevation={0}
        disableGutters
        sx={{
          borderBottom: `1px solid ${dividerColor}`,
          "&:before": { display: "none" }
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: primaryColor }} />}
        >
          <Typography
            className={fontFamilyTitle}
            fontWeight={500}
            fontSize="2rem"
            color={primaryColor}
          >
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ pt: 0, borderBottom:"none" }}>
          {description && (
            <Typography
              className={fontFamilyBody}
              fontSize="0.8rem"
              color={secondaryColor}
              mb={3}
              maxWidth="85%"
            >
              {description}
            </Typography>
          )}

          <Box>
            {options.slice(0, 3).map((option, index) => (
              <Box key={option.name}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={2}
                >
                  <Box>
                    <Typography
                      className={fontFamilyBody}
                      fontWeight={500}
                      color={primaryColor}
                    >
                      {option.name}
                    </Typography>
                    <Typography
                      className={fontFamilyBody}
                      fontSize=".8rem"
                      color={secondaryColor}
                    >
                      {option.distance}
                    </Typography>
                  </Box>

                  <Link
                    href={option.mapUrl}
                    target="_blank"
                    
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      className: fontFamilyBody,
                      fontSize: "1rem",
                      color: buttonColor,
                      transition: "opacity 0.2s",
                      "&:hover": { opacity: 0.7 }
                    }}
                  >
                    <LocationOnOutlinedIcon fontSize="small" />
                    {t("lodging.reservation")}
                  </Link>
                </Box>

                {index < options.length - 1 && (
                  <Divider sx={{ borderColor: dividerColor }} />
                )}
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Grid>
    </Grid>
  );
};
export default LodgingAccordion;