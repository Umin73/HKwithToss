import styled from "styled-components";

const Header = styled.div`
  display: block;
  position: relative;
  width: 100%;
  min-width: 1100px;
  height: 91px;
  background: #fff;
  border-bottom: 1px solid #351f67;
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 23px;
  width: 140px;
  height: 90px;
  margin: 0 0 0 -70px;
  padding: 0;
`;

const LogoText = styled.a`
  display: block;
  width: 140px;
  height: 47px;
  margin: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
  background: url(https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png)
    center center no-repeat;
`;

const UtilArea = styled.div`
  position: relative;
  display: block;
  width: 1100px;
  margin: 0 auto;
  color: #666;

  &::before,
  &::after {
    content: "";
    display: table;
  }
`;

const LeftLink = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  font-size: 0.8667em;
`;

const RightLink = styled.div`
  position: absolute;
  top: 15px;
  right: 0;
  font-size: 0.8667em;
`;

const LinkArea = styled.div`
  display: block;
  position: absolute;
  top: 42px;
  width: 36px;
  height: 36px;
  font-size: 0;
  line-height: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;

  &::before,
  &::after {
    content: "";
    display: table;
  }
`;

const LinkAreaA = styled.div`
  display: block;
  position: absolute;
  top: 42px;
  width: 36px;
  height: 36px;
  font-size: 0;
  line-height: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
`;

export default function HeaderComponent() {
  const linkStyle = {
    color: "#666",
    marginRight: "10px",
  };

  const siteMapBtnStyle = {
    left: "0",
    backgroundImage:
      "url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-sitemap.png)",
  };

  const searchBtnStyle = {
    left: "40px",
    backgroundImage:
      "url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-search.png)",
  };

  const timetableBtnStyle = {
    right: "40px",
    backgroundImage:
      "url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule.png)",
  };

  const myMegaboxBtnStyle = {
    right: "0",
    backgroundImage:
      "url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-mymega.png)",
  };

  return (
    <Header>
      <Logo>
        <LogoText href="#"></LogoText>
      </Logo>
      <UtilArea>
        <LeftLink>
          <a href="#" style={linkStyle}>
            VIP LOUNGE
          </a>
          <a href="#" style={linkStyle}>
            멤버십
          </a>
          <a href="#" style={linkStyle}>
            고객센터
          </a>
        </LeftLink>
        <RightLink>
          <a href="#" style={linkStyle}>
            로그인
          </a>
          <a href="#" style={linkStyle}>
            회원가입
          </a>
          <a href="#" style={linkStyle}>
            빠른예매
          </a>
        </RightLink>
        <LinkArea>
          <LinkAreaA
            href="#"
            title="사이트맵"
            style={siteMapBtnStyle}
          ></LinkAreaA>
          <LinkAreaA href="#" title="검색" style={searchBtnStyle}></LinkAreaA>
          <LinkAreaA
            href="#"
            title="상영시간표"
            style={timetableBtnStyle}
          ></LinkAreaA>
          <LinkAreaA
            href="#"
            title="나의 메가박스"
            style={myMegaboxBtnStyle}
          ></LinkAreaA>
        </LinkArea>
      </UtilArea>
    </Header>
  );
}
