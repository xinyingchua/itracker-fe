import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import {Image} from 'cloudinary-react'

const useStyles = makeStyles((theme) => ({

  image: {
    backgroundRepeat: 'no-repeat',
    borderRadius: "50%",
    backgroundPosition: 'center',
    width: "250px",
    marginTop: "40px"
  },
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

}))

export default function UserUpdate() {
    const classes = useStyles();


    const [imageSelected, setImageSelected] = React.useState("")
    // submit form function
  const handleFormSubmission = async (e) => { 
    e.preventDefault()
  }

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "wsdztkez")
    axios.post("https://api/cloudinary.com/v1_1/dhexix4cn/image/upload", formData)
    .then((response) =>
    console.log(response))
  }

    return(
        <div style={{textAlign:"center"}}>

      <img
        src="https://res.cloudinary.com/dhexix4cn/image/upload/v1631430944/itracker/avatar_yvmom4.jpg"
        alt='product'
        
        className={classes.image}
        />

        <Image cloudName ="dhexix4cn"/>
        
        <input type ="file"
        onChange={(event) => {
        setImageSelected(event.target.files[0])
        }}
        />

  
         <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              handleFormSubmission(e)
            }}
          >

            <TextField
                variant='outlined'
                margin='normal'
                required
                halfWidth
                style={{ width: '30%' }}
                id='firstName'
                label='First Name'
                name='firstName'
                // autoComplete='firstName'
                autoFocus
                onChange={(e) => {
                    // setEmailLogin(e.target.value)
              }}
            />
            <TextField
              variant='outlined'
                margin='normal'
                required
                halfWidth
                style={{ width: '30%', marginLeft: '6px' }}
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lastName'
                autoFocus
                onChange={(e) => {
                    // setEmailLogin(e.target.value)
                }}
            />
            <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                style={{ width: '60%'}}               
                id='contact'
                label='Contact Number'
                name='contact'
                autoComplete='contact'
                autoFocus
                onChange={(e) => {
                    // setEmailLogin(e.target.value)
                }}
            />

        </form>
        <Button
        onClick={uploadImage}>
                Update
                
            </Button>

        </div>

    )

}