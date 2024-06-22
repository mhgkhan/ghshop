import { FaMailBulk } from "react-icons/fa";

export default function Home() {
  return (
    <h1
      className="text-xl text-black text-center p-5"
      style={{ lineHeight: "2" }}
    >
      Hi, <br /> This Website is Under Construction <br /> <br /> Have any issue
      In Structure, Theme etc ? Please Contact with us <br />
      <a
        href="mailto:muhammadhasnainghazna@gmail.com"
        className="text-white bg-blue-500 rounded-md p-2 m-1"
      >
        Message me
      </a>
    </h1>
  );
}
