import Image from "next/image";
export default function Page() {
  return (
    <div>
      <div className="sm:h-[100vh] w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[20vh] flex-1/2 flex flex-col justify-center items-center">
          <h1 className="text-foreground bg-background font-bold text-4xl text-center">
            Contact Us!
          </h1>
          <h1 className="p-2 pl-10 pr-10 pt-10 sm:pl-20 sm:pr-20 text-foreground bg-background text-center">
            Feel free to contact us with any questions or concerns. You can use
            the form on our website or email us directly. We appreciate your
            interest and look forward to hearing from you.
          </h1>
          <div className="flex flex-row items-center pt-4">
            <a href="mailto:savitabakshicharitabletrust@gmail.com">
              <Image
                src="/email.png"
                alt="Email"
                width={64}
                height={64}
                className="max-w-8 pl-1 pr-2 dark:invert"
              />
            </a>
            <h1> savitabakshicharitabletrust@gmail.com</h1>
          </div>
          <div className="flex flex-row items-center pt-4 pb-4">
            <a href="https://wa.me/919028698447">
              <Image
                src="/whatsapp.png"
                alt="Whatsapp"
                width={64}
                height={64}
                className="max-w-8 pl-1 pr-2 dark:invert"
              />
            </a>
            <h1> +91-9028698447</h1>
          </div>
        </div>
        <div className="flex-1/2 flex justify-center sm:pt-[15vh] pb-5">
          <Image
            src="/michelangelo.jpg"
            className="bg-cover rounded-full object-cover max-h-[45vh] w-[45vh] sm:max-h-[55vh] sm:w-[55vh]"
            alt="Chess Pieces"
            width={900}
            height={900}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
