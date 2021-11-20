import { FC } from "react";

//MUI Components
// import { Button } from "@material-ui/core";

import { LoginForm } from "src/modules";
import { Wrapper, Layout } from "src/components/shared";

const LoginPage: FC<{}> = ({}) => {
  return (
    <>
      <Layout title="Login">
        <Wrapper>
          <LoginForm message="Login" />
        </Wrapper>
      </Layout>
    </>
  );
};
export default LoginPage;
