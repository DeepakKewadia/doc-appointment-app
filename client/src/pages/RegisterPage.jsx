import React from 'react'
import { Form, Input, message } from 'antd'
import axios from 'axios'
import '../styles/registerStyles.css'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/user/register',
        values
      )
      if (res.data.success) {
        message.success('Register Successfully.')
        navigate('/login')
      } else {
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error('Something went wrong.')
    }
  }

  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onFinishHandler} className='card p-4'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label='Name' name='name'>
            <Input type='text' required></Input>
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input type='email' required></Input>
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input type='password' required></Input>
          </Form.Item>
          <Link to='/login' className='m-2'>
            Already a user Login here
          </Link>
          <button className='btn btn-primary' type='submit'>
            Register
          </button>
        </Form>
      </div>
    </>
  )
}

export default RegisterPage
