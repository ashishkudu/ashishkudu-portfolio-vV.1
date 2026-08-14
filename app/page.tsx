import PortfolioShell from "@/components/PortfolioShell";
import RefreshToHome from "@/components/RefreshToHome";
import ImageClickHandler from "@/components/ImageClickHandler";

export default function Home() {
  return (
    <>
      <RefreshToHome />
      <ImageClickHandler />
      <PortfolioShell />
    </>
  );
}
