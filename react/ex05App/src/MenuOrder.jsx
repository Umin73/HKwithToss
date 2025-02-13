import styled from "styled-components";
import Header from "./MenuOrderHeader";
import Sidebar from "./MenuOrderSidebar";
import Contents from "./MenuOrderContents";
import Footer from "./MenuOrderFooter";

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Layout = styled.div`
  display: flex;
`;

export default function MenuOrderComponent() {
  return (
    <BodyWrap>
      <Header />
      <Layout>
        <Sidebar />
        <Contents />
      </Layout>
      <Footer />
    </BodyWrap>
  );
}
