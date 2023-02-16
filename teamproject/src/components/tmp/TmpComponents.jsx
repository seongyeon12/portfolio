import { Link } from "react-router-dom";

export default function TmpComponents({c, text, link}) {
  return (
    <>
    <div className={c}>
      <span className="font-medium text-xl">{text}</span>
      <button className="block mb-3">
        <Link className="text-blue-200 text-base " to={link}>&gt; 바로가기</Link>
      </button>
    </div>
    </>
  )
}