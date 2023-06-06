import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const models = ['Auto-Sklearn', 'TPOT', 'PyCaret']

export default function Model({ model, setModel }) {

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <Box sx={{ minWidth: '200px', marginLeft: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">模型</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          {models.map((m) => {
            return (<MenuItem key={m} value={m}>{m}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </Box>
  );
}