const Landing = ({ hide, setHide }) => {
  return (
    <div className={"landing " + hide}>
      <div className="logo"></div>
      <p>
        Takle and solve math problems to help your team defeat the super league
        and win
      </p>
      <input type="button" value="Start" onClick={setHide} />
    </div>
  );
};
export default Landing;
