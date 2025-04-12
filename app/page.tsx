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
    <div className="pt-[20vh] w-[90vw] flex flex-col justify-center m-auto pb-4">
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
          </div>
          <div className="relative group">
            <div className="bg-black bg-opacity-40 blur-[1px] group-hover:blur-[0px]" />
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/chess-podium.jpg"
              alt="Prize Distribution Picture"
              width={900}
              height={900}
              className="rounded-2xl"
            />
            <div className="w-full overflow-hidden whitespace-nowrap py-2">
              <h1 className="inline-block animate-infinite-scroll min-w-max">
                <b className="text-red-500 animate-ping mr-1">Announcement!</b>{" "}
                5th One Day Rapid Open Chess Tournament coming soon in May 2025!
                Classical And Blitz coming at the end of May!
              </h1>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <Card className="bg-orange-800/10 hover:border-orange-800">
            <CardHeader>
              <CardTitle className="font-extrabold text-6xl text-orange-800">
                6000+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p className="font-bold">Chess Games Hosted</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800/10 hover:border-green-800">
            <CardHeader>
              <CardTitle className="font-extrabold text-6xl text-green-800">
                ₹1.2 L+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p className="font-bold">Cash Prizes Disbursed</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-800/10 hover:border-blue-800">
            <CardHeader>
              <CardTitle className="font-extrabold text-6xl text-blue-800">
                8
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p className="font-bold">Tournaments Organized</p>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/instagram.png"
                    alt="Instagram"
                    width={72}
                    height={72}
                    className="transform rotate-[5deg] hover:rotate-[0deg]"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xl">
                <p className="font-bold">Stay Updated!</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 pt-4">
        <Card className="bg-green-400/10 hover:border-green-400">
          <CardHeader>
            <CardTitle className="font-bold text-xl ">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/trust.png"
                alt="Trust"
                width={72}
                height={72}
                className=""
              />
              <h1 className="pt-6">Collaborations</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <p>
              Trusted Partnerships with multiple organizations like Amravati
              Chess Association, Reforms Club, Rotary Club, etc.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-400/10 hover:border-yellow-400">
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/shield.png"
                alt="Shield"
                width={72}
                height={72}
                className=""
              />
              <h1 className="pt-6">The Gold Standard</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <p>
              Complete Transparency with Swiss Manager-made Pairings and
              automated prize calculations with 100% accuracy
            </p>
          </CardContent>
        </Card>
        <Card className="bg-purple-400/10 hover:border-purple-400">
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/diagram.png"
                alt="Stonks"
                width={72}
                height={72}
                className=""
              />
              <h1 className="pt-6">Growth</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg">
            <p>
              Directly contributing to more than 30% growth in active player
              base in the region
            </p>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </div>
  );
}
