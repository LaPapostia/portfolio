
export default function Footer() {
  return (
    <footer className="relative text-white">
      
       {/* Franja inferior en forma de trapecio */}
      <div className="relative bg-cyan-900 text-center py-4 font-semibold text-sm tracking-wide">
        {/* Trapecio superior */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-full max-w-4xl h-4 sm:h-6 md:h-8 bg-cyan-900"
          style={{
            clipPath: "polygon(0% 100%, 5% 0%, 95% 0%, 100% 100%)",
          }}
        ></div>
      </div>
     
    </footer>
  );
}
