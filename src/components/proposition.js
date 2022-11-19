import React from "react";

const Proposition = (props) => {
  const [data, setData] = React.useState(props.data);
  // 화살표는 hover시에만 보이도록
  // tfb 의미 잘 알 수 있도록
  const OpinionMaker = (props) => {
    const [writemode, setWritemode] = React.useState(false);
    const [option, setOption] = React.useState("g");

    function handleChange(event) {
      setOption(event.target.value);
    }

    return (
      <div className="opinion_maker">
        <div className={"m_lhs m_lhs_" + option}></div>
        <div className="m_rhs">
          <div className="maker_body">
            <div className="m_top_bar">
              <select onChange={handleChange}>
                <option value="g">{"Select"}</option>
                <option value="t">{"Support"}</option>
                <option value="f">{"Rebut"}</option>
                <option value="b">{"Bad"}</option>
              </select>
              <input placeholder="name"></input>
              <button onClick={() => props.remove_me()}>xxxxxx</button>
            </div>
            <input placeholder="your proposition here"></input>
            <div className="m_bottom_bar">
              <button onClick={() => setWritemode(true)}>+</button>
              <button>post</button>
            </div>
          </div>
          {writemode ? (
            <OpinionMaker remove_me={() => setWritemode(false)} />
          ) : null}
        </div>
      </div>
    );
  };

  const DisplayProp = (propdata) => {
    const [writemode, setWritemode] = React.useState(false);

    let lhs = undefined;
    if (propdata.type === 0) {
      lhs = (
        <div className="lhs lhs_t">
          <button>{"↑"}</button>
          {"\n"}
          <button>{"↓"}</button>
        </div>
      );
    } else if (propdata.type === 1) {
      lhs = (
        <div className="lhs lhs_f">
          <button>{"↑"}</button>
          {"\n"}
          <button>{"↓"}</button>
        </div>
      );
    } else if (propdata.type === 2) {
      lhs = (
        <div className="lhs lhs_b">
          <button>{"↑"}</button>
          {"\n"}
          <button>{"↓"}</button>
        </div>
      );
    }

    const prop_information = (
      <div
        className="information"
        title={
          "True:" +
          propdata.tfb[0] +
          "  False:" +
          propdata.tfb[1] +
          "  Bad:" +
          propdata.tfb[2]
        }
      >
        <button className="name">{propdata.display_name}</button>
        <span className="separator">·</span>
        <button className="true">{propdata.tfb[0]}</button>
        <button className="false">{propdata.tfb[1]}</button>
        <button className="bad">{propdata.tfb[2]}</button>
      </div>
    );

    const prop_sentence = <main className="sentence">{propdata.sentence}</main>;

    const child =
      propdata.child.length !== 0 ? (
        <div className="child">
          {propdata.child.map((o, i) => DisplayProp(o))}
        </div>
      ) : undefined;

    return (
      <div className="opinion">
        {lhs}
        <div className="proposition">
          <div className="main_prop" onClick={(e) => setWritemode(true)}>
            {prop_information}
            {prop_sentence}
          </div>
          {writemode ? (
            <OpinionMaker remove_me={() => setWritemode(false)} />
          ) : null}
          {child}
        </div>
      </div>
    );
  };

  return DisplayProp(data);
};

export { Proposition };
