"use client"
import React, { FormEvent, useState } from 'react'

function Content() {

    const [username, setUsername] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Route to your actual signup flow, e.g.:
        // router.push(`/signup?username=${encodeURIComponent(username)}`);
    }

    return (
        <div
            className="
            mt-[1.14vw] flex flex-col items-start gap-6
            max-md:items-center max-md:text-center
            max-sm:mt-[5vw] max-lg:mt-[2vw]
            xl:mt-[14.5px] 2xl:mt-0
          "
        >
            <h1
                className="
    text-h1
    text-balance
    text-[#254f1a]
    leading-[1.06]
    tracking-[-0.04em]
    max-md:text-center
  "
                style={{ fontVariationSettings: '"wght" 900' }}
            >
                A link in bio built for you.
            </h1>

            <p
                className="
    max-w-[60ch]
    text-body
    text-[#254f1a]
    leading-[1.5]
    tracking-[-0.01em]
    max-md:text-center
  "
                style={{ fontVariationSettings: '"wght" 560' }}
            >
                Join 70M+ people using Linktree for their link in bio. One link to help you
                share everything you create, curate and sell from your Instagram, TikTok,
                Twitter, YouTube and other social media profiles.
            </p>

            <form
                onSubmit={handleSubmit}
                className="
              flex w-full flex-wrap items-stretch gap-3
              justify-start max-md:justify-center
              max-sm:flex-col max-sm:items-center
              lg:mt-4
            "
            >
                <input
                    id="username-header"
                    aria-label="Claim your Linktree username"
                    placeholder="linktr.ee/yourname"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    autoComplete="off"
                    inputMode="text"
                    enterKeyHint="go"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="
                        min-h-[3.75rem] min-w-[280px] flex-1 rounded-sm border-none
                        bg-white px-4 py-2 font-linksans text-base font-medium
                        text-[#757575] transition-all duration-150
                        focus:outline-2 focus:outline-offset-2 focus:outline-white
                        max-sm:min-w-[85vw] max-sm:rounded-[1.7vw] max-sm:p-[4vw]
                        max-sm:text-[4vw]
                    "
                />
                <button
                    type="submit"
                    className="
                inline-flex min-h-[3.75rem] min-w-[18.75rem] cursor-pointer
                select-none items-center justify-center gap-2 whitespace-nowrap
                rounded-pill bg-[#254f1a] px-9 text-center text-base font-medium
                text-marble transition-[background-color,transform,filter,box-shadow]
                duration-150 ease-out
                hover:-translate-y-px hover:brightness-[1.02]
                active:scale-[0.97] active:duration-[80ms]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-shade focus-visible:ring-offset-2
                disabled:pointer-events-none disabled:opacity-50
                max-sm:min-w-[80vw] max-sm:px-[7vw]
              "
                >
                    Get started for free
                </button>
            </form>
            {/* <div
                className="w-full bg-[#ff0000] sm:bg-[#00ff00]
        md:bg-[#0000ff] lg:bg-[#00ffff]
        xl:bg-[#ff00ff] 2xl:bg-[#ffff00]"
            >
                Content
            </div> */}
        </div>
    )
}

export default Content