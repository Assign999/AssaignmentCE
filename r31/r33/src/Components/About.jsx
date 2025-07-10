import { useMatch } from 'react-router-dom';

const About = () => {
  const match = useMatch('/about');
  return (
    <div>
      <h1>About This App</h1>
      {match && <p>This route exactly matches /about</p>}
    </div>
  );
};
export default About;
