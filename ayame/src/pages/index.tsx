import Hello from "../components/Hello";
import Layout from "../components/Layout";
import { Wrapper } from "../components/Wrapper";

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
