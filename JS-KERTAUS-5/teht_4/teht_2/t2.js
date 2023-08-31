'use strict';

(async function () {
  const user = {
    name: 'Siiri',
    job: 'Web developer',
  };
  const url = 'https://reqres.in/api/users';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
})();
