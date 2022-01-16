import React from 'react';
import styled from '@emotion/styled';

// 스타일
// 헤더
const Header = styled.header`
  width: 100%;
  height: 50px;
  /* padding-right: initial; */
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  margin: 0 0 25px 0;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  display: flex;
  justify-content: center;
`;

// 네비게이션
const NavBar = styled.nav`
  /* width: 1060px; */
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  height: 22px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  > .hamberger_btn {
    margin-top: 10px;
    margin-right: 15px;
    border: none;
    background: none;
    cursor: pointer;
  }

  > .hamberger_btn > img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }

  > .link {
    text-decoration: none;
    font-size: 22px;
    color: #333333;
    font-weight: 700;
  }

  > .link:visited {
    text-decoration: none;
    font-size: 22px;
    color: #333333;
    font-weight: 700;
  }

  > .link:active {
    text-decoration: none;
    font-size: 22px;
    color: #333333;
    font-weight: 700;
  }
`;

const Menus = styled.ul`
  list-style: none;
  /* width: 584.05px; */
  height: 50px;
  text-align: center;

  > .menu_name {
    height: 100%;
    display: inline-block;
  }

  > .menu_name > a {
    position: relative;
    vertical-align: middle;
    color: #333333;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    display: inline-block;
    text-decoration: none;
  }

  > .menu_name > a:visited {
    text-decoration: none;
  }

  > .menu_name > a:active {
    text-decoration: none;
  }

  > .menu_name > a > em {
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
    font-style: normal;
  }

  > .menu_name > a > span {
    position: absolute;
    top: 10px;
    right: -7px;
    pointer-events: none;
  }
`;

const SignUp = styled.aside`
  /* width: 295.73px; */
  height: 50px;
  padding: 10px 0;
  display: flex;
  align-items: center;

  > ul {
    list-style: none;
  }

  > ul > li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .search_button {
    position: relative;
    margin-top: 5px;
    border: none;
    outline: none;
    background-color: #fff;
    cursor: pointer;
  }

  .employerService_dashboard {
    display: inline-flex;
  }

  .employerService_dashboard > span {
    /* display: block; */
    width: 1px;
    height: 10px;
    color: #e1e2e3;
    margin: 0 10px;
  }

  .employerService_dashboard > a {
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin-left: 15px;
    font-weight: 400;
    text-decoration: none;
  }

  .employerService_dashboard > a:visited {
    text-decoration: none;
  }

  .employerService_dashboard > a:active {
    text-decoration: none;
  }
`;

const SignUpBtn = styled.button`
  /* width: 124.16px; */
  height: 14px;
  margin-right: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #333333;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  return (
    <Header>
      {/* 네비네이션 */}
      <NavBar>
        {/* 로고와 햄버거 버튼 */}
        <Logo>
          <button className="hamberger_btn">
            <img
              src="https://static.wanted.co.kr/images/icon-menu.png"
              alt="hamberger_btn"
            />
          </button>
          <a href="/" className="link">
            wanted
          </a>
        </Logo>

        {/* 메뉴들 */}
        <Menus>
          <li className="menu_name">
            <a href="#">채용</a>
          </li>
          <li className="menu_name">
            <a href="#">이벤트</a>
          </li>
          <li className="menu_name">
            <a href="#">직군별 연봉</a>
          </li>
          <li className="menu_name">
            <a href="#">이력서</a>
          </li>
          <li className="menu_name">
            <a href="#">
              커뮤니티
              <em>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    font-size="9"
                    font-weight="500"
                  >
                    <g fill="#3366FF">
                      <g fill="#3366FF">
                        <g fill="#3366FF">
                          <g fill="#3366FF">
                            <g fill="#3366FF">
                              <g fill="#3366FF">
                                <g fill="#3366FF">
                                  <text
                                    transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"
                                    fill="#3366FF"
                                  >
                                    <tspan x="0" y="8" fill="#3366FF">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </em>
            </a>
          </li>
          <li className="menu_name">
            <a href="#">프리랜서</a>
          </li>
          <li className="menu_name">
            <a href="#">
              AI 합격예측
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    font-size="9"
                    font-weight="500"
                  >
                    <g fill="#3366FF">
                      <g fill="#3366FF">
                        <g fill="#3366FF">
                          <g fill="#3366FF">
                            <g fill="#3366FF">
                              <g fill="#3366FF">
                                <g fill="#3366FF">
                                  <text
                                    transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"
                                    fill="#3366FF"
                                  >
                                    <tspan x="0" y="8" fill="#3366FF">
                                      Beta
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </li>
        </Menus>

        {/* 회원가입/로그인 및 기업 서비스 */}
        <SignUp>
          <ul>
            <li>
              <button className="search_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                >
                  <path
                    d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"
                    fill="#333333"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <SignUpBtn>회원가입/로그인</SignUpBtn>
            </li>
            <li className="employerService_dashboard">
              <span>|</span>
              <a href="#">기업 서비스</a>
            </li>
          </ul>
        </SignUp>
      </NavBar>
    </Header>
  );
};

export default Navbar;
