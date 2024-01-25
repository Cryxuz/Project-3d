import { Suspense, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from "react-three-fiber"
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from "../hooks/useAlert"
import Alert from "../components/Alert"
import { Link } from "react-router-dom"
import {socialLinks} from '../constants'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email:'', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('Animation')
  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('Animation')
    emailjs.send(
      'service_dczlb0h',
      'template_ct0lsur',
      {
        from_name: form.name,
        to_name: "Paul",
        from_email: form.email,
        to_email: 'paul_tan@outlook.co.nz',
        message: form.message
      },
      '1H56cToN0sf_8O8pm'
    ).then(() => {
      setIsLoading(false)
      showAlert( {show: true, text: 'Message sent successfully', type: 'success'})
      setForm({ name:'', email: '', message: ''})

    }).catch((err) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
      showAlert( {show: true, text: 'Message sending failed', type: 'danger'})
    })
  }
  const handleFocus = () => {
    if (currentAnimation === 'idle') {
      setCurrentAnimation('Animation');
    }
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }
 
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100%]">
      {alert.show && <Alert{...alert} />}
      
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form 
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold" htmlFor="name">
            Name
          <input 
          type="text" 
          name="name" 
          className="input" 
          placeholder="Enter Name"
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          </label>

          <label className="text-black-500 font-semibold" htmlFor="email">
            Email
          <input 
          type="email" 
          name="email" 
          className="input" 
          placeholder="Enter Email"
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button 
          type="submit"
          className="btn"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="flex items-center justify-center gap-12 mt-12">
        {socialLinks.map((link) => (
            <Link target='_blank' key={link.name} to={link.link}><img  src={link.iconUrl} alt="" /></Link>
        ))}
        </div>
        
      </div>
      <div className="lg:w1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
            <directionalLight intensity={2.5} position={[0,0,1]} />
            <ambientLight intensity={0.3} />
            <Suspense fallback={< Loader />}>
              <Fox 
                currentAnimation={currentAnimation}
                position={[0.3, -0.1, 0]}
                rotation={[ 12.9, -0.2, 0]}
                scale={[0.5, 0.5, 0.5]}
               />
            </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact