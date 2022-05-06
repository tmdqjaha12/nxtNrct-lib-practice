import Link from "next/link";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ReactDropdown = () => {
  const options = ["one", "two", "three"];
  const options2 = [
    { value: "one", label: "One" },
    { value: "two", label: "Two", className: "myOptionClassName" },
    {
      type: "group",
      name: "group1",
      items: [
        { value: "three", label: "Three", className: "myOptionClassName" },
        { value: "four", label: "Four" },
      ],
    },
    {
      type: "group",
      name: "group2",
      items: [
        { value: "five", label: "Five" },
        { value: "six", label: "Six" },
      ],
    },
  ];
  const defaultOption = options[0];

  const onSelect = () => {};

  return (
    <div>
      <Link href="/">
        <a>뒤로가기</a>
      </Link>
      <div>
        <h1>리액트 드롭다운</h1>
      </div>
      <div>
        <div>type 1</div>
        <Dropdown
          options={options}
          onChange={onSelect}
          value={defaultOption}
          placeholder="Select an option"
          arrowClosed={
            <span className="arrow-closed">
              <h1>closed</h1>
            </span>
          }
          arrowOpen={
            <span className="arrow-open">
              <h1>open</h1>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default ReactDropdown;
