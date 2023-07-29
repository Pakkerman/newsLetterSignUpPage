import React, { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean>(true)

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const email = event.target.value
    setEmail(email)
  }

  function validate(event: React.FormEvent<HTMLFormElement>): void {
    console.log(email)
    event.preventDefault()
    const emailPattern = /.+@.+\..+/

    const isValidEmail = emailPattern.test(email)
    setIsValid(isValidEmail)
  }

  return (
    <main className=" flex h-[100svh] min-h-[768px] w-full flex-col items-center justify-center bg-slate-100 sm:bg-slate-700 ">
      <div className=" flex h-full w-full max-w-md flex-col bg-slate-100 sm:h-[80%] sm:w-[80%] sm:max-w-none sm:flex-row-reverse sm:items-center sm:justify-center sm:rounded-3xl sm:p-6">
        <div className="h-[284px] shrink overflow-hidden rounded-b-2xl sm:hidden">
          <img
            className="h-full w-full object-cover"
            src="assets/images/illustration-mobile.svg"
            alt="cover image"
          />
        </div>
        <div className="hidden h-full overflow-hidden rounded-3xl sm:block">
          <img
            className="h-full w-full object-cover object-right"
            src="assets/images/illustration-desktop.svg"
            alt="cover image"
          />
        </div>
        <section className=" flex grow flex-col justify-evenly px-8 sm:items-center sm:space-y-6">
          <h1 className="w-full font-RobotoBold text-4xl sm:text-[5vw] sm:leading-[4vw]">
            Stay updated!
          </h1>
          <h1 className="w-full">
            Join 60,000+ product managers receiving monthly updates on:
          </h1>
          <ul className="w-full space-y-4">
            <li className="flex items-start space-x-4 ">
              <img src="assets/images/icon-list.svg" alt="list icon" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex items-start space-x-4">
              <img src="assets/images/icon-list.svg" alt="list icon" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex items-start space-x-4">
              <img src="assets/images/icon-list.svg" alt="list icon" />
              <p>And much more!</p>
            </li>
          </ul>

          <form
            className="flex w-full max-w-lg flex-col justify-center space-y-4 "
            onSubmit={validate}
          >
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between opacity-90">
                <label className="font-RobotoBold text-xs ">
                  Email Address
                </label>
                {!isValid && (
                  <p className=" text-xs font-RobotoBold text-red-500">
                    Valid Email Required
                  </p>
                )}
              </div>
              <input
                type="text"
                onChange={handleEmailChange}
                value={email}
                placeholder="email@company.com"
                className={`h-12 rounded-md border-[1px] p-3 shadow-inner
                hover:cursor-pointer outline-none
                focus:border-opacity-100
                transition-all
                ${
                  isValid
                    ? "border-slate-800 border-opacity-40 "
                    : "border-red-500 border-opacity-100 bg-red-100 bg-opacity-60"
                }`}
              />
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 top-8 left-[50%] translate-x-[-50%] w-[90%] rounded-lg bg-gradient-to-r from-[#ff5176] to-[#fe6634] blur-lg group-hover:opacity-50 opacity-0" />
              <button
                type="submit"
                className="relative w-full rounded-lg bg-slate-800 py-4 font-RobotoBold text-sm text-white hover:cursor-pointer hover:bg-gradient-to-br from-[#ff5176] to-[#fe6634] transition  "
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </section>
      </div>
      {/* <Footer /> */}
    </main>
  )
}
