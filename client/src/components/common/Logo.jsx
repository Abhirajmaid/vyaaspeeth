// import { useTheme } from "@mui/material";
import logo from "../../img/Vyaaspeeth_LOGO.png";
import { Box, Link } from "@mui/material";

const Logo = () => {
  // const theme = useTheme();

  return (
    <>
      {/* <Typography fontWeight="700" fontSize="1.7rem">
        Vyaas<span style={{ color: theme.palette.primary.main }}>PEETH</span>
      </Typography> */}
      <Link href="/">
        <Box component="img" sx={{ height: 55 }} alt="Logo" src={logo} />
      </Link>
    </>
  );
};

export default Logo;
