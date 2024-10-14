type Props = {
  author: string;
  comment: string;
};

export default function TestimonialCard({ author, comment }: Props) {
  return (
    <div className="px-10 py-8 flex flex-col gap-8 bg-testimonial-gradient rounded-3xl">
      <p className="text-p-desktop">{comment}</p>
      <p className="text-p-mobile">{author}</p>
    </div>
  );
}
