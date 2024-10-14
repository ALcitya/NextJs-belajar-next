import { ReactNode } from 'react'

interface CardListProps {
    children: ReactNode;
  }
const CardList : React.FC<CardListProps> = ({ children }) => {
  return <div className="bg-blue-500 w-full p-4">{children}</div>;
};
export default CardList;