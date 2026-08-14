import PortfolioShell from "@/components/PortfolioShell";
import RefreshToHome from "@/components/RefreshToHome";
import ImageClickHandler from "@/components/ImageClickHandler";
import PortfolioFooter from "@/components/PortfolioFooter";

export default function Home() {
  return (
    <>
      <RefreshToHome />
      <ImageClickHandler />
      <PortfolioShell />
      <PortfolioFooter />
    </>
  );
}
