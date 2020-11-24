const { stringify } = require('query-string');

const { APPOINTMENT_TYPE_IDS, OWNER_IDS } = require('../../../constants');

export const getBookingLink = ({
  certificate,
  therapistOptions,
  therapistId,
  customerOptions,
  customerId,
  languageCode,
}) => {
  const customer = customerOptions.find(({ id }) => id === customerId);
  const [firstName, lastName] = customer.value.split(' ');
  const email = customer.id;
  const calendarID = therapistOptions.find(({ id }) => id === therapistId).id;

  const owner = OWNER_IDS[languageCode];
  const appointmentType = APPOINTMENT_TYPE_IDS[owner].INDIVIDUAL_THERAPY;

  const queryString = stringify({
    owner,
    firstName,
    lastName,
    email,
    calendarID,
    appointmentType,
    certificate,
  });

  return `https://app.acuityscheduling.com/schedule.php?${queryString}`;
};
