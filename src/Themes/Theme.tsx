import { createTheme } from "@mui/material/styles"

declare module '@mui/material/styles' {
    interface TypographyVariants {
        heading: React.CSSProperties;
        subtitle3: React.CSSProperties;
        body3: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
        caption3: React.CSSProperties; 
        subtitle5?: React.CSSProperties;
    }
    
    interface TypographyVariantsOptions {
        heading?: React.CSSProperties;
        subtitle3?: React.CSSProperties;
        body3?: React.CSSProperties;
        caption1?: React.CSSProperties;
        caption2?: React.CSSProperties;
        caption3?: React.CSSProperties;
        subtitle5?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        caption1: true;
        caption2: true;
        caption3: true;
        subtitle5: true;
    }
}
const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Cera Pro",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px",
        },
        h3: {
            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "30px",
        },
        body1: {
            fontFamily: 'Cera Pro',
            fontStyle: "normal",
            fontWeight: '500px',
            fontSize: "16px",
            lineHeight: "20px",
        },
        body2: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
        },
        subtitle1: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '23px',
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
        },
        caption3: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
        },
        subtitle5: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '25px',
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