import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          " #a5f4c4 url(https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center/cover",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="w-[50%] mx-auto bg-white">
        <h1
          className="text-xl text-black text-center p-5"
          style={{ lineHeight: "2" }}
        >
          Hi, <br /> This Website is Under Construction <br /> <br /> Have any
          issue In Structure, Theme etc ? Please Contact with us <br />
          <a
            href="mailto:muhammadhasnainghazna@gmail.com"
            className="text-white bg-blue-500 rounded-md p-2 m-1"
          >
            Message me
          </a>
        </h1>
      </div>

      {/* <Image
        src={
          "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        width={500}
        height={500}
        alt="main picture "
      /> */}
    </main>
  );
}
