// patient_dashboard.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const appointments = [
    { id: 1, doctor: 'Dr. Smith', date: '2024-05-10', state: 'Confirmed' },
    { id: 2, doctor: 'Dr. Johnson', date: '2024-05-12', state: 'Waiting' },
    { id: 3, doctor: 'Dr. Davis', date: '2024-05-15', state: 'Declined' },
];

const doctors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Johnson' },
    { id: 3, name: 'Dr. Davis' },
];

function PatientDashboard({ onLogout }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', surname: '', doctorId: '', date: new Date() });
    var new_process_id = "";

    const openForm = () => {
        setIsFormOpen(true);
        startProcess(); // Start the Camunda process directly after form opening
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => setFormData({ ...formData, date });

    const submitForm = () => {
        console.log("New appointment created with:", formData);
        submitTask(formData);
    };

    const startProcess = () => {
        const processKey = 'Process_1tn5lww';
        const requestBody = {"variables": {}, "withVariablesInReturn": true}

        axios.post(`http://localhost:8080/engine-rest/process-definition/key/${processKey}/start`, requestBody)
            .then(response => {
                console.log("Process started:", response.data);
                new_process_id = response.data.id
            })
            .catch(error => {
                console.error("Error starting process:", error);
            });
    };

    const submitTask = (formData) => {

        const taskId = "";
        axios.get(`http://localhost:8080/engine-rest/task`)
            .then(response => {
                console.log("Got tasks", response.data);
                const task = response.data.find(res => res.processInstanceId === new_process_id)
                //taskId = task.id
                console.log("got id:", task)
            })
            .catch(error => {
                console.error("No tasks", error);
            });

        const doctor = doctors.find(doc => doc.id === formData.doctorId);
        const requestBody = {
            "variables":
            {
                "textfield_ldrmxn": {"value": formData.name},
                "textfield_u9tzvp": {"value": formData.surname},
                "textfield_naql4a": {"value": doctor.name},
                "textfield_n1nezm": {"value": "02.05.2024"}
            },
            "withVariablesInReturn": true
        }

        axios.post(`http://localhost:8080/engine-rest/task/1741992f-089c-11ef-88d3-0242ac110002/complete`, requestBody)
            .then(response => {
                console.log("Task submitted:", response.data);
            })
            .catch(error => {
                console.error("Error submitting task:", error);
            });
    };

    return (
        <div style={{ padding: 20 }}>
            <h4>Patient's Dashboard</h4>

            <Button
                variant="contained"
                color="secondary"
                onClick={onLogout}
                style={{ marginBottom: 20 }}
            >
                Log Out
            </Button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Doctor</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map(appointment => (
                            <TableRow key={appointment.id}>
                                <TableCell>{appointment.doctor}</TableCell>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>{appointment.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                variant="contained"
                color="primary"
                onClick={openForm}
                style={{ marginTop: 20 }}
            >
                New Appointment
            </Button>

            {isFormOpen && (
                <div style={{ marginTop: 20 }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Doctor</InputLabel>
                        <Select
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleChange}
                        >
                            {doctors.map(doctor => (
                                <MenuItem key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div style={{ marginTop: 20 }}>
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitForm}
                            style={{ marginTop: 10 }}
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PatientDashboard;