import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

import { Log } from '@kitql/helpers'

export type MailOptions = {
  from?: Mail.Options['from']
  transport?: Parameters<typeof nodemailer.createTransport>[0]
  apiUrl?: Parameters<typeof nodemailer.createTestAccount>[0]
  skipPreviewURL?: boolean
}

let transporter: ReturnType<typeof nodemailer.createTransport>
let options: MailOptions | undefined

export const mailInit: (o?: MailOptions) => void = (o) => {
  options = o
  if (o?.transport) {
    transporter = nodemailer.createTransport(o?.transport)
  } else {
    nodemailer.createTestAccount(options?.apiUrl ?? '', (err, account) => {
      options = { ...options, from: account.user }

      transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      })
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

    if (!options?.skipPreviewURL) {
      // @ts-ignore
      log.info(`Topic: ${topic}, Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
    }
    log.success(`Topic: ${topic}, Sent to ${mailOptions.to}`)
    return info
  } catch (error) {
    log.error(`Topic: ${topic}, Error`, error)
  }
}
