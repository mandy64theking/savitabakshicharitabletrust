import Image from "next/image";
export default function Page() {
  return (
    <div className="py-4">
      <div className="min-h-[100vh] flex flex-col items-center  pt-[20vh] w-[80vw] m-auto">
        <div className="flex flex-col lg:flex-row items-center pt-10">
          <div className="flex-1 bg-linear-to-b from-orange-700 to-orange-500 rounded-xl h-[520]">
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/chess-podium-2.jpg"
              alt="Prize Distribution Picture"
              width={1200}
              height={800}
              className="min-h-18 min-w-15 border-x-1 border-t-1 rounded-x-xl rounded-t-xl"
            />
            <h1 className="font-extrabold text-2xl p-2 text-center">
              Our Journey
            </h1>
            <h1 className="font-bold p-1 text-center">
              Founded in 2024, We started with a vision to empower future
              generations through sports and education. Our mission is to
              provide opportunities for young aspirants to excel in chess and
              beyond. We are committed to creating a positive impact in the
              community by promoting sportsmanship, discipline, and excellence
              with a focus on sustainability.
            </h1>
          </div>
          <div className="flex-1">
            <div className="rounded-xl border-2 p-5 my-5 lg:mx-5">
              <h1 className="font-bold text-3xl text-center">Who we are?</h1>
              <h1 className="text-start pt-10">
                Late Savita Bakshi Charitable Trust, Amravati (officially
                registered as <i>SWA. Savita Bakshi Charitable Trust</i> under
                the Bombay Public Trusts Act, 1950 - Reg No. E-1605(AMR) ) is a
                recognized non-profit organization dedicated to the promotion of
                sports and education. With a strong foundation in the community,
                the trust has become a respected name in creating meaningful
                opportunities for young aspirants in the field of chess and
                beyond.
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="rounded-xl border-2 mx-4 p-5 bg-pink-700/10 hover:border-pink-700">
                <div>
                  <h1 className="font-bold text-5xl text-start text-pink-700">
                    1000+
                  </h1>
                  beneficiaries
                </div>
                <h1 className="text-start pt-4">We are a big family!</h1>
              </div>
              <div className="rounded-xl border-2 mx-4 p-5 bg-green-700/10 hover:border-green-700">
                <div>
                  <h1 className="font-bold text-5xl text-start text-green-700">
                    ₹1.2 L+
                  </h1>
                  Cash Prizes Disbursed
                </div>
                <h1 className="text-start pt-8">
                  Every Move Deserves a Reward!
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold pt-10 text-center">
            Our Team
          </h1>
          <div className="flex flex-col lg:flex-row items-center pt-2">
            <div className="flex-1 w-fit bg-linear-to-b from-orange-700 to-orange-500 rounded-xl h-auto m-10">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/girish.png"
                alt="Girish Bakshi"
                width={200}
                height={800}
                className="min-h-18 min-w-15 border-x-1 border-t-1 rounded-t-xl justify-center m-auto"
              />
              <h1 className="font-extrabold text-xl p-2 text-center">
                Girish W. Bakshi
              </h1>
              <h1 className="font-bold p-1 text-center">President</h1>
            </div>
            <div className="flex-1 w-fit bg-linear-to-b from-orange-700 to-orange-500 rounded-xl h-auto m-10">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/mandar.png"
                alt="Mandar Bakshi"
                width={200}
                height={800}
                className="min-h-18 min-w-15 border-x-1 border-t-1 rounded-t-xl justify-center m-auto"
              />
              <h1 className="font-extrabold text-xl p-2 text-center">
                Mandar G. Bakshi
              </h1>
              <h1 className="font-bold p-1 text-center">Secretary</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
