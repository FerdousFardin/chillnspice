import ComingSoon from "@/components/ComingSoon";
import PageWrapper from "@/components/PageWrapper/PagerWrapper";
import React from "react";

export default function about() {
  return (
    <>
      {/*<PageWrapper>*/}
      <div className="w-full h-screen grid place-items-center">
        <ComingSoon>About</ComingSoon>
      </div>
      {/* </PageWrapper> */}
    </>
  );
}
