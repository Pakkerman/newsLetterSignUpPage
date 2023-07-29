import { PropsWithChildren } from "react"

export default function layout(props: PropsWithChildren) {
  return (
    <main className="flex h-[100svh] min-h-[768px] w-full flex-col items-center justify-center bg-slate-100 sm:bg-slate-700 ">
      <div className=" flex h-full w-full max-w-md flex-col bg-slate-100 sm:h-[80%] sm:w-[80%] sm:max-w-none sm:flex-row-reverse sm:items-center sm:justify-center sm:rounded-3xl sm:p-6">
        {props.children}
      </div>
    </main>
  )
}
