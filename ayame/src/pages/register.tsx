import { FC } from "react";

//MUI Components
// import { Button } from "@material-ui/core";

import { RegisterForm } from "src/modules";
import { Wrapper, Layout } from "src/components/shared";

const RegisterPage: FC<{}> = ({}) => {
  return (
    <>
      <Layout title="Register">
        <Wrapper>
          <RegisterForm message="Register" />
        </Wrapper>
      </Layout>
    </>
  );
};
export default RegisterPage;
