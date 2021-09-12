import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class Employeetable extends Component {
    state={
       employeeData:[ 
           {
        "employeename":"abc", 
        "empid":12,
         "designation":"software engineer",
        "department":"cse",
         "gender":"female",
         "salary" :20000
        },
        { 
            "employeename":"cde", 
        "empid":23,
         "designation":"manager",
        "department":"cse",
         "gender":"male",
         "salary" :60000
        },
        {
            "employeename":"ghe", 
        "empid":13,
         "designation":"Tester",
        "department":"cse",
         "gender":"male",
         "salary" :30000
        },
        {
            "employeename":"abk", 
        "empid":123,
         "designation":"Team Leader",
        "department":"cse",
         "gender":"female",
         "salary" :80000
        },
        {
            "employeename":"abc", 
        "empid":123,
         "designation":"HR",
        "department":"cse",
         "gender":"female",
         "salary" :850000
        }
        ]
    }
    render() {
        return (
            <div>
                <Typography align="center">Employee Record</Typography>
            <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
            <TableCell>slno</TableCell>
            <TableCell>empname</TableCell>
            <TableCell>empid</TableCell>
            <TableCell>designation</TableCell>
            <TableCell>department</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>salary</TableCell>


            
            </TableRow>
            </TableHead>
            <TableBody>
             {this.state.employeeData.map(
                (value,index)=>{
                return <TableRow>
                    <TableCell>{index}</TableCell>
                    <TableCell>{value.employeename}</TableCell>
                    <TableCell>{value.empid}</TableCell>
                    <TableCell>{value.designation}</TableCell>
                    <TableCell>{value.department}</TableCell>
                    <TableCell>{value.gender}</TableCell>
                    <TableCell>{value.salary}</TableCell>
                </TableRow>
            }
            
            )} 
            
            </TableBody>
            </Table>
            </TableContainer>
            </div>
        )
    }
}
