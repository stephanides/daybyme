import { ButtonLink } from "./components/ButtonLink";
import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full min-h-screen bg-cover bg-no-repeat bg-top bg-[url('/bg-dbmh-mobile.jpg')] md:bg-[url('/bg-dbmh.jpg')]">
          <div className="flex w-[calc(100%-32px)] h-full justify-center items-center pt-16 mx-auto">
            <div className="w-full max-w-[980px]">
              <div className="flex justify-center mb-6 md:mb-13 w-[80px] md:w-[120px] mx-auto">
                <Logo />
              </div>
              <div>
                <div>
                  <div className="bg-black py-6 ">
                    <h1 className="text-center text-white font-extrabold text-[20px] md:text-[36px]">
                      Ďakujeme za vašu priazeň.
                    </h1>
                  </div>
                  <div className="bg-white pt-9 pb-13 px-6 md:px-16">
                    <p className="text-center text-black text-sm md:text-lg">
                      Po viac než 10 rokoch sa aplikácia Daybyme k 1. 1. 2026
                      uzavrela. Ďakujeme všetkým tvorcom a používateľom, ktorí
                      boli jej súčasťou. Daybyme však nekončí. Pokračujeme ako{" "}
                      <strong>
                        full-service reklamná agentúra so špecializáciou na
                        (micro)influencer marketing.
                      </strong>
                    </p>
                    <p className="text-center mt-4 text-black text-sm md:text-lg">
                      Naďalej môžete zdieľať obsah a označovať nás na našich IG
                      profiloch. Váš obsah radi prezdieľame. Ak chcete byť
                      súčasťou honorovaných kampaní pre značky, pridajte sa do
                      našej FB skupiny.
                    </p>
                  </div>
                  <div className="bg-[#FF5C60] py-4 [transform:rotateZ(-3deg)] relative top-[-30px] w-[calc(100%+2px)] md:w-[calc(100%+3px)]">
                    <h2 className="text-center text-black font-extrabold text-[18px] md:text-[24px]">
                      Tím Daybyme Media House
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 md:gap-8 justify-center relative top-0 md:top-[-20px] mb-16 flex-col md:flex-row">
                <ButtonLink href="https://daybymemediahouse.com/">
                  DAYBYMEMEDIAHOUSE.COM
                </ButtonLink>
                <ButtonLink href="https://www.facebook.com/groups/facesbydaybyme/">
                  PRIDAŤ SA DO SKUPINY
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
