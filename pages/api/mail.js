const sgMail = require('@sendgrid/mail');


export default (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body

        res.json({
            success: true,
            message: 'Messaggio inviato, le risponderemo il prima possibile.'
        })
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        // const msg = {
        //     to: 'support@quantum.gg',
        //     from: 'support@quantum.gg',
        //     subject: 'Richiesta di contatto - Lumafarmbio Website',
        //     html: `<p>Nome: ${name}</p> <p>Email: ${email}</p> <p>Messaggio: ${message}</p>`,
        // };
        // sgMail.send(msg)
        // .then(response => res.status(200).json({ success: true, message:'Messaggio inviato, le risponderemo il prima possibile.' }))
        // .catch(err => {
        //     console.log(err)
        //     res.status(500).json({ success: false, message: 'Oops! Qualcosa è andato storto.. })
        // })
      } else {
          res.send('Post only')
      }
  }
  