import React from 'react'
import { Box, AppBar, Toolbar, Button, Typography,Tabs,Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState } from 'react'


const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const [val, setVal] = useState();
  return (
      <>
          <AppBar position='sticky'>
              <Toolbar>
                  <Typography variant='h4'>
                    My Blog App                      
          </Typography>
          {isLogin && (
            <Box display={'flex'} marginLeft="auto" marginRight={"auto"}>
            <Tabs textColor='inherit' value={val} onChange={(e, val) => setVal(val)}>
              <Tab label="Blogs" LinkComponent={Link} to='/blogs' />
              <Tab label="My Blogs" LinkComponent={Link} to='/my-blogs'/>
            </Tabs>
          </Box>
          )}
                  <Box display={'flex'} marginLeft="auto">
            {!isLogin && (<>
              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/login">Login</Button>
              <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/Register">Register</Button>
              </> )}

                {isLogin&&(  <Button sx={{ margin: 1, color: 'white' }}>Logout</Button>)}
                  </Box>
              </Toolbar>
          </AppBar>   
    </>
  )
}

export default Header