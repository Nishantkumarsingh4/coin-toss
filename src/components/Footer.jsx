
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-center py-6 px-6 text-center">
        {/* Copyright */}
        <p className="text-sm mb-3">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">CoinToss</span> · All Rights Reserved ·{" "}
          <span className="font-bold"><a href="https://doitforme.llc/">DO IT FOR ME LLC</a></span>
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
