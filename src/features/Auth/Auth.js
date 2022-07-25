import { useState } from 'react';

export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    retype_password: '',
    firstName: '',
    lastName: '',
  });

  function handleInputChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // const res = await fetch('http://localhost:3005/api/register');
    // const data = await res.json();

    const { retype_password, ...dataForServer } = values;
    // console.log(dataForServer);

    const data = await fetch('http://localhost:3005/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataForServer),
    }).then((res) => res.json());

    console.log(data);

    //fetch('http://localhost:3005/api/register').then(res => res.json()).then(data => console.log(data));
  }

  return (
    <>
      <h1 className="w-full text-3xl font-bold text-center">Register</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <p className="mt-1">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded border-black ml-1"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </p>
          <p className="mt-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded border-black ml-1"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleInputChange}
            />
          </p>
          <p className="mt-1">
            <label htmlFor="retype_password">Password</label>
            <input
              className="border rounded border-black ml-1"
              type="password"
              name="retype_password"
              id="retype_password"
              value={values.retype_password}
              onChange={handleInputChange}
            />
          </p>
          <p className="mt-1">
            <label htmlFor="firstName">First Name</label>
            <input
              className="border rounded border-black ml-1"
              type="text"
              name="firstName"
              id="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          </p>
          <p className="mt-1">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border rounded border-black ml-1"
              type="text"
              name="lastName"
              id="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          </p>
          <p className="mt-1">
            <button className="rounded bg-teal-500 text-teal-900 px-2 py-1 cursor-pointer">
              Register
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
