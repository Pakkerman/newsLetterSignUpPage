import Link from "next/link"
import CustomButton from "~/components/CustomButton"
import Layout from "~/components/Layout"

export default function success(props: { email: string }) {
  return (
    <Layout>
      <div className="flex h-full flex-col justify-between p-8">
        <div className="flex h-[80%] flex-col justify-center space-y-8 ">
          <img
            className="h-16 w-16"
            src="assets/images/icon-success.svg"
            alt=""
          />
          <h1 className="w-full font-RobotoBold text-4xl sm:text-[5vw] sm:leading-[4vw]">
            Thanks for suscribing!
          </h1>
          <p>
            A confirmation email has been sent to eamil@example.com. Please open
            it and click the button inside to confirm your suscription
          </p>
        </div>
        <Link href="/#">
          <CustomButton buttonText="Dismiss Message" />
        </Link>
      </div>
    </Layout>
  )
}
