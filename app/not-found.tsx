import Link from "next/link";

import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

export default function NotFound() {
  return (
    <MotionWrapper className="text-primary h-screen flex justify-center items-center flex-col">
      <h1>Not Found</h1>
      <p>Could not find Page</p>
      <Link href="/">Return to Home</Link>
    </MotionWrapper>
  );
}
