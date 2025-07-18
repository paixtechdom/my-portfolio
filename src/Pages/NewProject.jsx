import { useEffect, useRef, useState } from "react";
import { Header } from "../assets/Components/Header";
import { project } from "../assets/Constants";

export const NewProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);
  const sliderSectionRef = useRef(null);

  const GoLeft = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const GoRight = () =>
    setCurrentIndex((prev) =>
      prev < project.images.length - 1 ? prev + 1 : prev
    );

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - startX;
    if (deltaX > 30) GoLeft();
    else if (deltaX < -30) GoRight();
  };

  useEffect(() => {
    document.documentElement.style.overflow = fullScreen
      ? "hidden"
      : "scroll";
  }, [fullScreen]);

  useEffect(() => {
    const el = sliderSectionRef.current;
    if (!el) return;

    let isActive = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting && entry.intersectionRatio > 0.5;
      },
      { threshold: [0.5] }
    );

    observer.observe(el);

    const handleWheel = (e) => {
      if (!isActive) return;

      const atStart = currentIndex === 0;
      const atEnd = currentIndex === project.images.length - 1;

      if ((e.deltaY > 0 && atEnd) || (e.deltaY < 0 && atStart)) {
        // Let page scroll naturally
        return;
      }

      e.preventDefault();
      if (e.deltaY > 0) GoRight();
      else GoLeft();
    };

    const handleKey = (e) => {
      if (!isActive) return;

      const atStart = currentIndex === 0;
      const atEnd = currentIndex === project.images.length - 1;

      if (
        (["ArrowDown", "ArrowRight"].includes(e.key) && atEnd) ||
        (["ArrowUp", "ArrowLeft"].includes(e.key) && atStart)
      ) {
        // Let page scroll naturally
        return;
      }

      if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        GoRight();
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        GoLeft();
      }
    };

    // const handleTouchMove = (e) => {
    //   if (isActive) e.preventDefault();
    // };

    // window.addEventListener("wheel", handleWheel, { passive: false });
    // window.addEventListener("keydown", handleKey);
    // el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      observer.disconnect();
      // window.removeEventListener("wheel", handleWheel);
      // window.removeEventListener("keydown", handleKey);
      // el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex]);

  return (
    <section
      ref={sliderSectionRef}
      id="Projects"
      className="parent center flex-col min-h-[130vh] bg-black bg-opacity-80 pb-[10vh] overflow-hidden"
    >
      <Header text={"Latest project"} icon={"journal-code"} />

      <div className="center w-full">
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col gap-4">
          <h3 className="text-gray-300 text-2xl">{project.title}</h3>
          <div className="flex flex-col gap-2 text-gray-400 tracking-wide leading-relaxed">
            {project.description.map((d, i) => (
              <p
                key={i}
                className="bg-purple-900 bg-opacity-5 rounded-lg p-3 backdrop-blur-lg"
              >
                {d}
              </p>
            ))}
          </div>
          <h4 className="mt-9 font-bold text-xl">Image Slides</h4>
        </div>
      </div>

      <div
        className={`w-full overflow-hidden ${
          fullScreen
            ? "fixed top-0 h-screen bg-black bg-opacity-40 backdrop-blur-md z-[302]"
            : "mt-6 relative "
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        {fullScreen && (
          <div
            className="absolute top-5 left-5 bg-gray-200 size-10 center rounded-xl cursor-pointer hover:bg-gray-400 transition-colors ease-in-out duration-500 z-[303]"
            onClick={() => setFullScreen(false)}
          >
            <i className="bi bi-x-lg text-xl text-black "></i>
          </div>
        )}

        <div className="w-full center absolute h-full">
          <div
            className={`flex w-11/12 items-center ${
              fullScreen ? "h-20" : "lg:w-9/12 h-14"
            } justify-between  z-[303] `}
          >
            <button
              disabled={currentIndex === 0}
              className={`active:scale-[1.5] disabled:scale-50 ${
                fullScreen
                  ? "bg-purple-950 bg-opacity-20 scale-2"
                  : "bg-black"
              } rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-9 h-14 lg:h-18 disabled:cursor-default`}
              onClick={GoLeft}
            >
              <i className="bi bi-chevron-left text-xl text-white"></i>
            </button>

            <button
              disabled={currentIndex === project.images.length - 1}
              className={`active:scale-[1.5] disabled:scale-50 ${
                fullScreen
                  ? "bg-purple-950 bg-opacity-20 scale-2"
                  : "bg-black"
              } rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-9 h-14 lg:h-18 disabled:cursor-default`}
              onClick={GoRight}
            >
              <i className="bi bi-chevron-right text-xl text-white"></i>
            </button>
          </div>
        </div>

        <div
          className={`flex transition-all duration-[0.5s] ${
            fullScreen ? "h-screen items-center" : ""
          }`}
          style={{
            width: `${project.images.length * 100}vw`,
            translate: `${-currentIndex * 100 - 1}vw`,
          }}
        >
          {project.images.map((img, i) => (
            <div className="flex flex-col gap-3" key={i}>
              <div
                className={`flex justify-center w-screen ${
                  fullScreen ? "h-screen center" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden flex flex-col gap-3 ${
                    fullScreen
                      ? "center h-fit max-h-[90vh] w-11/12 lg:w-10/12 xl:w-9/12"
                      : "h-[53vh] rounded-2xl w-9/12 lg:w-7/12 xl:w-5/12"
                  }`}
                >
                  {!fullScreen && (
                    <div
                      className="absolute top-5 left-5 bg-gray-200 size-8 center rounded cursor-pointer hover:bg-gray-400 transition-colors ease-in-out duration-500"
                      onClick={() => setFullScreen(true)}
                    >
                      <i className="bi bi-fullscreen text-xl text-black"></i>
                    </div>
                  )}

                  <img
                    src={img.img}
                    alt=""
                    className={`w-full h-full object-contain`}
                  />

                  {fullScreen && (
                    <p className="center capitalize py-2 bg-black text-gray-200 text-sm w-fit px-8">
                      {img.desc
                        .replaceAll("_", " ")
                        .replace(1, "")
                        .replace(2, "")}
                    </p>
                  )}
                </div>
              </div>

              {!fullScreen && (
                <p className="w-full center capitalize">
                  {img.desc.replaceAll("_", " ").replace(1, "").replace(2, "")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};








// import { useEffect, useRef, useState } from "react"
// import { Header } from "../assets/Components/Header"
// import { project } from "../assets/Constants"

// export const NewProject = () => {
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const [fullScreen, setFullScreen] = useState(false)
//     const [startX, setStartX] = useState(0)
//     const sliderRef = useRef(null)
//     const sliderSectionRef = useRef(null)

//     const GoLeft = () => {
//         setCurrentIndex(prev => prev > 0 ? prev - 1 : 0)
//     }

//     const GoRight = () => {
//         setCurrentIndex(prev => prev < project.images.length - 1 ? prev + 1 : prev)
//     }

//     const isInViewport = (element) => {
//         const rect = element.getBoundingClientRect();
//         return rect.top <= window.innerHeight && rect.bottom >= 0;
//     }

//     const handleTouchStart = (e) => { 
//         setStartX(e.touches[0].clientX)
//     }

//     const handleTouchEnd = (e) => {
//         const deltaX = e.changedTouches[0].clientX - startX
//         if (deltaX > 0) {
//             GoLeft()
//         }
//         if (deltaX < 0) {
//             GoRight()
//         }
//     }

//     useEffect(() => {
//         fullScreen
//             ? document.documentElement.style.overflow = "hidden"
//             : document.documentElement.style.overflow = "scroll"
//     }, [fullScreen])

//     useEffect(() => {
//         const handleWheel = (e) => {
//             if (!sliderSectionRef.current || !isInViewport(sliderSectionRef.current)) return;

//             e.preventDefault();

//             if (e.deltaY > 0) {
//                 setCurrentIndex(prev => {
//                     if (prev < project.images.length - 1) return prev + 1;
//                     else detachEvents(); // allow normal scroll
//                     return prev;
//                 });
//             } else {
//                 setCurrentIndex(prev => {
//                     if (prev > 0) return prev - 1;
//                     else detachEvents();
//                     return prev;
//                 });
//             }
//         };

//         const handleKeyScroll = (e) => {
//             if (!sliderSectionRef.current || !isInViewport(sliderSectionRef.current)) return;

//             if (["ArrowDown", "ArrowRight"].includes(e.key)) {
//                 e.preventDefault();
//                 setCurrentIndex(prev => {
//                     if (prev < project.images.length - 1) return prev + 1;
//                     else detachEvents();
//                     return prev;
//                 });
//             }

//             if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
//                 e.preventDefault();
//                 setCurrentIndex(prev => {
//                     if (prev > 0) return prev - 1;
//                     else detachEvents();
//                     return prev;
//                 });
//             }
//         };

//         const attachEvents = () => {
//             window.addEventListener('wheel', handleWheel, { passive: false });
//             window.addEventListener('keydown', handleKeyScroll);
//         };

//         const detachEvents = () => {
//             window.removeEventListener('wheel', handleWheel);
//             window.removeEventListener('keydown', handleKeyScroll);
//         };

//         attachEvents();
//         return detachEvents;
//     }, [currentIndex]);

//     return (
//         <section
//             ref={sliderSectionRef}
//             id="Projects"
//             className="parent center flex-col bg-black bg-opacity-80 pb-[10vh]"
//         >
//             <Header text={'Latest project'} icon={'journal-code'} />

//             <div className="center w-full">
//                 <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col gap-4">
//                     <h3 className="text-gray-300 text-2xl">{project.title}</h3>

//                     <div className="flex flex-col gap-2 text-gray-400 tracking-wide leading-relaxed">
//                         {
//                             project.description.map((d, i) => (
//                                 <p key={i} className="bg-purple-900 bg-opacity-5 rounded-lg p-3 backdrop-blur-lg">{d}</p>
//                             ))
//                         }
//                     </div>

//                     <h4 className="mt-9 font-bold text-xl">Image Slides</h4>
//                 </div>
//             </div>

//             <div className={`w-full overflow-hidden  
//                 ${fullScreen ? "fixed top-0 h-screen bg-black bg-opacity-40 backdrop-blur-md z-[302]" : "mt-6 relative "}
//             `}
//                 onTouchStart={handleTouchStart}
//                 onTouchEnd={handleTouchEnd}
//                 ref={sliderRef}
//             >
//                 {fullScreen &&
//                     <div className="absolute top-5 left-5  bg-gray-200 size-10 center rounded-xl cursor-pointer hover:bg-gray-400 transition-colors ease-in-out duration-500 z-[303]"
//                         onClick={() => setFullScreen(false)}>
//                         <i className="bi bi-x-lg text-xl text-black "></i>
//                     </div>
//                 }

//                 {/* Slider Navigation Buttons */}
//                 <div className="w-full center absolute h-full">
//                     <div className={`flex w-11/12 items-center ${fullScreen ? "h-20" : "lg:w-9/12 h-14"} justify-between  z-[303] `}>
//                         <button disabled={currentIndex == 0} className={`active:scale-[1.5] disabled:scale-50 ${fullScreen ? "bg-purple-950 bg-opacity-20 scale-2" : "bg-black"} rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-9 h-14 lg:h-18 disabled:cursor-default`} onClick={GoLeft}>
//                             <i className="bi bi-chevron-left text-xl text-white"></i>
//                         </button>

//                         <button disabled={currentIndex == project.images.length - 1} className={`active:scale-[1.5] disabled:scale-50 ${fullScreen ? "bg-purple-950 bg-opacity-20 scale-2" : "bg-black"} rounded cursor-pointer bg-opacity-70 hover:bg-opacity-100 transition-all duration-500 center w-9 h-14 lg:h-18 disabled:cursor-default`} onClick={GoRight}>
//                             <i className="bi bi-chevron-right text-xl text-white"></i>
//                         </button>
//                     </div>
//                 </div>

//                 <div className={`flex transition-all duration-[0.5s] ${fullScreen ? 'h-screen items-center' : ""}`}
//                     style={{
//                         width: project.images.length * 100 + "vw",
//                         translate: (-currentIndex * 100) - 1 + "vw"
//                     }}
//                 >
//                     {
//                         project.images.map((img, i) => (
//                             <div className="flex flex-col gap-3" key={i}>
//                                 <div className={`flex justify-center w-screen ${fullScreen ? "h-screen center" : ""}`}>
//                                     <div className={`relative overflow-hidden flex flex-col gap-3 ${fullScreen ? "center h-fit max-h-[90vh] w-11/12 lg:w-10/12 xl:w-9/12" : " h-[53vh] rounded-2xl w-9/12 lg:w-7/12 xl:w-5/12"}`}>
//                                         {!fullScreen &&
//                                             <div className="absolute top-5 left-5  bg-gray-200 size-8 center rounded cursor-pointer hover:bg-gray-400 transition-colors ease-in-out duration-500"
//                                                 onClick={() => setFullScreen(true)}>
//                                                 <i className="bi bi-fullscreen text-xl text-black"></i>
//                                             </div>
//                                         }

//                                         <img src={img.img} alt="" className={`w-full h-full object-contain`} />

//                                         {fullScreen &&
//                                             <p className=" center capitalize py-2 bg-black text-gray-200 text-sm w-fit px-8">
//                                                 {img.desc.replaceAll("_", " ").replace(1, "").replace(2, "")}
//                                             </p>
//                                         }
//                                     </div>
//                                 </div>

//                                 {!fullScreen &&
//                                     <p className="w-full center capitalize">
//                                         {img.desc.replaceAll("_", " ").replace(1, "").replace(2, "")}
//                                     </p>
//                                 }
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </section>
//     )
// }



