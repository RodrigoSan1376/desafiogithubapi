import "./styles.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <div>
      <button className="dga-button" type="submit">{text}</button>
    </div>
  );
}
