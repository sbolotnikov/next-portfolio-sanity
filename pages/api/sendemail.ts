import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next'
const sgMail = require('@sendgrid/mail')
import { onError } from '../../utils/error';
type Data = {
    name: string
  }
const handler = nc({
  onError,
});
handler.post(async(req: NextApiRequest,
    res: NextApiResponse<Data>) =>{
  
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
        res.status(200).send
    )
    .catch((error:Object) => {
      console.error(error)
    })
  
  });
  export default handler;