import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-slate-400">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white">MediNova</h2>
            <p className="text-xs tracking-widest text-blue-300 uppercase">
              Smart Healthcare
            </p>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-xs">
              Modern healthcare that puts patients first.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>

            <ul className="space-y-4">
              <li>
                <Link href="/appointment" className="hover:text-blue-400">
                  Book Appointment
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-blue-400">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Company</h3>

            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/allDoctor" className="hover:text-blue-400">
                  Our Doctors
                </Link>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-slate-500">
          © 2025 MediNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
