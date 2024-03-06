import React, { useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { contactTexts, email, socialLinks } from '@/lib/texts';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    try {

      setLoading(true)
      const res = await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, formData, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

      if (res.text === "OK") {
        setLoading(false)
        toast.success(
          "Thank you for reaching out! I've received your message and will get back to you as soon as possible.",
          { position: 'bottom-center' })

        setFormData({ name: '', email: '', message: '' })
      }

    } catch (error: any) {
      setLoading(false)
      alert("Something went wrong")
      console.error("Error:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (

    <div className='padding pt-10 pb-40 flex items-center w-full flex-col gap-10 lg:flex-row lg:h-screen lg:justify-between' id='Contact'  >
      <div className='flex flex-col gap-3 lg:w-1/3'>
        <h1 className='text-3xl lg:text-4xl font-black'>{contactTexts.div.h1}</h1>
        <p className='text-muted-foreground'>{contactTexts.div.p}</p>
        <Button variant={'secondary'} onClick={() => {
          navigator.clipboard.writeText(email)
          toast.success("Email Copied", { position: 'bottom-center' })
        }
        } className='flex items-center w-full justify-start gap-5 mt-5'>
          <FontAwesomeIcon icon={faEnvelope} width={20} height={20} className='text-xl' />
          {email}
        </Button>
        <div className='flex items-center justify-evenly mt-10'>
          {[1, 2, 3, 4, 5].map(num => (
            <div key={num} className='bg-muted w-10 h-1 hover:bg-primary'></div>
          ))}
        </div>
      </div>
      <Card className='w-full sm:block hidden lg:w-1/2'>
        <CardHeader>
          <CardTitle className='text-xl'>{contactTexts.form.h1}</CardTitle>
          <CardDescription>{contactTexts.form.p}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendEmail} className='flex flex-col gap-5 w-full'>
            <div className='flex flex-col w-full gap-5 md:flex-row'>
              <div className='flex flex-col gap-1.5 w-full'>
                <Label>Name</Label>
                <Input type="text" name='name' required className='w-full' placeholder='Full Name' value={formData.name} onChange={handleChange} />
              </div>
              <div className='flex flex-col gap-1.5 w-full'>
                <Label>Email</Label>
                <Input type="email" required name='email' className='w-full' placeholder='Email Address' value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label>Message</Label>
              <Textarea name='message' required placeholder='Your message here...' value={formData.message} onChange={handleChange} />
            </div>
            <div className='flex items-center w-full justify-between'>
              <div className='flex items-center'>
                {socialLinks.map(link => (
                  <Link href={link.link} key={link.link}>
                    <Button variant={'ghost'}><FontAwesomeIcon icon={link.icon} width={18} height={18} className='text-lg' /></Button>
                  </Link>
                ))}
              </div>
              <Button className='self-end w-44 mt-1' disabled={loading}>
                {loading ? <FontAwesomeIcon icon={faSpinner} width={16} height={16} className='animate-spin' /> : 'Send'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <form onSubmit={sendEmail} className='flex flex-col gap-5 w-full sm:hidden'>
        <div className='flex flex-col gap-1.5'>
          <Label>Name</Label>
          <Input type="text" name='name' required placeholder='Full Name' value={formData.name} onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label>Email</Label>
          <Input type="email" name='email' required placeholder='Email Address' value={formData.email} onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label>Message</Label>
          <Textarea name='message' required placeholder='Your message here...' value={formData.message} onChange={handleChange} />
        </div>
        <Button className='mt-1' disabled={loading}>
          {loading ? <FontAwesomeIcon icon={faSpinner} width={16} height={16} className='animate-spin' /> : 'Send'}
        </Button>
      </form>
    </div>
  )
}


export default Contact