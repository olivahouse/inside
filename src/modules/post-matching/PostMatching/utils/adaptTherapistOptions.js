export const adaptTherapistOptions = list =>
  list.map(({ firstName, lastName, id, location }) => ({
    value: `${firstName} ${lastName || ''}`,
    id,
    location,
  }));
