import { useState, useEffect } from 'react';
// import { GoogleLogin} from 'react-google-login'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
// import register from '../screens/RegisterScreen';


import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

import kodinger from '../assets/images/kodinger.jpg'
import { gapi } from 'gapi-script';

const LoginScreen = () => {
  const clientId = "142504813305-je6k8p3ect47dakg64lmhtqe6e58seuo.apps.googleusercontent.com"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  
  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("Login Failed! res:", res);
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:""

      })
    };
    gapi.load('client:auth2', start);
  })

  return (
    // <FormContainer>
    //   <h1>Sign In</h1>

    //   <Form onSubmit={submitHandler}>
    //     <Form.Group className='my-2' controlId='email'>
    //       <Form.Label>Email Address</Form.Label>
    //       <Form.Control
    //         type='email'
    //         placeholder='Enter email'
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Form.Group className='my-2' controlId='password'>
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type='password'
    //         placeholder='Enter password'
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Button disabled={isLoading} type='submit' variant='primary'>
    //       Sign In
    //     </Button>

    //     {isLoading && <Loader />}
    //   </Form>

    //   <Row className='py-3'>
    //     <Col>
    //       New Customer?{' '}
    //       <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
    //         Register
    //       </Link>
    //     </Col>
    //   </Row>
    // </FormContainer>
    <FormContainer >
    <div className="container-fluid ">
		<div className="card card-login">
			<div className="card-body">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-12">
						<div className="padding bg-primary text-center align-items-center d-flex">
							<div id="particles-js"></div>
							<div className="w-100" id ="signInButton">
								<div className="logo mb-4">
									<img src={kodinger} alt="kodinger logo" className="img-fluid1"/>
								</div>
								<h4 className="text-light mb-2">Don't waste your time</h4>
								<p className="lead text-light">Login quickly like replying to your girlfriend's message.</p>
								<button className="btn btn-block btn-icon btn-icon-google mb-3"
                  clientId={clientId}
                  buttonText='Login'
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                  >
									Login With Google
								</button>

                {/* <GoogleLogin
                  clientId={clientId}
                  buttonText='Login'
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                /> */}
							</div>

							<div className="help-links">
								<ul>
									<li><a href="#">Terms of Service</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="padding">
							<h2>Login</h2>
							<p className="lead">Before you get started, you must login or register if you don't already have an account.</p>
							<form autocomplete="off" onSubmit={submitHandler}>
								<div className="form-group">
									<label for="username">Email Address</label>
									<input  name="username" className="form-control" id="username" tabindex="1"
                          type='email'
                          placeholder='Enter email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
								</div>
								<div className="form-group">
									<label className="d-block" for="password">
										Password
										<div className="float-right">
											<a href="#">Forgot Password?</a>
										</div>
									</label>
									<input  name="password" className="form-control" id="password" tabindex="2"
                          type='password'
                          placeholder='Enter password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
								</div>
								<div className="form-group text-right">
									<div className="float-right">
										{/* <a href={register}>Create an account?</a> */}
                    <Col>
                        New Customer? {' '}
                        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                          Register
                        </Link>
                    </Col>
									</div>
									<button className="btn btn-primary" tabindex="3" disabled={isLoading} type='submit' variant='primary'>
										Login
									</button>

								</div>
                {isLoading && <Loader />}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </FormContainer>
  );
};

export default LoginScreen;
