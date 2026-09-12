import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaNodeJs,
  FaJava,
  FaDocker,
  FaReact,
} from "react-icons/fa";

import { MdOutlineStar } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import {
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";

interface Technology {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty?: string;
  rating: number;
  badge: string;
  icon: string;
}

const icons: Record<string, ReactNode> = {
  react: <FaReact className="text-2xl text-cyan-400" />,
  vue: <RiVuejsFill className="text-2xl text-green-600" />,
  svelte: <SiSvelte className="text-2xl text-orange-500" />,
  nextjs: <SiNextdotjs className="text-2xl text-black" />,
  nodejs: <FaNodeJs className="text-2xl text-green-500" />,
  postgresql: <SiPostgresql className="text-2xl text-blue-700" />,
  redis: <DiRedis className="text-2xl text-red-500" />,
  javascript: <SiJavascript className="text-2xl text-yellow-400" />,
  typescript: <SiTypescript className="text-2xl text-blue-500" />,
  java: <FaJava className="text-2xl text-red-500" />,
  tailwindcss: <SiTailwindcss className="text-2xl text-cyan-400" />,
  docker: <FaDocker className="text-2xl text-blue-500" />,
};

function TechnologyCard() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error("Error fetching technologies:", error);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: number) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-7">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Explore the{" "}
            <span className="text-[#d91b7e]">Technologies</span>
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_200px]">

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">

            {technologies.map((technology) => {
              const isSelected = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className={`flex min-h-62.5 flex-col rounded-xl border bg-white p-3 shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "border-[#d91b7e] shadow-md"
                      : "border-slate-200 hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >

                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      {icons[technology.icon]}
                    </div>

                    <span className="rounded-full bg-pink-50 px-2 py-1 text-[9px] font-medium text-[#d91b7e]">
                      {technology.badge}
                    </span>
                  </div>

                  <h2 className="text-[20px] font-bold text-slate-800">
                    {technology.name}
                  </h2>

                  <p className="mt-2 min-h-12 text-[15px] leading-4 text-slate-400">
                    {technology.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between gap-2">

                    <span className="rounded bg-slate-50 px-2 py-1 text-[12px] text-slate-500">
                      {technology.category}
                    </span>

                    <span className="text-[10px] text-slate-500">
                      {technology.difficulty}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] font-medium text-slate-700">
                      <MdOutlineStar className="text-yellow-400" />
                      {technology.rating}
                    </span>

                  </div>

                  <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isSelected}
                    className={`mt-3 w-full rounded-md py-2 text-[12px] font-medium transition ${
                      isSelected
                        ? "cursor-not-allowed bg-slate-900 text-[#d91b7e]"
                        : "cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isSelected
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          <div className="h-fit rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-5">

            <h2 className="text-sm font-bold text-slate-800">
              Your Stack
            </h2>

            <p className="mt-1 text-[9px] text-slate-400">
              {stack.length} Technology Selected
            </p>

            <div className="mt-3 space-y-2">

              {stack.length === 0 ? (

                <div className="rounded-md border border-dashed border-slate-200 p-4 text-center">
                  <p className="text-[9px] text-slate-400">
                    Your Stack is empty
                  </p>
                </div>

              ) : (

                stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-md border border-slate-200 p-2"
                  >

                    <div className="flex items-center gap-2">

                      <div>
                        {icons[item.icon]}
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-slate-700">
                          {item.name}
                        </p>

                        <p className="text-[7px] text-slate-400">
                          {item.category}
                        </p>
                      </div>

                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="cursor-pointer text-sm text-slate-400 transition hover:text-[#d91b7e]"
                    >
                      <RxCross2 />
                    </button>

                  </div>
                ))

              )}

            </div>

            <button
              onClick={handleRemoveAll}
              disabled={stack.length === 0}
              className={`mt-5 w-full rounded-md border py-2 text-[9px] font-medium transition ${
                stack.length === 0
                  ? "cursor-not-allowed border-slate-200 text-slate-300"
                  : "cursor-pointer border-[#d91b7e] text-[#d91b7e] hover:bg-pink-50"
              }`}
            >
              Remove All
            </button>

          </div>

        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default TechnologyCard;