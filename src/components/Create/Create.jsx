import { useEffect, useState } from 'react';
import { Container, TextField, MenuItem, FormControl, InputLabel, Select, Button, Typography, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Aos from 'aos';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../Services/Action/taskAction';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isSubmit}=useSelector(state=>state.taskReducer)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dependencies: [],
    status: '',
    resourceSID: '',
    planStartTime: null,
    planEndTime: null,
    duration: '',
    team: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      duration: name === 'planEndTime' && formData.planStartTime
        ? dayjs(value).diff(dayjs(formData.planStartTime), 'day') + ' days'
        : '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const convertedFormData = {
      ...formData,
      planStartTime: formData.planStartTime ? formData.planStartTime.toDate() : null,
      planEndTime: formData.planEndTime ? formData.planEndTime.toDate() : null,
    };

    dispatch(addTask(convertedFormData));
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (isSubmit) {
      navigate('/task');
    }
  }, [isSubmit, navigate]);

  return (
    <Container maxWidth="sm" style={{ marginTop: '7rem' }} className='p-3 border' data-aos="fade-down">
      <Row>
        <Typography variant="h4" gutterBottom className='d-flex justify-content-end'>Create Task</Typography>
        <form onSubmit={handleSubmit} className='border p-2'>

          <Box mb={3}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <Box mb={3}>
            <TextField
              label="Task Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>

          <Box mb={3}>
            <TextField
              label="Dependencies"
              name="dependencies"
              value={formData.dependencies}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box mb={3}>
              <DatePicker
                label="Plan Start Time"
                value={formData.planStartTime}
                onChange={(date) => handleDateChange('planStartTime', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>

            <Box mb={3}>
              <DatePicker
                label="Plan End Time"
                value={formData.planEndTime}
                onChange={(date) => handleDateChange('planEndTime', date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>
          </LocalizationProvider>

          <Box mb={3}>
            <TextField
              label="Duration"
              name="duration"
              value={formData.duration}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>

          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel>Team</InputLabel>
              <Select
                name="team"
                value={formData.team}
                onChange={handleChange}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="designing">Designing</MenuItem>
                <MenuItem value="designing">UI/UX</MenuItem>
                <MenuItem value="development">Frontend Development</MenuItem>
                <MenuItem value="testing">Backend Development</MenuItem>
                <MenuItem value="testing">Testing</MenuItem>
                <MenuItem value="testing">Authentication</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="not started">Not Started</MenuItem>
                <MenuItem value="in progress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mb={3}>
            <TextField
              label="Resource SID"
              name="resourceSID"
              value={formData.resourceSID}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <Box mb={3} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" type="submit">Submit</Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate('/home')}>Cancel</Button>
          </Box>
        </form>
      </Row>
    </Container>
  );
};

export default Create;
