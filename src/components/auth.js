import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { id } = useParams();
  if (id === 'login') {
    return <div>login</div>;
  }
  if (id === 'register') {
    return <div>register</div>;
  }
  return '||||||||||||';
};
