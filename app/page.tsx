import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Move",
    },
    {
      text: "by",
    },
    {
      text: "Move",
    },
  ];
  return (
    <div className="pt-[20vh] w-[90vw] flex justify-center m-auto">
      <div className="grid lg:grid-cols-3 gap-3 w-[90vw]">
        <div className="relative lg:col-span-2 max-w-[97vw] lg:max-w-[70vw]">
          <div className="flex justify-center">
            <h1 className="sm:text-white sm:absolute z-10 text-4xl font-extrabold p-4 text-center">
              Empowering Future Generations{" "}
              <TypewriterEffect
                className="text-white font-extrabold lg:text-4xl text-4xl sm:text-4xl"
                words={words}
              />
            </h1>
            <div className="relative group">
              <div className="bg-black bg-opacity-40 blur-[1px] group-hover:blur-[0px]" />
              <Image
                src="/chess-podium.jpg"
                alt="Kids playing chess"
                width={900}
                height={900}
                className="blur-[1px] group-hover:blur-[0px] rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <Card className="bg-orange-800/10 hover:border-orange-800">
            <CardHeader>
              <CardTitle className="font-extrabold text-7xl">5000+</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p>Chess Games Hosted</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800/10 hover:border-green-800">
            <CardHeader>
              <CardTitle className="font-extrabold text-7xl">₹100k+</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p>Cash Prizes Disbursed</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-800/10 hover:border-blue-800">
            <CardHeader>
              <CardTitle className="font-extrabold text-7xl">8</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p>Tournaments Organized</p>
            </CardContent>
          </Card>
          <Link
            passHref
            href="https://www.instagram.com/savitabakshicharitabletrust/"
            legacyBehavior
          >
            <Card className="cursor-pointer relative bg-pink-800/10 hover:border-pink-800">
              <CardHeader>
                <CardTitle className="font-extrabold text-7xl">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={72}
                    height={72}
                    className="transform rotate-[5deg] hover:rotate-[0deg]"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl">
                <p>Stay Updated!</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
