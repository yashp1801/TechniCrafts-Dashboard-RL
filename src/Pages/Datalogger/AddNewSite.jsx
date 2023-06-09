import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DataLogger.css";
import { CgCloseO } from "react-icons/cg";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddNewSite(props) {
  const [age, setAge] = React.useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const [dateValue, setDateValue] = React.useState(dayjs()); // Storing Date Value
  const handleClose = () => {
    props.setIsOpen(false);
    props.setOpen(true);
  };
  const handleCloseBtn = () => {
    props.setIsOpen(false);
  };
  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="lg"
      >
        <DialogContent className="addnewsitepopup__wrapper">
          <div className="addnewsitepopup__header">
            <h1>Add New Site</h1>
            <p
              onClick={handleCloseBtn}
              className="addnewsitepopup__wrapper__closeBtn"
            >
              <CgCloseO />
            </p>
          </div>
          <div className="addnewsitepopup">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                value={dateValue}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id="outlined-basic"
              label="Site Name"
              variant="outlined"
            />
            <FormControl sx={{ minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Site Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleAgeChange}
                autoWidth
                label="Site Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Device Number"
              variant="outlined"
            />
            <FormControl sx={{ minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Network Protocol
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleAgeChange}
                autoWidth
                label="Network Protocol"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Mobile" variant="outlined" />
            <TextField id="outlined-basic" label="IMEI" variant="outlined" />
            <FormControl sx={{ minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Configuration
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleAgeChange}
                autoWidth
                label="Configuration"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Modal
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleAgeChange}
                autoWidth
                label="Modal"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            <TextField id="outlined-basic" label="SNO" variant="outlined" />
            <TextField id="outlined-basic" label="MFG" variant="outlined" />
            <TextField id="outlined-basic" label="MQTT" variant="outlined" />
          </div>
          <div className="addnewsitepopup__userAuth">
            <div className="addnewsitepopup__userAuth__input">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="filled"
                fullWidth
                className="addnewsitepopup__userAuth__input__username__textfield"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="filled"
                fullWidth
                className="addnewsitepopup__userAuth__input__username__textfield"
                type="password"
              />
            </div>
            <button
              onClick={handleClose}
              className="addnewsitepopup__userAuth__addBtn"
            >
              Add Site
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
