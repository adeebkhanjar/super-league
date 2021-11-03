const Landing = ({ hide, setHide, lang, langHandler }) => {
  return (
    <div className={"landing " + hide}>
      <div className="lang" onClick={langHandler}>
        {lang ? "עב" : "EN"}
      </div>
      <div className="logo"></div>
      {lang ? (
        <p>
          Takle and solve math problems in 1 on 1 matchs against each of the
          super league teams to help your team advance and win
        </p>
      ) : (
        <p>
          פתור בעיות מתמטיות במשחקים של 1 על 1 מול כל אחת מהקבוצות של הסופר ליגה
          כדי לעזור לקבוצה שלך להתקדם ולנצח
        </p>
      )}
      <input type="button" value={lang ? "Start" : "התחל"} onClick={setHide} />
    </div>
  );
};
export default Landing;
