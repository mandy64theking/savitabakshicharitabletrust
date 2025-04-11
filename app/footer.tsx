import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full border-t-2 border-t-gray drop-shadow-lg shadow">
      <div className="flex max-w-[90vw] m-auto sm:flex-row flex-col min-h-[40vh] justify-center  align-items-center pb-6">
        <div className="flex-3 mt-6">
          <div className="flex align-middle items-center">
            <Image
              src="/logo-rectangle-dark.png"
              alt="Late Savita Bakshi Charitable Trust"
              width={120}
              height={100}
              className="min-h-18 min-w-15 border-1 m-1 h-20 p-3 rounded-xl"
            />
            <p className="font-bold pl-4">
              Late Savita Bakshi Charitable Trust, Amravati <br />
              &quot;Mandar&quot;, 39A, Telecom Colony, <br />
              Akoli Road, <br />
              Amravati - 444605 <br />
              Mob. No - +91 - 9028698447
            </p>
          </div>
          <div className="flex align-middle items-center">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={64}
              height={64}
              className="min-w-15 border-1 m-1 p-3 rounded-xl"
            />
            <Image
              src="/whatsapp-color.png"
              alt="Whatsapp"
              width={64}
              height={64}
              className="min-w-15 border-1 m-1 p-3 rounded-xl"
            />
          </div>
        </div>
        <div className="flex-1 mt-6">
          <h1 className="font-bold text-orange-400">SBCT Important Links</h1>
          <ul className="list-none pt-6">
            <li>
              <Link
                passHref
                href="https://chess-results.com/fed.aspx?lan=1&fed=IND&bdld1=15"
                legacyBehavior
              >
                <h1 className="cursor-pointer hover:text-green-500">
                  Chess-Results
                </h1>
              </Link>
            </li>

            <li>
              <Link passHref href="https://aicf.in/all-events/" legacyBehavior>
                <h1 className="cursor-pointer hover:text-green-500">
                  AICF Events Page
                </h1>
              </Link>
            </li>
            <li>
              <Link
                passHref
                href="https://pages.razorpay.com/sbct-donate-now/"
                legacyBehavior
              >
                <h1 className="cursor-pointer hover:text-green-500">
                  Make a Donation!
                </h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 mt-6">
          <h1 className="font-bold text-orange-400">SBCT FAQs and Legal</h1>
          <ul className="list-none pt-6">
            <li>
              <Link
                passHref
                href="https://chess-results.com/fed.aspx?lan=1&fed=IND&bdld1=15"
                legacyBehavior
              >
                <h1 className="cursor-pointer hover:text-green-500">
                  Frequently Asked Questions
                </h1>
              </Link>
            </li>

            <li>
              <Link passHref href="https://aicf.in/all-events/" legacyBehavior>
                <h1 className="cursor-pointer hover:text-green-500">
                  Terms and Conditions
                </h1>
              </Link>
            </li>
            <li>
              <Link
                passHref
                href="/LATE_SAVITA_BAKSHI_CHARITABLE_TRUST.pdf"
                legacyBehavior
              >
                <h1 className="cursor-pointer hover:text-green-500">
                  NGO Darpan Details
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col h-[10vh] justify-center border-t-2 border-t-gray drop-shadow-lg shadow align-items-center">
        <h2 className="font-bold m-auto text-center">
          {" "}
          2025 &#169; Late Savita Bakshi Charitable Trust, Amravati. All Rights
          Reserved!
        </h2>
      </div>
    </div>
  );
}
