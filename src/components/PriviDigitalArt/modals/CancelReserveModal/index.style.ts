import { makeStyles } from "@material-ui/core/styles";

export const CancelReserveModalStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "508px !important",
    padding:'25px !important'
  },
  nameField: {
    margin: '8px 0px 0px 0px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    color: '#1A1B1C',
  },
  availableCollateral : {
    padding: '23px 31px 23px 31px',
    background: 'rgba(158, 172, 242, 0.2)',
    borderRadius: '16px',
    marginTop: '24px'
  },
  collateralText : {
    fontFamily: 'Agrandir',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0.02em',
    color: '#431AB7',
  },
  collateralAmount: {
    fontFamily: 'Agrandir',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '18px',
    lineHeight: '150%',
    letterSpacing: '0.02em',
    color: '#431AB7',
  },
  inputJOT: {
    background: "rgba(144, 155, 255, 0.16)",
    // border: "1px solid #431AB7 !important",
    width: "100%",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
  },
  inputTag: {
    background: "rgba(67, 26, 183, 0.2)",
    width: "100%",
    borderRadius: theme.spacing(1),
    padding: '16px',
    fontFamily: 'Agrandir',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '120%',
    color: '#431AB7',
    mixBlendMode: 'normal',
    border: 'none',
  },
  purpleText: {
    fontFamily: "Agrandir Variable !important",
    cursor: "pointer",
    color: "#431AB7",
    fontSize: "16px",
    minWidth: "55px",
    fontWeight: 700
  },
  usdWrap: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0",
    },
  },
  point: {
    background: "#D9F66F",
    width: "13px",
    height: "13px",
    borderRadius: "100%",
    marginRight: 4,
  },
  totalText: {
    fontFamily: 'Agrandir',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '0.02em',
    color: '#431AB7',
  },
  footer: {
    padding: '18px 25px 25px 25px',
    marginTop: '37px',
    borderTop: '1px solid #5343B1'
  },
  datePicker : {
    border: '1px solid #431ab7',
    borderRadius: '9px'
  }
}));
