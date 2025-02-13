function Main() {
  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
  };

  const titleStyle = {
    flex: "1 100%",
    fontWeight: "bold",
    fontSize: "32px",
    padding: "30px 0",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  return (
    <div style={mainStyle}>
      <h1 style={titleStyle}>추천 제품</h1>
      <div style={contentStyle}>
        <div className="box">
          <div className="top">
            <div className="topName">프리미엄 노트북</div>
            <div className="topPrice">1,599,000원</div>
          </div>
          <div className="middle">최신 사양의 고성능 노트북</div>
          <div className="bottom">
            <div className="bottomCategory">전자기기</div>
            <div className="bottomCart">장바구니 담기</div>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <div className="topName">무선 헤드폰</div>
            <div className="topPrice">299,000원</div>
          </div>
          <div className="middle">프리미엄 사운드의 노이즈 캔슬링 헤드폰</div>
          <div className="bottom">
            <div className="bottomCategory">전자기기</div>
            <div className="bottomCart">장바구니 담기</div>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <div className="topName">스마트 워치</div>
            <div className="topPrice">399,000원</div>
          </div>
          <div className="middle">피트니스 트래킹과 스마트 연결 가능</div>
          <div className="bottom">
            <div className="bottomCategory">액세사리</div>
            <div className="bottomCart">장바구니 담기</div>
          </div>
        </div>
        <div className="hidden box">
          <div className="top">
            <div className="topName">프리미엄 노트북</div>
            <div className="topPrice">1,599,000원</div>
          </div>
          <div className="middle">최신 사양의 고성능 노트북</div>
          <div className="bottom">
            <div className="bottomCategory">전자기기</div>
            <div className="bottomCart">장바구니 담기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
