"use client";

import { useEffect } from "react";
import CardComponent from "./card-component/page";

import { stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";
import { teloSectionData } from "@/lib/data";
import { Kalam } from "next/font/google";

// font
const kalam = Kalam({ subsets: ["latin"], weight: "300" });

// card animation
const staggerCards = stagger(0.2, { startDelay: 0.5 });

const OurHelp = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    animate(
      "a",
      isInView
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isInView ? staggerCards : 0,
      }
    );
  }, [isInView, animate]);

  return (
    <div ref={scope} className="h-fit flex flex-col justify-center">
      <h2
        className={`${kalam.className} text-center text-6xl text-slate-600  py-6  `}
      >
        Péče o tělo
      </h2>
      <h3 className="text-2xl text-center mb-24 font-semibold font-sans text-slate-600">
        V našem centru jsme zavázaní k poskytování komplexní péče o vaše tělo s
        důrazem na vaše zdraví a pohodu. Nabízíme širokou škálu služeb, které
        vám pomohou dosáhnout optimálního stavu těla a mysli.
      </h3>

      <ul className="flex flex-wrap gap-4 justify-center">
        {teloSectionData.map((item) => {
          return (
            <Link href={item.href} key={item.id}>
              <CardComponent {...item} />
            </Link>
          );
        })}
      </ul>

      <p className="text-slate-600 py-8 lg:w-2/3 mx-auto text-center">
        S naším oddaným týmem profesionálů a moderními zařízeními se budete
        cítit v bezpečí a v dobrých rukou. Jsme zde proto, abychom vám pomohli
        dosáhnout vašich zdravotních cílů a pocitů pohody. Navštivte nás ještě
        dnes a začněte cestu k zdravějšímu a šťastnějšímu já!
      </p>
    </div>
  );
};

export default OurHelp;
