import Hello from "src/components/Hello";
import Layout from "src/components/Layout";
import { Wrapper } from "src/components/Wrapper";

export default function Index() {
  return (
    <>
      <div>
        <Layout title="Home">
          <Wrapper>
            <Hello />
          </Wrapper>
        </Layout>
      </div>
    </>
  );
}
