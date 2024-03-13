import { Bleed } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const BleedingBanner = ({ src, alt, navigateTo }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(navigateTo);
  };

  return (
    <div className="image-hover" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default BleedingBanner;
