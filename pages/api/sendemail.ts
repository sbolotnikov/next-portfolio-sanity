import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect';
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



// const handler = nc<NextApiRequest, NextApiResponse>();
// interface ExtendedRequest {
//   body: {
//         mainEmail: string,
//         name: string,
//         message: string,
//         email: string,
//       }
// }
// interface ExtendedResponse {
//   // cookie(name: string, value: string): void;
//   // status: string
// }

// handler.post<ExtendedRequest, ExtendedResponse>((req: NextApiRequest, res: NextApiResponse) => {


  export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;


  console.log(body)
  console.log(process.env.SENDGRID_API_KEY)
  sgMail
    .send({
      from: "serge.bolotnikov@gmail.com",
      to: body.mainEmail,
      subject: `Message From ${body.name}`,
      text: body.message + ' | Sent from: ' + body.email,
      html: `<div>${body.message}</div><p>Sent from:
        ${body.email}</p>`,
    })
    .then((result: Object) =>{console.log(result); res.status(200).json({ status: 'Email sent' })})
    .catch((error: Object) => {
      console.error(error)
    })
};
