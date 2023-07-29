type customButtonProps = {
  buttonText?: string
}

export default function customButton(props: customButtonProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-2 top-8 left-[50%] translate-x-[-50%] w-[90%] rounded-lg bg-gradient-to-r from-[#ff5176] to-[#fe6634] blur-lg group-hover:opacity-50 opacity-0 pointer-events-none" />
      <button
        type="submit"
        className="relative w-full rounded-lg bg-slate-800 py-4 font-RobotoBold text-sm text-white hover:cursor-pointer hover:bg-gradient-to-br from-[#ff5176] to-[#fe6634] transition  "
      >
        {props.buttonText}
      </button>
    </div>
  )
}
