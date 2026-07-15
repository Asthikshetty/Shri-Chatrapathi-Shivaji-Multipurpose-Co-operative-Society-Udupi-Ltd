import React, { useState } from 'react';
import { Calendar, Link as LinkIcon, Check, Bell, Megaphone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';
interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
}

export const NewsAnnouncements: React.FC = () => {
  // State to track which item's link was just copied for the "Copied!" feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Mock Data - Including your specific request
  const newsData: NewsItem[] = [
    {
      id: "annual-meeting-july-2026",
      date: "July 27, 2026",
      category: "Important Update",
      title: "Upcoming General Meeting & Scholarship Ceremony",
      content: "We will have the general meeting on 27th July. There will also be a scholarship ceremony in our society to honor the outstanding educational achievements of our members' children. All members are requested to attend."
    },
    {
      id: "loan-interest-revision",
      date: "June 28, 2026",
      category: "Financial News",
      title: "Revision in Micro-Loan Interest Rates",
      content: "Starting next month, the interest rates for local micro-trader loans will be reduced by 0.5% to further support our local community businesses during the monsoon season."
    },
    {
      id: "new-pigmy-collection",
      date: "June 15, 2026",
      category: "Service Expansion",
      title: "Expanded Doorstep Pigmy Collection Routes",
      content: "Our daily doorstep pigmy ledger collection service has been expanded to cover three new wards in the Udupi municipal area. Please contact your local agent for exact timings."
    }
  ];

  // Function to copy the exact URL of the news item to the clipboard
const handleCopyLink = (id: string) => {
    // window.location.pathname dynamically grabs the current route (e.g., "/news")
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2500);
    }).catch(err => {
      console.error("Failed to copy link: ", err);
    });
  };

  return (
    <>
      <SEO 
        title="News & Announcements" 
        description="Stay updated with the latest news, meetings, and announcements from Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi."
        path="/news"
      />

      {/* HERO SECTION (Matches Gallery Theme) */}
      <section className="bg-[#FFFDF8] border-b border-[#D4AF37]/15 py-12 md:py-16 text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="bg-[#FFF4E6] p-3 rounded-full mb-4 border border-[#FF9900]/20">
            <Megaphone className="w-6 h-6 text-[#FF9900]" />
          </div>
          <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Stay Informed</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#5B4636] mt-2 m-0">
            News & Announcements
          </h1>
          <p className="mt-3 text-base text-[#5B4636]/70 max-w-2xl mx-auto font-medium">
            Read the latest updates regarding our society's events, policy changes, meetings, and community initiatives.
          </p>
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFFFF" />

      {/* ANNOUNCEMENTS LIST SECTION */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-6">
            {newsData.map((item) => (
              <div 
                key={item.id}
                id={item.id} // Added ID for URL anchor linking
                className="bg-white border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-[#FF9900] relative overflow-hidden"
              >
                {/* Decorative side accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF9900] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Content Area */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs font-bold uppercase tracking-wider">
                      <span className="px-2.5 py-1 bg-[#FFF4E6] text-[#FF9900] rounded border border-[#FF9900]/20 flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                      <span className="text-[#5B4636]/60 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#5B4636] mb-3 leading-snug">
                      {item.title}
                    </h2>
                    
                    <p className="text-base text-[#5B4636]/80 leading-relaxed font-medium">
                      {item.content}
                    </p>
                  </div>

                  {/* Share Action Area */}
                  <div className="sm:pl-6 sm:border-l border-[#D4AF37]/15 flex items-center sm:items-start pt-4 sm:pt-0 mt-4 sm:mt-0 border-t sm:border-t-0 shrink-0">
                    <button
                      onClick={() => handleCopyLink(item.id)}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 border w-full sm:w-auto ${
                        copiedId === item.id 
                          ? 'bg-green-50 border-green-200 text-green-700' 
                          : 'bg-white hover:bg-[#FFF4E6] border-[#D4AF37]/30 text-[#5B4636] hover:text-[#FF9900] hover:border-[#FF9900]/50 shadow-sm'
                      }`}
                      aria-label="Copy link to share"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <LinkIcon className="w-4 h-4" />
                          Share Link
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};