import cx from "~/utils/cx";
import { TCardLayout } from "~/components/types";

type Props = TCardLayout;

export default function CardLayout({
  children,
  cardId,
  className,
  fullHeight = true,
}: Props) {
  return (
    <section
      id={cardId}
      className={cx(
        `
        bg-card-gradient overflow-hidden flex flex-col items-center shadow-2xl rounded-[40px] mt-10 ${className}
      `,
        {
          "min-h-screen": fullHeight,
        }
      )}
    >
      {children}
    </section>
  );
}
