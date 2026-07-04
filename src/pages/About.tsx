import React, { useState } from 'react';
import { ShieldCheck, Award, Mail,X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';

// Local Asset Imports
import aboutBanner from '../assets/shivajisociety/images/vip7.png';
// Directors Images
import ceoPrashanth from "../assets/directors/CEO-prashanth.jpeg";
import chandraHNaik from "../assets/directors/ChandraHNaik.jpeg";
import dineshCNaik from "../assets/directors/DineshCNaik.jpeg";
import ganeshVP from "../assets/directors/GaneshVP.jpeg";
import harishNaik from "../assets/directors/HarishNaik.jpeg";
import jyothiShetty from "../assets/directors/Jyothishetty.jpeg";
import karunakarKanchan from "../assets/directors/KarunakarKanchan.jpeg";
import krishnaNaik from "../assets/directors/Krishnanaik.jpeg";
import laxmanNaik from "../assets/directors/LaxmanNaik.jpeg";
import rcNaik from "../assets/directors/RCNAIK.jpeg";
import sathishNaik from "../assets/directors/SathishNaik.jpeg";
import shekarDShetty from "../assets/directors/ShekarDShetty.jpeg";
import shobanaveen from "../assets/directors/Shobanaveen.jpeg";

interface Director {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  email?: string;
  image: string;
}

export const About: React.FC = () => {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  const executives = [
    
    {
      name: "Sri. DINESH C NAIK",
      role: "PRESIDENT",
      image: dineshCNaik,
      description: "Sri. Dinesh C Naik is an Advocate heads the society with extensive leadership experience in co-operative management. Under his stewardship, the society has prioritized member trust, capital adequacy, and strict adherence to regulatory norms. He drives the long-term vision of Chathrapathi Shivaji Co-operative Society."
    },
    {
      name: "Sri. GANESH",
      role: "VICE PRESIDENT",
      image: ganeshVP,
      description: "Sri. Ganesh provides key oversight for deposit mobilization plans and credit verification guidelines. His banking expertise helps the board maintain financial compliance while designing accessible gold and vehicle loan systems for Udupi households."
    },
    {
      name: "Sri. PRASHANTH SHIROOR",
      role: "CHIEF EXECUTIVE (SECRETARY)",
      image: ceoPrashanth,
      description: "Sri. Prashanth Shiroor supervises day-to-day administrative operations, internal audit committees, ledger updates, and customer support channels. He bridges shareholder requests with board policies, guaranteeing absolute transparency."
    }
  ];

  const directors: Director[] = [
        {
      name: "Sri. R C NAIK",
      role: "Director",
      image: rcNaik,
      shortBio: "Advises on accounting, audit compliance, and general assembly records.",
      fullBio: "Sri. Raghunath Naik coordinates with state auditing authorities to verify balance sheets and check that every co-operative transaction complies with the Karnataka Co-operative Societies Act 1959."
    },
        {
      name: "Sri. KRISHNA NAIK",
      role: "Director",
      image: krishnaNaik,
      shortBio: "Guides fixed deposit schemes and senior citizen interest distributions.",
      fullBio: "Sri. Krishna Naik focuses on expanding deposit portfolios. He designs flexible monthly/quarterly interest payout structures for fixed and recurring deposits."
    },
    {
      name: "Sri. LAXMANA NAIK",
      role: "Director",
      image: laxmanNaik,
      shortBio: "Oversees low-interest agricultural loans and crop credit facilities.",
      fullBio: "Sri. Laxmana Naik is dedicated to agrarian empowerment. He designs seasonal crop credit limits, irrigation machinery financing, and farm loan verification programs."
    },
        {
      name: "Sri. CHANDRA H NAIK",
      role: "Director",
      image: chandraHNaik,
      shortBio: "Drives localized welfare initiatives and public relations.",
      fullBio: "Sri. Chandra H Naik focuses on micro-finance programs and local co-operative awareness events. He ensures cooperative values drive our neighborhood outreach."
    },
    
    {
      name: "Sri. SATHISH NAIK",
      role: "Director",
      image: sathishNaik,
      shortBio: "Advises on digital banking upgrades, SMS alerts, and server safety.",
      fullBio: "Sri. Sathish Naik guides technological integrations including secure text banking alerts, automated statement servers, and ledger digitalization setups."
    },
            {
      name: "Sri. HARISH NAIK",
      role: "Director",
      image: harishNaik,
      shortBio: "Manages gold appraisal systems and secure vault operations.",
      fullBio: "Sri. Harish oversees branch vault operations. He ensures gold evaluation audits use correct weighing and testing procedures to guarantee asset safety."
    },
    {
      name: "Sri. KARUNAKARA KANCHAN",
      role: "Director",
      image: karunakarKanchan,
      shortBio: "Supervises mortgage valuations and property credit frameworks.",
      fullBio: "Sri. Karunakara Kanchan evaluates properties for long-term mortgage loans. He verifies legal land documents and ensures fair asset valuations."
    },
     {
      name: "Sri. SHEKHAR D SHETTY",
      role: "Director",
      image: shekarDShetty,
      shortBio: "Ensures democratic voting values and policy coordination.",
      fullBio: "Sri. Shekhar D Shetty manages policy amendments during the general body meet and guarantees equal shareholder rights inside society votes."
    },
    {
      name: "Smt. JYOTHI M SHETTY",
      role: "Director",
      image: jyothiShetty,
      shortBio: "Coordinates women's self-help groups (SHG) micro-credit schemes.",
      fullBio: "Smt. Jyothi M Shetty champions female financial inclusion. She designs self-help group savings programs and provides cottage industry credit access."
    },
    {
      name: "Smt. SHOBHA NAVEEN",
      role: "Director",
      image: shobanaveen,
      shortBio: "Advocates for women shareholders and family deposit plans.",
      fullBio: "Smt. Shobha represents women members during executive reviews. She advocates for high-yield family savings plans and local welfare program funding."
    },
  ];

  return (
    <div className="bg-[#FFFDF8] min-h-screen text-[#5B4636] font-sans overflow-x-hidden">
      <SEO
        title="About Us & Board of Directors"
        description="Learn about the governance, mission, and the 14 Board of Directors at Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi."
        path="/about"
      />

      {/* HERO SECTION */}
      <section
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center bg-cover bg-center border-b border-[#D4AF37]/30"
        style={{ backgroundImage: `linear-gradient(rgba(91, 70, 54, 0.75), rgba(91, 70, 54, 0.75)), url(${aboutBanner})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#FFFDF8] tracking-tight m-0">
            Board of Directors
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#F6E7B0] font-sans font-bold tracking-widest uppercase">
            Governing with Trust & Financial Security Since 2014
          </p>
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFDF8" />

      {/* INSTITUTION MISSION & VALUES */}
      <section className="py-16 text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col gap-6">
              <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Our Foundation</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636]">Democratic Leadership & Trust</h2>
              <div className="w-12 h-1 bg-[#FF9900] rounded-full"></div>

              <p className="text-sm sm:text-base text-[#5B4636]/80 leading-relaxed font-semibold">
                Chathrapathi Shivaji Co-operative Society Ltd. operates under democratic principles where every shareholder has an equal voice. Our primary objective is to channel local savings back into localized gold, agriculture, mortgage, and vehicle credit limits to empower Udupi families.
              </p>

              <div className="flex flex-wrap gap-4 mt-2 select-none">
                <div className="flex items-center gap-3 p-3.5 bg-[#F8F6F2] rounded-xl border border-[#D4AF37]/25 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#FF9900]" />
                  <span className="text-xs sm:text-sm font-bold text-[#5B4636]">Fully Audited Records</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-[#F8F6F2] rounded-xl border border-[#D4AF37]/25 shadow-sm">
                  <Award className="w-6 h-6 text-[#FF9900]" />
                  <span className="text-xs sm:text-sm font-bold text-[#5B4636]">Co-operative Act Compliant</span>
                </div>
              </div>
            </div>

            {/* Mission / Vision Box */}
            <div className="bg-[#F8F6F2] border border-[#D4AF37]/25 p-8 rounded-2xl shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-serif font-bold text-[#5B4636] text-lg sm:text-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]"></span> Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold mt-1.5 pl-4">
                  To provide secure, regulatory-compliant, and accessible banking services that improve the economic well-being of our community.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#5B4636] text-lg sm:text-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]"></span> Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold mt-1.5 pl-4">
                  To become Udupi's most progressive cooperative credit society, fostering regional savings growth and community welfare.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTIVE MEMBERS SECTION */}
      <section className="py-16 bg-[#F8F6F2] border-y border-[#D4AF37]/20 text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Executive Management</h2>
            <div className="w-12 h-1 bg-[#FF9900] rounded-full mx-auto mt-3"></div>
          </div>

          <div className="space-y-8">
            {executives.map((exec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white border border-[#D4AF37]/25 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row items-stretch hover:shadow-md transition-shadow duration-300 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Left Side: Image (35-40% Width) with Intelligent Fitting */}
                <div className="w-full md:w-[38%] min-h-[280px] sm:min-h-[320px] bg-[#F8F6F2] relative shrink-0 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full max-h-[280px] sm:max-h-[300px] object-contain object-center drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Right Side: Content Area (60-65% Width) */}
                <div className="w-full md:w-[62%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#5B4636] m-0 tracking-tight">
                      {exec.name}
                    </h3>
                    <span className="px-3.5 py-1 bg-[#FFF4E6] border border-[#FF9900]/25 text-[#FF9900] text-xs font-bold rounded-full uppercase tracking-wider shrink-0">
                      {exec.role}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#5B4636]/80 leading-relaxed font-medium">
                    {exec.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold mt-2 select-none">
                    <ShieldCheck className="w-4 h-4 text-[#FF9900]" /> Official Managing Committee
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* DIRECTORS GRID SECTION */}
      <section className="py-16 text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Committee</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Board of Directors</h2>
            <p className="text-xs sm:text-sm text-[#5B4636]/70 mt-2 font-semibold">
              Click on any director card to view their full profile biography.
            </p>
          </div>

          {/* Premium Grid Framework */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {directors.map((dir, idx) => {
              const isSelected = selectedDirector?.name === dir.name;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedDirector(dir)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={`bg-white rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-sm ${isSelected
                      ? 'ring-2 ring-[#D4AF37] border-transparent shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'border border-gray-100 hover:border-[#D4AF37] hover:shadow-md'
                    }`}
                >
                  {/* Card Image Area (70% Height via Aspect Ratio lock) */}
                  <div className="aspect-[3/4] w-full bg-[#F8F6F2] relative overflow-hidden shrink-0">
                    <img
                      src={dir.image}
                      alt={dir.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Details Area (30% Height Allocation) */}
                  <div className="p-3 sm:p-4 flex flex-col justify-center items-start flex-grow bg-white border-t border-gray-50">
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#5B4636] line-clamp-1 group-hover:text-[#FF9900] transition-colors w-full">
                      {dir.name}
                    </h4>
                    <span className="text-[10px] font-bold text-[#FF9900] uppercase tracking-wide mt-0.5">
                      {dir.role}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* MODAL WINDOW PROFILES */}
      <AnimatePresence>
        {selectedDirector && (
          <>
            {/* Modal Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDirector(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            {/* Modal Box Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-x-4 bottom-4 top-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 bg-[#FFFDF8] w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-[#D4AF37]/40 text-left overflow-y-auto max-h-[85vh]"
            >
              <div>
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
                  <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">
                    Director Profile Biography
                  </span>
                  <button
                    onClick={() => setSelectedDirector(null)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 border border-gray-200 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Dynamic Layout Body */}
                <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-28 h-36 bg-[#F8F6F2] rounded-xl border border-[#D4AF37]/30 overflow-hidden shrink-0 select-none shadow-sm">
                    <img
                      src={selectedDirector.image}
                      alt={selectedDirector.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#5B4636] m-0 tracking-tight">
                      {selectedDirector.name}
                    </h3>
                    <span className="inline-block px-3 py-0.5 bg-[#FFF4E6] text-[#FF9900] text-xs font-bold rounded-md uppercase tracking-wider mt-1.5">
                      {selectedDirector.role}
                    </span>
                    <p className="text-sm sm:text-base text-[#5B4636]/80 leading-relaxed font-medium mt-4 bg-[#F8F6F2] p-4 rounded-xl border border-gray-100">
                      {selectedDirector.fullBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Contact Footer Card */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-xs font-semibold">
                <div className="flex flex-col gap-2">
                  {selectedDirector.email && (
                    <span className="flex items-center gap-2 text-[#5B4636]/75">
                      <Mail className="w-4 h-4 text-[#FF9900]" /> {selectedDirector.email}
                    </span>
                  )}
                </div>
                <div className="bg-[#FFF4E6] text-[#FF9900] px-3 py-1.5 rounded-md text-[10px] font-bold border border-[#FF9900]/20 uppercase tracking-wide">
                  Verified Committee Executive
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
