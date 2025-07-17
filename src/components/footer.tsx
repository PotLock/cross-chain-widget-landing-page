"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

function GitHubReposModal() {
  const [isOpen, setIsOpen] = useState(false);

  const repos = [
    {
      name: "Cross-Chain Widget",
      url: "https://github.com/PotLock/cross-chain-widget",
      description: "Main widget repository",
    },
    {
      name: "Widget Playground",
      url: "https://github.com/PotLock/example_widget_playground",
      description: "Interactive playground for testing",
    },
    {
      name: "Landing Page",
      url: "https://github.com/PotLock/cross-chain-widget-landing-page",
      description: "Landing page source code",
    },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-200"
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z"
            fill="currentColor"
          />
        </svg>
        Code
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-auto shadow-2xl border border-gray-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-left">
                  GitHub Repositories
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {repos.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl transition-all duration-200 hover:shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 text-left">
                        {repo.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed text-left">
                        {repo.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-left">
                Click any repository to view the source code on GitHub
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="container flex flex-col items-center gap-12 justify-center py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-1 basis-0 space-x-4 mb-4 md:mb-0">
          <Link
            href="/#"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/#"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
          >
            Terms of use
          </Link>
        </div>

        <div className="flex-1 justify-center flex basis-0 space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.youtube.com/@PotLock"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://t.me/+tYetPhCN1sRkNzYx"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://github.com/potlock"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://blog.potlock.org/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_315_6515)">
                <path
                  d="M8 6C9.5913 6 11.1174 6.63214 12.2426 7.75736C13.3679 8.88258 14 10.4087 14 12C14 13.5913 13.3679 15.1174 12.2426 16.2426C11.1174 17.3679 9.5913 18 8 18C6.4087 18 4.88258 17.3679 3.75736 16.2426C2.63214 15.1174 2 13.5913 2 12C2 10.4087 2.63214 8.88258 3.75736 7.75736C4.88258 6.63214 6.4087 6 8 6ZM17 7C18.5 7 19.5 9.239 19.5 12C19.5 14.761 18.5 17 17 17C15.5 17 14.5 14.761 14.5 12C14.5 9.239 15.5 7 17 7ZM21 7.5C21.38 7.5 21.712 8.327 21.88 9.746L21.927 10.189L21.946 10.424L21.976 10.918L21.986 11.177L21.998 11.718L22 12L21.998 12.282L21.986 12.823L21.976 13.083L21.946 13.576L21.926 13.811L21.881 14.254C21.712 15.674 21.381 16.5 21 16.5C20.62 16.5 20.288 15.673 20.12 14.254L20.073 13.811L20.054 13.576L20.024 13.082L20.014 12.823L20.002 12.282V11.718L20.014 11.177L20.024 10.917L20.054 10.424L20.074 10.189L20.119 9.746C20.288 8.326 20.619 7.5 21 7.5Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_315_6515">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://x.com/potlock_"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 20.5375L13.9609 10.2776L13.9729 10.2872L20.3197 2.93359H18.1988L13.0285 8.91892L8.92262 2.93359H3.36015L9.93187 12.5125L9.93108 12.5117L3 20.5375H5.12094L10.8691 13.8784L15.4375 20.5375H21ZM8.08225 4.53394L17.9586 18.9372H16.2779L6.39353 4.53394H8.08225Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <div className="text-center flex-1 basis-0 sm:text-right">
          <GitHubReposModal />
        </div>
      </div>

      <p className="inline-flex items-center gap-2 text-center text-base md:text-lg text-neutral-900">
        With ❤️ from
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="/images/potlock-logo.png"
            alt="Potlock Logo"
            width={150}
            height={50}
            className="h-6 w-auto object-cover pointer-events-none"
            priority
          />
          <span className="font-bold">POTLOCK</span>
        </Link>
      </p>
    </footer>
  );
}
