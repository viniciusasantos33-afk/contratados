'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useProfileClick } from "@/contexts/ProfileClickContext";

const TOTAL_PROFILES = 5;

export default function HelpPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clickedProfiles } = useProfileClick();
  
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const isFinished = searchParams.get('finished') === 'true';
    if (isFinished || clickedProfiles.length === TOTAL_PROFILES) {
      setFinished(true);
    }
  }, [clickedProfiles, searchParams]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: This password logic is not secure and is for demonstration purposes only.
    // In a real-world application, you would want to handle this on the server side.
    const processedPassword = password.trim().toLowerCase();
    switch (processedPassword) {
      case "luana":
        router.push("/proximos-contratados/blog-da-lua");
        break;
      case "a lua":
        router.push("/proximos-contratados/blog-da-lua");
        break;
      case "calisto":
        router.push("/calisto");
        break;
      case "introdução":
        router.push("/introducao");
        break;
      default:
        alert("Senha incorreta!");
        break;
    }
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black">
        <Image
          src="/phone.png"
          width={200}
          height={200}
          alt="No service"
          className="cursor-pointer mb-8"
        />
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black text-green-400 font-mono placeholder-green-700 border-2 border-green-500 focus:border-green-400 focus:outline-none rounded-none py-2 px-4 mb-4 shadow-[0_0_10px_#98FB98] focus:shadow-[0_0_15px_#98FB98] transition-all duration-300"
            placeholder="PASSWORD"
          />
          <button
            type="submit"
            className="font-mono font-bold text-white text-green-400 hover:bg-green-700 border-2 border-green-400 rounded-none py-2 px-6 shadow-[0_0_15px_#98FB98] hover:shadow-[0_0_25px_#98FB98] transition-all duration-300"
          >
            ACCESS
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
        src="/manutenção.png"
        width={200}
        height={200}
        alt="Manutenção"
        className="cursor-pointer"
      />
      <h1
        className="text-4xl text-crt font-bold mt-8 text-glitch"
        data-text="Estamos sem serviço no momento"
      >
        Estamos sem serviço no momento
      </h1>
      <p className="text-lg text-crt text-foreground/80 mt-2">
        Tente novamente mais tarde
      </p>
    </div>
  );
}
