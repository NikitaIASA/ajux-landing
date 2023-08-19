import { FC } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import PriceList from "../PriceList";

import "./Pricing.scss";

interface PricingProps {}

export const Pricing: FC<PricingProps> = () => {
  return (
    <section className="pricing">
      <Container>
        <SectionHeader title="The Best Pricing Plan" subtitle="Pricing" />
        <PriceList />
      </Container>
    </section>
  );
};
