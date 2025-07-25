import { createTheme } from "@mui/material";
import type {} from '@mui/x-data-grid/themeAugmentation';
import * as locales from "@mui/material/locale";

const COLORTHEME = createTheme({
  palette: {
    common: {
      black: "#010202",
      white: "#FFFFFF",
    },
    text: {
      primary: "#010202",
      secondary: "#1E2324",
      disabled: "#DADADA",
    },
    primary: {
      main: "#a41423",
      light: "#c84b58",
      dark: "#6e0e18",
    },
    secondary: {
      main: "#c8ad78",
      light: "#e4cfa4",
      dark: "#9a8354",
    },
    action: {
      active: "#a41423",
      hover: "#870e1d",
      focus: "#a41423",
      selected: "#a41423",
      disabled: "#d9a1aa ",
    },
    background: {
      default: "#f2eadd",
      paper: "#FFFFFF",
    },
    DataGrid: {
      // Container background
      bg: '#ffffff',
      // Pinned rows and columns background
      pinnedBg: '#f1f5f9',
      // Column header background
      headerBg: '#ffffff',
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
    borderRadius: 16,
  },
  shadows:
    [
      "none",
      "0px 1px 0px 0px rgba(1, 2, 2, 0.24)",
      "0px 1px 2px 0px rgba(1, 2, 2, 0.24)",
      "0px 2px 4px 0px rgba(1, 2, 2, 0.24)",
      "0px 3px 5px 0px rgba(1, 2, 2, 0.24)",
      "0px 5px 6px 0px rgba(1, 2, 2, 0.24)",
      "0px 6px 7px 0px rgba(1, 2, 2, 0.24)",
      "0px 7px 8px 0px rgba(1, 2, 2, 0.24)",
      "0px 8px 9px 0px rgba(1, 2, 2, 0.24)",
      "0px 9px 10px 0px rgba(1, 2, 2, 0.24)",
      "0px 10px 11px 0px rgba(1, 2, 2, 0.24)",
      "0px 11px 12px 0px rgba(1, 2, 2, 0.24)",
      "0px 12px 13px 0px rgba(1, 2, 2, 0.24)",
      "0px 13px 14px 0px rgba(1, 2, 2, 0.16)",
      "0px 14px 15px 0px rgba(1, 2, 2, 0.16)",
      "0px 15px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px 16px 16px 0px rgba(1, 2, 2, 0.16)",
      "0px -8px 16px 0px rgba(1, 2, 2, 0.16)",
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
        root:
        {
          backgroundColor:"white",
          fontSize: "16px",
          "& .MuiDataGrid-row": {
            maxHeight: "48px!important",
            minHeight: "48px!important",
            "&:hover": {
              backgroundColor: "white",
            },
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "white",
            },
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
          },
          "& .MuiDataGrid-columnHeader": {
            "&:focus": {
              outline: 0,
            },
            cursor: "auto",
            fontSize: "14px",
            
          },
          "& .MuiDataGrid-cell": {
            "&:focus": {
              outline: 0,
            },
            "&:focus-within": {
              outline: 0,
            },
          },
          "& .MuiDataGrid-columnSeparator": {
            color: COLORTHEME.palette.primary,
          },
          // "& .MuiDataGrid-virtualScrollerContent":
          // {
          //   height: "100%!important",
          // },
        },
      },
    },

  },
  
  
}, locales.esES);

export default THEME;