import { styled } from '@mui/system'
import Box from '@mui/material/Box'

export const Container = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;  
 

  > h2 {
    font-size: 25px;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    font-family: monospace;
    color: #2e00ff;
  }
`

export const Content = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* width: 10%; */
  /* background-color: #2e00ff; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;



 button {
   margin-left: 20px;
   height: 55px;
   /* background-color: #000; */


 }
`
