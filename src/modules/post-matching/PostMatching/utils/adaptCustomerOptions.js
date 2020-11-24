export const adaptCustomerOptions = list =>
  list.map(({ firstName, lastName, email }) => ({
    value: `${firstName} ${lastName}`,
    id: email,
  }));
