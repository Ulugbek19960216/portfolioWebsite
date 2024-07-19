import "./education.scss";

const items = [
  {
    id: 1,
    title: "Northeastern University London",
    major: "Master of Computer Science(Grade: 77% Distinction)",
    img: "/Northeastern.png",
  },
  {
    id: 2,
    title: "Gachon University",
    major: "Bachelor of Computer Science(Grade: 89.30% Distinction)",
    img: "/Gachon.png",
  },
];

const Education = () => {
  return (
    <div className="education">
      <div className="wrapper">
        <div className="title-con">
          <div className="image">
            <img src="/Education.svg" alt="education image" />
          </div>
          <div className="title">
            <h1>Education</h1>
            <h3>Basic Qualification and Certifications</h3>
            <div className="social">
              <a href="https://github.com/Ulugbek19960216">
                <img src="/Github.png" alt="Github" />
              </a>
              <a href="https://leetcode.com/u/Ulugbek_Leo/">
                <img src="/leetcode.png" alt="LeetCode" />
              </a>
              <a href="https://www.linkedin.com/in/leo-sherov-346589215/">
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <h1 className="degreeTitle">Degrees</h1>
        <div className="degrees">
          {items.map(item => (
            <div key={item.id} className="degree-item">
                <div className="imageItem">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="degreeContent">
                    <h1>{item.title}</h1>
                    <h3>{item.major}</h3>
                </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Education;
