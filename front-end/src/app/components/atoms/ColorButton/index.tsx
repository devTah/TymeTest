import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  background: "var(--primary, linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%))",
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default ColorButton;
