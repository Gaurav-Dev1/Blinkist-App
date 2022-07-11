import { createTheme } from "@mui/material"

declare module '@mui/material/styles' {
    interface TypographyVariants {
        heading: React.CSSProperties;
        subtitle3: React.CSSProperties;
        body3: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
    }
    
    interface TypographyVariantsOptions {
        heading?: React.CSSProperties;
        subtitle3?: React.CSSProperties;
        body3?: React.CSSProperties;
        caption1?: React.CSSProperties;
        caption2?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        caption1: true;
        caption2: true;
    }
}
const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Cera Pro,sans-serif",
            fontWeight: "bold",
            fontSize: "36px",
            lineHeight: "45px",
            color: "#03314B",
        },
        h3: {
            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "30px",
            color: "#03314B",
        },
        body1: {
            fontFamily: 'Cera Pro',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#353430"
        },
        body2: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontHeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#353430'
        },
        subtitle1: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontHeight: 500,
            fontSize: '24px',
            lineHeight: '32px',
            color: '#353430'
        },
        subtitle2: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontHeight: 700,
            fontSize: '18px',
            lineHeight: '24px',
        },
        caption: {
            fontFamily: "Cera Pro",
            fontWeight: "regular",
            fontSize: "14px",
            lineHeight: "22px",
            color: "#6D787E",
        },
        caption1: {
            fontFamily: 'Cera Pro',
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: 400,
        }
        
    },
    palette: {
        primary: {
            main: "#2CE080",
        },
        secondary: {
            main: '#0365F2'
        },
        
    }    
})

export default theme


//secondary main contains color for beta/secondary/200