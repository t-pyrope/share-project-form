import {createTheme} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const theme = createTheme({
    components: {
        // Name of the component
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Manrope, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
                    color: '#414141',
                },
                h1: {
                    fontSize: 48,
                    lineHeight: '64px',
                    fontWeight: 700,
                },

                h2: {
                    fontSize: 32,
                    lineHeight: '48px',
                    fontWeight: 600,
                },

                h3: {
                    fontSize: 28,
                    lineHeight: '40px',
                    fontWeight: 600,
                },

                h4: {
                    fontSize: 22,
                    lineHeight: '24px',
                    fontWeight: 600,
                    textAlign: 'left',
                },

                h5: {
                    fontSize: 18,
                    lineHeight: '24px',
                    fontWeight: 700,
                },

                h6: {
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 700,
                },

                body1: {
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 700,
                },

                body2: {
                    fontSize: 14,
                    lineHeight: '24px',
                    fontWeight: 700,
                    textAlign: 'left',
                },

                caption: {
                    fontSize: 12,
                    lineHeight: '16px',
                    fontWeight: 400,
                    color: '#818181',
                },

                overline: {
                    fontSize: 10,
                    lineHeight: '16px',
                    fontWeight: 800,
                }
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    borderRadius: 8,
                    border: '1px solid #A1A1A1',
                    padding: '12px',
                    paddingRight: '52px',
                    fontSize: 14,
                    lineHeight: '24px',
                    fontWeight: 400,
                    backgroundColor: 'transparent',
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: [
                        'Manrope',
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(','),
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: 16,
                    lineHeight: '24px',
                    fontWeight: 700,
                },
                contained: {
                    // backgroundColor: '#0F56B3',
                    color: '#C5DCFA',
                }
            }
        },
        MuiSelect: {
            defaultProps: {
                IconComponent: ExpandMoreIcon,
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '& .MuiListItemSecondaryAction-root': {
                        right: 0,
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Manrope, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#0F56B3',
            light: '#1672EC',
        },
        text: {
            primary: '#616161',
            secondary: '#414141',
        }
    },
});
