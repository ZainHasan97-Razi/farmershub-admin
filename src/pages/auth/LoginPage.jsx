// libraries
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Image, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";

// constants
import { apiRoutes, routes } from "../../lib/contants";
import { notifySuccess } from "../../lib/helper/toast";
import { intialStateLogin, validateLoginSchema } from "../../models/login";
import { postRequest } from "../../services/axios/axiosMethods";

// assets
import { EmailIcon, LockIcon } from "../../components/icons/icons";
import Logo from "../../components/logos/Logo";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const [showInputOtp, setShowInputOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  const props = {
    inputStyle: {
      fontFamily: "monospace",
      margin: ".25rem",
      MozAppearance: "textfield",
      width: "3.875rem",
      height: "4.0625rem",
      borderRadius: ".1875rem",
      fontSize: "2.5625rem",
      paddingLeft: ".4375rem",
      backgroundColor: "white",
      WebkitAppearance: "none",
      textAlign: "center",
    },
  };

  const signInAdmin = async (values, actions) => {
    actions.setSubmitting(true);
    try {
      const response = await postRequest(apiRoutes.signin, values);
      notifySuccess(response.message);
      actions.setSubmitting(false);
      response && setShowInputOtp(true);
    } catch (error) {
      setShowInputOtp(false);
      actions.setSubmitting(false);
    }
    actions.setSubmitting(false);
  };

  const verifyOtpCode = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await postRequest(apiRoutes.verifyOtp, { otp });
      if (response) {
        navigate(routes.HOME);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (otp.length === 6) {
      verifyOtpCode();
    }
    // eslint-disable-next-line
  }, [otp]);

  const goBack = () => {
    setShowInputOtp(false);
    setOtp("");
  };

  return (
    <main>
      <section
        className="min-vh-100 bg-cover py-5 d-flex align-items-center"
        style={{ backgroundImage: `url(/assets/sign-in-hero.jpg)` }}
      >
        <div className="container">
          <ul className="nav row row-cols-1 row-cols-lg-2 gy-4">
            <li>
              <div className="h-100 d-flex align-items-end">
                <h5 className="mb-0 fw-semibold text-white text-center text-lg-start">
                  Pakistan's online cattle and livestock marketplace
                </h5>
              </div>
            </li>
            <li className="order-first order-lg-last">
              <div className="bg-light rounded-4 shadow p-3">
                <div className="bg-white p-4 p-lg-5">
                  <Logo className="mx-auto mb-4" />
                  <h4 className="mb-4 fw-bold text-center">
                    {showInputOtp ? (
                      <>
                        <Button onClick={goBack}>
                          <Image
                            src={
                              "	https://maweshi.co/static/media/arrow-left.a2563718f4104ee9b357c58c55f72c84.svg"
                            }
                            className={"h-100"}
                          />
                        </Button>{" "}
                        <span>Enter otp</span>
                      </>
                    ) : (
                      "Login to Mall Maweshi"
                    )}
                  </h4>
                  {showInputOtp ? (
                    <div className="w-100 text-center">
                      <ReactCodeInput
                        type="number"
                        onChange={(value) => setOtp(value)}
                        value={otp}
                        fields={6}
                        autoFocus={true}
                        {...props}
                      />
                    </div>
                  ) : (
                    <Formik
                      validationSchema={validateLoginSchema}
                      onSubmit={(values, actions) => {
                        signInAdmin(values, actions);
                      }}
                      initialValues={intialStateLogin}
                      enableReinitialize={true}
                    >
                      {({
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        isSubmitting,
                      }) => (
                        <>
                          <form onSubmit={handleSubmit} noValidate>
                            <ul className="nav flex-column gap-4">
                              <li className="text-left">
                                <Form.Label
                                  htmlFor="email"
                                  className="fs-7 fw-500 ps-2"
                                >
                                  Email
                                </Form.Label>
                                <div className="border rounded-2 py-2">
                                  <InputGroup>
                                    <InputGroup.Text className="bg-white border-0">
                                      <EmailIcon />
                                    </InputGroup.Text>
                                    <Form.Control
                                      className="bg-white border-0"
                                      placeholder="Infor@gmail.com"
                                      id="email"
                                      name="email"
                                      type="email"
                                      isValid={touched.email}
                                      isInvalid={errors.email}
                                      onChange={handleChange}
                                      required
                                    />
                                  </InputGroup>
                                </div>
                              </li>
                              <li className="text-left">
                                <Form.Label
                                  htmlFor="password"
                                  className="fs-7 fw-500 ps-2"
                                >
                                  Password
                                </Form.Label>
                                <div className="border rounded-2 py-2">
                                  <InputGroup>
                                    <InputGroup.Text className="bg-white border-0">
                                      <LockIcon />
                                    </InputGroup.Text>
                                    <Form.Control
                                      className="bg-white border-0"
                                      placeholder="************"
                                      id="password"
                                      name="password"
                                      type="password"
                                      isValid={touched.password}
                                      isInvalid={errors.password}
                                      onChange={handleChange}
                                      required
                                    />
                                  </InputGroup>
                                </div>
                              </li>
                              <li className="mt-4">
                                <button
                                  type="submit"
                                  className="btn btn-primary py-3 w-100 text-white text-uppercase"
                                  disabled={isSubmitting}
                                >
                                  <span className="fs-7 fw-bold">LOGIN</span>
                                </button>
                              </li>
                            </ul>
                          </form>
                        </>
                      )}
                    </Formik>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
