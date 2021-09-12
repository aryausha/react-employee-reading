import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, MenuList, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class Employee extends Component {
    state={
        empname:"",
        empid:"",
        designation:"",
        department:"",
        gender:"",
        salary:""
    }
    submitData=()=>
    {
        console.log(this.state)
    }
    onHandleData=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div>
                <TextField
                variant="outlined"
                fullWidth
                required
                margin="normal"
                placeholder="enter the name"
                type="text"
                name="empname" 
                onChange={this.onHandleData}
                />

                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                placeholder="enter the employee id"
                type="text"
                name="empid"
                onChange={this.onHandleData}
                />
                
                <FormControl fullWidth margin="normal">
                    <Typography>Designation</Typography>
                    <Select  name="designation"    
                    value={this.state.designation}
                    fullWidth
                    onChange={this.onHandleData}>
                          <MenuItem value="Tester">Tester</MenuItem>
                        <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                        <MenuItem value="Team Leader">Team Leader</MenuItem>
                        <MenuItem value="Associate Manager">Associate Manager</MenuItem>
                        <MenuItem value="Manager">Manager</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                    </Select>
                   

                      

                    

                </FormControl>


                <TextField 
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="text"
                placeholder="enter the department"
                name="department"
                onChange={this.onHandleData}
                />

                <RadioGroup 
                name="gender"
                value={this.state.gender}
                onChange={this.onHandleData}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="others" control={<Radio />} label="Others" />
                </RadioGroup>

                <TextField 
                variant="outlined"
                margin="normal"
                placeholder="enter the salary"
                type="number"
                fullWidth
                required
                name="salary"
                onChange={this.onHandleData}
                />

                <Button variant="contained"
                margin="normal"
                color="primary"
                type="button"
                fullWidth
                required
                onClick={this.submitData}>Submit</Button>
                
            </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>

            </Grid>
            
        )
    }
}
