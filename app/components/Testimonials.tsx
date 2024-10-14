import CardLayout from "~/components/CardLayout";
import CardHeader from "~/components/ui/CardHeader";
import CardContainer from "~/components/ui/CardContainer";
import TestimonialCard from "~/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <CardLayout cardId="testimonials" fullHeight={false}>
      <CardHeader
        badgeText="Testimonials"
        badgeIcon="FiFileText"
        title="Don't belive me - hear it from the others"
      />
      <CardContainer>
        <TestimonialCard
          author="
          John Doe
        "
          comment="
          I am very happy with the results. I will definitely use this service again.
        "
        />
        <TestimonialCard
          author="
          Jane Doe
        "
          comment="
          I am very happy with the results. I will definitely use this service again.

          "
        />
        <TestimonialCard
          author="
        Mark Doe
        "
          comment="
        The service was excellent. I will definitely use it again.
        "
        />
      </CardContainer>
    </CardLayout>
  );
}
