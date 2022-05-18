
import type { NextApiRequest, NextApiResponse } from 'next'
const sgMail = require('@sendgrid/mail')
type Data = {
    name: string
  }
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  sgMail
    .send({
        from: req.body.mainEmail,
        to: req.body.mainEmail,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
    })
    .then(() => 
        res.status(200).json({ name: 'Email sent' })
    )
    .catch((error:Object) => {
      console.error(error)
    })
  
  }