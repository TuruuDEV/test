import mail from "../assets/images/mail.svg";
import proimg from "../assets/images/profileImg.png";
import footer from "../assets/images/footer.png";

export const Content = () => {
  return (
    <>
      <div className="welcome">
        <div>
          <p className="hm">
            Нүүр &nbsp; / &nbsp; <span>Хянах самбар</span>
          </p>
        </div>
        <div className="name">
          <h4>Тавтай морилно</h4>
          <span className="nm">
            уу! &nbsp; &nbsp;
            <b>Г.ТӨРМӨНХ</b>
          </span>
        </div>
      </div>
      <div className="personal-information">
        <div
          style={{
            borderBottom: "1px solid #e8e8e8",
            margin: "0 15px ",
          }}
        >
          <div className="pi-navbar">
            <div className="op">{"<"}</div>
            <span
              style={{
                marginLeft: "-20px",
              }}
            >
              oo
            </span>
            <span>Мэдээлэл</span>
            <span>
              Хувийн мэдээлэл
              <p></p>
            </span>
            <div className="op">{">"}</div>
            <img width="15px" height="15px" src={mail} alt="" />
          </div>
        </div>
        <div className="personal">
          <div className="per-content">
            <h1 className="per-text">Хувийн мэдээлэл</h1>
            <div className="items">
              <img width="100%" src={proimg} alt="" />
              <h1 className="main-information">Үндсэн мэдээлэл</h1>
              <Text bg="#eff3fb" fir="Регистрийн дугаар:" sec="иэ01211814" />
              <Text bg="#fff" fir="Ургийн овог:" sec="Алаг адуутан" />
              <Text bg="#eff3fb" fir="Эцэг /эх/-ийн нэр:" sec="Ганбат" />
              <Text bg="#fff" fir="Нэр:" sec="ТӨРМӨНХ" />
              <Text bg="#eff3fb" fir="Яс үндэс:" sec="Халх" />
              <Text bg="#fff" fir="Хүйс:" sec="Эрэгтэй" />
              <h1 className="main-information">Төрсөн</h1>
              <Text bg="#eff3fb" fir="Огноо:" sec="2001-01-18" />
              <Text bg="#fff" fir="Газар:" sec="Завхан,Улиастай" />
              <h1 className="main-information">Иргэний үнэмлэх</h1>
              <Text bg="#eff3fb" fir="Бүртгэлийн дугаар:" sec="810106772677" />
              <Text bg="#fff" fir="Олгосон огноо:" sec="2019-03-05" />
              <Text bg="#eff3fb" fir="Хүчинтэй хугацаа:" sec="2028-01-18" />
              <h1 className="main-information">Иргэний үнэмлэхэд хэвлэгдсэн хаяг</h1>
              <Text
                bg="#eff3fb"
                fir="Хаяг:"
                sec="Завхан, Улиастай, 3-р баг, Чигэстэй@жавхлантын хэсэг 2 гудамж@10 тоот"
              />
            </div>
          </div>
        </div>
        <div>
          <img width="100%" src={footer} alt="" />
        </div>
      </div>
    </>
  );
};
const Text = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: props.bg,
        }}
        className="information"
      >
        <h2>{props.fir}</h2>
        <h3>{props.sec}</h3>
      </div>
    </div>
  );
};
