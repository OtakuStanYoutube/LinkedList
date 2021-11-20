import Hello from "src/components/Hello";
import { Wrapper, Layout } from "src/components/shared";

export default function Index() {
  return (
    <>
      <Layout title="Home">
        <Wrapper>
          <Hello />
        </Wrapper>
      </Layout>
    </>
  );
}
