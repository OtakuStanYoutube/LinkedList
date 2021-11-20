import { FC } from "react";
import { useRouter } from "next/router";
// import NextLink from "next/link";

//MUI Components
// import { Button } from "@material-ui/core";

import Layout from "src/components/shared/Layout";
import { Wrapper } from "src/components/shared/Wrapper";
import LoginForm from "src/modules/auth/LoginForm";

const LoginPage: FC<{}> = ({}) => {
  const router = useRouter();
  return (
    <>
      <div>
        <Layout title="Login">
          <Wrapper>
            <LoginForm message="Login" />
          </Wrapper>
        </Layout>
      </div>
    </>
  );
};
export default LoginPage;
