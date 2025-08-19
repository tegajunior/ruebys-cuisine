interface TestimonialCardProps {
  text: string
  name: string
  phone: string
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  phone,
}) => (
  <div className="p-6 border-0 rounded-lg shadow-md bg-white">
    <p className="text-gray-700 mb-4">"{text}"</p>
    <span className="text-sm text-secondary">
      - {name} - <span className="text-primary font-bold">{phone}</span>
    </span>
  </div>
)

export default TestimonialCard
