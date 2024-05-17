// doctor_dashboard.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const appointments = [
    { id: 1, name: 'John', surname: 'Doe', date: '2024-05-01' },
    { id: 2, name: 'Jane', surname: 'Smith', date: '2024-05-02' },
    { id: 3, name: 'Emily', surname: 'Jones', date: '2024-05-03' },
];

function DoctorDashboard({ onLogout }) {
    const handleConfirm = (appointmentId) => {
        console.log(`Confirmed appointment ${appointmentId}`);
        // Additional logic to handle confirmation
    };

    const handleDecline = (appointmentId) => {
        console.log(`Declined appointment ${appointmentId}`);
        // Additional logic to handle declination
    };

    return (
        <div style={{ padding: 20 }}>
            <h4>Doctor's Dashboard</h4>

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
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map(appointment => (
                            <TableRow key={appointment.id}>
                                <TableCell>{appointment.name}</TableCell>
                                <TableCell>{appointment.surname}</TableCell>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleConfirm(appointment.id)}
                                        style={{ marginRight: 10 }}
                                    >
                                        Confirm
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDecline(appointment.id)}
                                    >
                                        Decline
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DoctorDashboard;
