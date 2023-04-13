import "./styles.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <div className="dga-paddingl40">
      <button className="dga-button" type="submit">{text}</button>
    </div>
  );
}
