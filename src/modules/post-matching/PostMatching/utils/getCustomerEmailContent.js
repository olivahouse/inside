import { EN } from '../../../constants';

export const getCustomerEmailContent = ({
  therapistOptions,
  therapistId,
  customerOptions,
  customerId,
  languageCode,
}) => {
  const [customerFirstName] = customerOptions
    .find(({ id }) => id === customerId)
    .value.split(' ');
  const [therapistFirstName, therapistLastName] = therapistOptions
    .find(({ id }) => id === therapistId)
    .value.split(' ');

  if (languageCode === EN) {
    return `
    <div class="html-container ">
      <title></title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }

        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }

        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }

        p {
          display: block;
          margin: 13px 0;
        }
      </style>
      <!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
      <!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
      </style>
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
          .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
          }
        }
      </style>
      <style type="text/css">
        @media only screen and (max-width:480px) {
          table.mj-full-width-mobile {
            width: 100% !important;
          }

          td.mj-full-width-mobile {
            width: auto !important;
          }
        }
      </style>
      <div style="background-color:#ffffff;">
        <style type="text/css">
          .body-left>div {
            text-align: left;
            Margin: 0px 20px !important;
          }

          p {
            margin: 0;
          }
        </style>
        <div class="body-left">
          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="margin:0px;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody>
                          <tr>
                            <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                              <p style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:100%;"></p>
                              <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
    </td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>Hi ${customerFirstName}</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>Thanks again for attending your matching session, it was a pleasure getting to know you and I look forward to getting you started with the right care.</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>After carefully reviewing what we discussed, I have good news! I’ve identified ${therapistFirstName} ${therapistLastName} as a great match for your goals. They will be in touch with you shortly to confirm your first session together</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>I've uploaded a small report which sets out the goals we agreed in our session and my reasoning for matching you with ${therapistFirstName}. It’s in a secure folder that only you and I can access, you can find it here. </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>If you have any questions, you can reach out to me whenever you like.</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>From here on, all you need to do is relax and leave everything to us. I’ll be in touch personally following your second session with ${therapistFirstName} to see how things are going.</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>Take care,</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                <p>Ginnette</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
          <div style="margin:0px;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                <tbody>
                                  <tr>
                                    <td style="width:100px;"><img height="auto" src="https://oliva-static-assets.s3.amazonaws.com/Oliva-logo-93x29%402x.jpg"
                                        style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                              <p style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:100%;"></p>
                              <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
    </td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                              <div
                                style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#6A6C73;">
                                <p>Focus on you</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </div>
      </div>
    </div>
`;
  }

  return `
  <div class="html-container ">
    <title></title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  ​
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  ​
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  ​
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  ​
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  ​
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <div style="background-color:#ffffff;">
      <style type="text/css">
        .body-left>div {
          text-align: left;
          Margin: 0px 20px !important;
        }
  ​
        p {
          margin: 0;
        }
      </style>
      <div class="body-left">
        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="margin:0px;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <p style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:100%;"></p>
                            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
  </td></tr></table><![endif]-->
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>Hola ${customerFirstName}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>Gracias de nuevo por asistir a tu sesión de aginacion, fue un placer conocerte. Estamos entusiasmados de acompañarte en este viaje y verte alcanzar tus objetivos.</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>Tras nuestra entrevista y entendiendo con detalle tus necesidades y motivo de consulta he considerado que mi colega ${therapistFirstName} ${therapistLastName} es nuestro terapeuta más adecuado para ti. Estará en contacto contigo en breve.</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>He subido un documento donde están los objetivos que quieres alcanzar con la terapia, los motivos para asignarte a ${therapistFirstName} como terapeuta e información sobre su perfil y experiencia profesional. Está en una carpeta segura que solo tú y yo podemos acceder. Puedes encontrarlo aquí.</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>A partir de ahora, todo lo que necesitas hacer es relajarte y nosotros nos encargamos de todo. También me pondré en contacto personalmente después de tu segunda sesión con ${therapistFirstName} para ver cómo van las cosas.
  </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>Recibe un cordial saludo y por favor, no dudes en comentarme cualquier duda que te surja. </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                              <p>Ginnette</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="margin:0px;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                              <tbody>
                                <tr>
                                  <td style="width:100px;"><img height="auto" src="https://oliva-static-assets.s3.amazonaws.com/Oliva-logo-93x29%402x.jpg"
                                      style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <p style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:100%;"></p>
                            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
  </td></tr></table><![endif]-->
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                            <div
                              style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#6A6C73;">
                              <p>Focus on you</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  `;
};
