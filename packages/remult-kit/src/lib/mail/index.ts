import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

import { Log } from '@kitql/helpers'

export type MailOptions = {
  from?: Mail.Options['from']
  transport?: Parameters<typeof nodemailer.createTransport>[0]
  apiUrl?: Parameters<typeof nodemailer.createTestAccount>[0]
  info?: Parameters<typeof nodemailer.getTestMessageUrl>[0]
}

let transporter: ReturnType<typeof nodemailer.createTransport>
let options: MailOptions | undefined

export const mailInit: (o?: MailOptions) => void = (o) => {
  options = o
  if (o?.transport) {
    transporter = nodemailer.createTransport(o?.transport)
  } else {
    // TODO Change defaults ? (it's nodemailer example!)
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D',
      },
    })
  }
}

const log = new Log('remult-kit | mail')

export const sendMail: (
  topic: string,
  mailOptions: Parameters<typeof transporter.sendMail>[0],
) => ReturnType<typeof transporter.sendMail> = async (topic, mailOptions) => {
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      ...{ from: mailOptions.from ?? options?.from },
    })
    log.success(`Topic: ${topic}, Sent to ${mailOptions.to}`)
    return info
  } catch (error) {
    log.error(`Topic: ${topic}, Error`, error)
  }
}
