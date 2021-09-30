import { FC } from "react";
import { Formik, Form } from "formik";

import { useRouter } from "next/router";
import NextLink from "next/link";

//MUI Components
// import { Button } from "@material-ui/core";

import Layout from "src/components/Layout";
import { Wrapper } from "src/components/Wrapper";
import InputField from "src/components/InputField";

const LoginPage: FC<{}> = ({}) => {
  const router = useRouter();
  return (
    <>
      <div>
        <Layout title="Login">
          <Wrapper>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values, { setErrors }) => {
                console.log(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField
                    name="email"
                    placeholder="lolilover@hentaihaven.org"
                    label="Email"
                  />
                  <InputField
                    name="password"
                    placeholder="*******"
                    label="Password"
                    type="password"
                  />
                  <NextLink href="#">forgot password?</NextLink>
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    login
                  </button>
                </Form>
              )}
            </Formik>
          </Wrapper>
        </Layout>
      </div>
    </>
  );
};
export default LoginPage;
