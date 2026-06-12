import { createTheme } from "@mui/material";
import type {} from '@mui/x-data-grid/themeAugmentation';
import * as locales from "@mui/material/locale";

const COLORTHEME = createTheme({
  palette: {
    common: {
      black: "#2B1E1B",
      white: "#FFFFFF",
    },
    text: {
      primary: "#3A2A25",
      secondary: "#7D5F55",
      disabled: "#CDBFB5",
    },
    primary: {
      main: "#A41423",
      light: "#B3151D",
      dark: "#7F0F1B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C8AD78",
      light: "#E4CFA4",
      dark: "#9A8354",
      contrastText: "#3A2A25",
    },
    action: {
      active: "#A41423",
      hover: "rgba(164, 20, 35, 0.06)",
      focus: "rgba(164, 20, 35, 0.12)",
      selected: "rgba(164, 20, 35, 0.10)",
      disabled: "#CDBFB5",
      disabledBackground: "#EFE5D8",
    },
    background: {
      default: "#F8F4EC",
      paper: "#FFFFFF",
    },
    divider: "rgba(200,173,120,.35)",
    DataGrid: {
      bg: "#FFFFFF",
      pinnedBg: "#F2EADD",
      headerBg: "#F8F4EC",
    },
  },
});

const FONTTHEME = createTheme({
  ...COLORTHEME,
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: "6rem",
      fontWeight: 700,
      lineHeight: "7rem",
      letterSpacing: "-0.96px",
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 700,
      lineHeight: "5rem",
      letterSpacing: "-0.64px",
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: "4rem",
      letterSpacing: "-0.48px",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "2.5rem",
      letterSpacing: "-0.32px",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "2rem",
      letterSpacing: "-0.24px",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: "1.75rem",
      letterSpacing: "-0.2px",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: "1.5rem",
    },
    subtitle2: {
      fontSize: ".875rem",
      fontWeight: 700,
      lineHeight: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    body2: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "capitalize",
      lineHeight: "1.5rem",
    },
    caption: {
      fontSize: ".75rem",
      fontWeight: 400,
      lineHeight: "1.125rem",
    },
    overline: {
      fontSize: ".625rem",
      fontWeight: 600,
      lineHeight: "16px",
    },
  },
});

const THEME = createTheme({
  ...COLORTHEME,
  ...FONTTHEME,
  shape: {
  borderRadius: 24,
},
shadows: [
  "none",
  "0 1px 2px rgba(75,45,35,.04)",
  "0 2px 6px rgba(75,45,35,.05)",
  "0 4px 10px rgba(75,45,35,.06)",
  "0 8px 18px rgba(75,45,35,.07)",
  "0 12px 24px rgba(75,45,35,.08)",
  "0 16px 32px rgba(75,45,35,.09)",
  "0 20px 40px rgba(75,45,35,.10)",
  "0 24px 48px rgba(75,45,35,.11)",
  "0 28px 56px rgba(75,45,35,.12)",
  "0 32px 64px rgba(75,45,35,.13)",
  "0 36px 72px rgba(75,45,35,.14)",
  "0 40px 80px rgba(75,45,35,.15)",
  "0 44px 88px rgba(75,45,35,.16)",
  "0 48px 96px rgba(75,45,35,.17)",
  "0 52px 104px rgba(75,45,35,.18)",
  "0 56px 112px rgba(75,45,35,.19)",
  "0 60px 120px rgba(75,45,35,.20)",
  "0 64px 128px rgba(75,45,35,.21)",
  "0 68px 136px rgba(75,45,35,.22)",
  "0 72px 144px rgba(75,45,35,.23)",
  "0 76px 152px rgba(75,45,35,.24)",
  "0 80px 160px rgba(75,45,35,.25)",
  "0 84px 168px rgba(75,45,35,.26)",
  "0 88px 176px rgba(75,45,35,.27)",
],
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover:not(.Mui-focused,.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
            
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DADADA', // nuevo color del borde para disabled
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
          },
        },
      },
    },
    
    MuiInputBase: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          backgroundColor: "white",
          padding: "0 !important",
        },
        inputSizeSmall: {
          minHeight: "24px !important",
          padding: "0.5rem !important",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          "&.MuiInputAdornment-sizeMedium": {
            paddingLeft: "1rem",
          },
          "&.MuiInputAdornment-sizeSmall": {
            paddingLeft: "0.5rem",
          },
        },
        positionEnd: {
          "&.MuiInputAdornment-sizeMedium": {
            paddingLeft: "1rem",
          },
          "&.MuiInputAdornment-sizeSmall": {
            paddingRight: "0.5rem",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: COLORTHEME.palette.grey[600],
          textTransform: "capitalize",
        },
        asterisk: {
          color: COLORTHEME.palette.error.main,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight:400,
          borderRadius: "0.5rem",
          borderStyle: "solid",
        },
        sizeMedium: {
          fontSize: "1rem",
          lineHeight: "1.5rem",
          padding: "0.5rem",
          height: 40,
        },
        sizeSmall: {
          fontSize: "0.75rem",
          lineHeight: "1rem",
          padding: "0.5rem",
          height: 28,
        },
        endIcon: {
          marginRight: 0,
          marginLeft: "0.5rem",
        },
        startIcon: {
          "&.MuiButton-iconSizeLarge": {
            marginLeft: 0,
            marginRight: "0.875rem",
          },
          "&.MuiButton-iconSizeMedium": {
            marginLeft: 0,
            marginRight: "0.5rem",
          },
          "&.MuiButton-iconSizeSmall": {
            marginLeft: 0,
            marginRight: "0.375rem",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: "0.75rem",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "24px !important",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "& p": {
            width: "96%",
          },
        },
        
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 48,
        },
        
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          height: 36,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: FONTTHEME.typography.subtitle2.fontWeight,
          fontSize: FONTTHEME.typography.subtitle2.fontSize,
        
          textTransform: "capitalize",
          padding: "0 10px",
        },
        body: {
          fontWeight: FONTTHEME.typography.body1.fontWeight,
          fontSize: FONTTHEME.typography.body1.fontSize,
          
          padding: "0 10px",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        
      },
    },
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          border: "2px solid transparent",
          fontSize: FONTTHEME.typography.overline.fontSize,
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        vertical: {
          marginLeft: 0,
        },
        lineVertical: {
          minHeight: 32,
        },
      },
    },
    MuiStepButton: {
      styleOverrides: {
        vertical: {
          padding: 0,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          padding: 0,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          color: COLORTHEME.palette.primary.main,
          '&.Mui-disabled': {
            color: '#dadada', // color cuando está deshabilitado
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
         
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root:
        {
          "&:last-child": {
            borderRadius: "16px",
          },
        },
        toolbar: {
          justifyContent: "center",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          padding: "0 0.5rem",
        },
        labelSmall: {
          fontSize: "0.75rem",
          lineHeight: "14.1px",
        },
        labelMedium: {
          fontSize: "0.875rem",
          lineHeight: "16.45px",
        },
        avatarMedium: {
          fontSize: "initial",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          // padding: "0 !important",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "1rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          backgroundColor: "white",
          "&:is(:hover,.Mui-focusVisible)": {
            backgroundColor: COLORTHEME.palette.grey[100],
          },
          "&.Mui-selected": {
            backgroundColor: COLORTHEME.palette.primary.light,
            color: "white",
            "&:hover": {
              backgroundColor: COLORTHEME.palette.primary.light,
            },
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent)",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: FONTTHEME.typography.body2.fontSize,
          fontStyle: FONTTHEME.typography.body2.fontStyle,
          fontWeight: FONTTHEME.typography.body2.fontWeight,
          lineHeight: FONTTHEME.typography.body2.lineHeight,
          padding: "1rem",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          maxHeight: 48,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 38,
          height: 24,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          marginTop: 3,
          marginLeft: 3,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(14px)",
            color: "white",
            "& + .MuiSwitch-track": {
              backgroundColor: "primary",
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: COLORTHEME.palette.primary.main,
            border: "6px solid white",
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7,
          },
        },
        thumb: {
          boxSizing: "border-box",
          width: 18,
          height: 18,
        },
        track: {
          borderRadius: 26 / 2,
          opacity: 1,
          transition: FONTTHEME.transitions.create(["background-color"], {
            duration: 500,
          }),
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORTHEME.palette.common.white,
        },

      },
    },
    MuiAccordion: {
      styleOverrides: {
        root:
        {
          boxShadow: "none",
          "&::before": {
            background: "inherit",
          },
        },
      },
    },MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'black', // cambia este color al que desees
          },
        },
      },
    },
   MuiDataGrid: {
  styleOverrides: {
    root: {
      border: "none",
      backgroundColor: "#fff",
      fontFamily: "Montserrat, sans-serif",

      "& .MuiDataGrid-main": {
        borderRadius: 0,
      },

      "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeadersInner, & .MuiDataGrid-columnHeader, & .MuiDataGrid-columnHeader--sortable": {
        backgroundColor: "#f8f4ec !important",
      },

      "& .MuiDataGrid-columnHeader": {
        minHeight: "56px !important",
        maxHeight: "56px !important",
        color: "#3a2a25",
        fontWeight: 700,
        fontSize: ".9rem",
        outline: "none !important",
      },
    "& .MuiDataGrid-scrollbarFiller, & .MuiDataGrid-scrollbarFiller--header": {
        backgroundColor: "#f8f4ec !important",
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "700 !important",
      },

      "& .MuiDataGrid-row": {
        backgroundColor: "#fff",
        minHeight: "58px !important",
        maxHeight: "58px !important",
      },

      "& .MuiDataGrid-cell": {
        minHeight: "58px !important",
        maxHeight: "58px !important",
        borderBottom: "1px solid rgba(200,173,120,.14)",
        color: "#4c3b35",
        fontSize: ".95rem",
        outline: "none !important",
      },

      "& .MuiDataGrid-row:hover": {
        backgroundColor: "#fdfaf5",
      },

      "& .MuiDataGrid-footerContainer": {
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(200,173,120,.22)",
      },
    },
  },
},

  },
  
  
}, locales.esES);

export default THEME;