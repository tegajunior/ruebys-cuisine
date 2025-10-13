import { BiLocationPlus } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

interface TestimonialCardProps {
  text: string
  name: string
  phone: string
  location: string
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  phone,
  location,
}) => (
  <div className="p-6 border-0 rounded-lg h-64 overflow-auto shadow-md bg-white">
    <p className="text-gray-700 mb-4">"{text}"</p>
    <div className="flex gap-4 items-center">
      <span className="text-sm text-secondary">
        - {name} - <span className="text-primary font-bold">{phone}</span>
      </span>
      <span className="text-sm text-secondary flex items-center">
        <GoLocation
          className="inline text-gray-500 mr-1"
          size={21}
        />
        {location}
      </span>
    </div>
  </div>
)

export default TestimonialCard
