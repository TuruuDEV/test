import menu from "../assets/images/menu.svg";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img
          src="https://e-mongolia.mn/static/assets/d1feb3161a9c0171eba4cc7b0479b714.svg"
          alt=""
        />
        <div className="header-right">
          <div className="name-id">
            <div>
              <h2>Г. ТӨРМӨНХ</h2>
              <h3>810106772677</h3>
            </div>
            <span>{">"}</span>
          </div>
          <button className="menu">
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
