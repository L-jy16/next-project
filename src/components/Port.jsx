import React, { useEffect, useRef } from 'react'

import { portText } from "../constants/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';


const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56pzx",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });

    return () => {
      scrollTween.kill();
    };
  }, [])

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key} ref={(el) => (sectionRef.current[key] = el)}>
              <span className="num">{port.num}</span>
              <a href={port.view}>
                <Image src={port.img} alt={port.title} width={420} height={262} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">
                {port.desc}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Port
