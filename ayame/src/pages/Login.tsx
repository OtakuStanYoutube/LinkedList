import { FC } from "react";
import { Formik, Form } from "formik";

import { useRouter } from "next/router";
import NextLink from "next/link";

import Layout from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import InputField from "../components/InputField";

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
                    label="Username or Email"
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
                    type="button"
                    disabled={isSubmitting}
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
