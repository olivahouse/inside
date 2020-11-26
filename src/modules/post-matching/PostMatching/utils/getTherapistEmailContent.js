import moment from 'moment-timezone';
import 'moment/locale/es';

import { EN } from '../../../constants';

export const getTherapistEmailContent = ({
  therapistOptions,
  therapistId,
  customerOptions,
  customerId,
  languageCode,
  dateTime,
  timezone,
}) => {
  const [customerFirstName, customerLastName] = customerOptions
    .find(({ id }) => id === customerId)
    .value.split(' ');
  const customerLastInitial = customerLastName[0];
  const therapist = therapistOptions.find(({ id }) => id === therapistId);
  const [therapistFirstName] = therapist.value.split(' ');
  const videoCallLink = therapist.location;

  moment.locale(languageCode);

  const prettyDate = moment
    .parseZone(dateTime)
    .tz(timezone)
    .format(
      languageCode === 'es'
        ? 'dddd, D [de] MMMM [a las] HH:mm z'
        : 'dddd, MMMM D [at] HH:mm z'
    );

  if (languageCode === EN) {
    return `<div class="html-container ">
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
  <style type="text/css">
    .body-left>div {
      text-align: left;
      Margin: 0px 20px !important;
    }
​
    .gmail-show {
      display: none !important;
    }
​
    u~div .gmail-hide {
      display: none !important;
    }
​
    u~div .gmail-show {
      display: table-cell !important;
    }
​
    p {
      margin: 0;
    }
  </style>
  <div style="background-color:#ffffff;">
    <div class="body-left">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="margin:0px auto;max-width:600px;">
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
                          <p style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:100%;"></p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Hi ${therapistFirstName}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>I hope you are well.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>I have assigned you to ${customerFirstName} ${customerLastInitial} because I believe your experience is a great match for their goals and needs.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>You’re all set for your first session with ${customerFirstName} on <strong>${prettyDate}</strong>.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>When it’s time for your session, simply click on <a href="${videoCallLink}">this link</a> to join the video call.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>I’ve uploaded a report to help you get started. It’s in a secure folder that only you and I can access, you can find it here.</p>
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
      <div style="margin:0px auto;max-width:600px;">
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
                          <p style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:100%;"></p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
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
</div>`;
  }

  return `<div class="html-container ">
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
  <style type="text/css">
    .body-left>div {
      text-align: left;
      Margin: 0px 20px !important;
    }
​
    .gmail-show {
      display: none !important;
    }
​
    u~div .gmail-hide {
      display: none !important;
    }
​
    u~div .gmail-show {
      display: table-cell !important;
    }
​
    p {
      margin: 0;
    }
  </style>
  <div style="background-color:#ffffff;">
    <div class="body-left">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="margin:0px auto;max-width:600px;">
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
                          <p style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:100%;"></p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Hola ${therapistFirstName}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Espero que estés bien.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Te he asignado a ${customerFirstName} ${customerLastInitial} como cliente porque creo que tu experiencia es un muy buen complemento para sus objetivos y necesidades</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Ya está todo listo para la primera sesión con ${customerFirstName} el <strong>${prettyDate}</strong>.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Cuando sea el momento de su sesión, simplemente tienes que hacer clic en <a href="${videoCallLink}">este enlace</a> para unirte a la videollamada.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>He subido un documento con todos los detalles de su caso. Está en una carpeta segura que solo tú y yo podemos acceder. Puedes encontrarlo aquí.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Si tienes alguna pregunta, puedes comunicarte conmigo cuando lo desees.</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:0 0 24px 0;word-break:break-word;">
                          <div
                            style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue', Arial, sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                            <p>Cuídate</p>
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
      <div style="margin:0px auto;max-width:600px;">
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
                          <p style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:100%;"></p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px transparent;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
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
</div>`;
};
