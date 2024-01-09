export const meta = () => {
  return [{ title: "Fill comp" }];
};

import Layout from "~/Layouts/Layout";

export default function fillComp() {
  return (
    <Layout>
      <>
        <h2 className="underline">hello</h2>
        <h3>i am fucking awesome</h3>
        <h4>hi hi ha ha!</h4>
      </>
    </Layout>
  );
}
