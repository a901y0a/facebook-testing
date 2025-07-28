import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';

const Login = () => {
  const navigate = useNavigate();

  // Login states
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');

  // Signup states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users?emailOrMobile=${loginEmail}&newPassword=${password}`);
      const data = await res.json();
      if (data.length > 0) {
        const user = data[0];
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Invalid email or password.');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed.');
    }
  };

  const handleSignup = async () => {
    if (
      !firstName || !lastName || !signUpEmail || !reEmail || !signUpPassword ||
      !birthMonth || !birthDay || !birthYear || !gender
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (signUpEmail !== reEmail) {
      alert("Emails don't match.");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      emailOrMobile: signUpEmail,
      reEnterEmailOrMobile: reEmail,
      newPassword: signUpPassword,
      birthday: {
        month: birthMonth,
        day: parseInt(birthDay),
        year: parseInt(birthYear)
      },
      gender
    };

    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });

      if (res.ok) {
        alert("Signup successful! Please log in.");
        setFirstName('');
        setLastName('');
        setSignUpEmail('');
        setReEmail('');
        setSignUpPassword('');
        setBirthMonth('');
        setBirthDay('');
        setBirthYear('');
        setGender('');
      } else {
        alert("Signup failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Error during signup.");
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
        rel="stylesheet"
        type="text/css"
      />

      <div id="navwrapper">
        <div id="navbar">
          <table className="tablewrapper">
            <tbody>
              <tr>
                <td className="row1">Email or Phone</td>
                <td className="row1">Password</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="inputtext"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="password"
                    className="inputtext"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
                <td>
                  <div id="button" onClick={handleLogin}>
                    Log In
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row2">
                    <input type="checkbox" defaultChecked />
                    Keep me logged in
                  </div>
                </td>
                <td className="row2 h">Forgot your password?</td>
              </tr>
            </tbody>
          </table>
          <h1 className="logowrapper">Facebook</h1>
        </div>
      </div>

      <div id="contentwrapper">
        <div id="leftbod">
          <div className="connect bolder">
            Connect with friends and the world around you on Facebook.
          </div>
          {[{
            img: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851565_602269956474188_918638970_n.png',
            title: 'See photos and updates',
            desc: 'from friends in News Feed'
          }, {
            img: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851585_216271631855613_2121533625_n.png',
            title: "Share what's new",
            desc: 'in your life on your timeline'
          }, {
            img: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png',
            title: 'Find more',
            desc: ",of what you're looking for with graph search"
          }].map((item, i) => (
            <div className="leftbar" key={i}>
              <img src={item.img} alt="" className="iconwrap fb1" />
              <div className="fb1">
                <span className="rowtext">{item.title}</span>
                <span className="rowtext2 fb1">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <section>
          <div id="rightbod">
            <div className="signup-container">
              <div className="signup bolder">Sign Up</div>
              <div className="free bolder">It's free and always will be</div>

              <div className="formbox">
                <input
                  type="text"
                  className="inputbody in1"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className="inputbody in1 fr"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="formbox">
                <input
                  type="text"
                  className="inputbody in2"
                  placeholder="Email or mobile number"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>

              <div className="formbox">
                <input
                  type="text"
                  className="inputbody in2"
                  placeholder="Re-enter email or mobile number"
                  value={reEmail}
                  onChange={(e) => setReEmail(e.target.value)}
                />
              </div>

              <div className="formbox">
                <input
                  type="password"
                  className="inputbody in2"
                  placeholder="New password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
              </div>

              <div className="formbox">
                <div className="bday">Birthday</div>
              </div>

              <div className="formbox">
                <span data-type="selectors">
                  <select className="selectbody" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                    <option value="">Month</option>
                    {["January", "February", "March", "April", "May", "June", "July", "August",
                      "September", "October", "November", "December"].map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                  </select>

                  <select className="selectbody fl" value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
                    <option value="">Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>

                  <select className="selectbody fl" value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </span>
                <div className="fb1 why h">Why do I need to provide my birthday?</div>
              </div>

              <div className="formbox mt1">
                <span data-type="radio" className="spanpad">
                  <input
                    type="radio"
                    id="fem"
                    name="gender"
                    className="m0"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="fem" className="gender">Female</label>

                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="m0"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male" className="gender">Male</label>
                </span>
              </div>

              <div className="formbox">
                <div className="agree">
                  By clicking Sign Up, you agree to our <div className="link">Terms</div> and that
                  you have read our <div className="link">Data Use Policy</div>, including our{' '}
                  <div className="link">Cookie Use</div>.
                </div>
              </div>

              <div className="formbox">
                <button type="submit" className="signbut bolder" onClick={handleSignup}>
                  Sign Up
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
