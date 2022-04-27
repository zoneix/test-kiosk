import { TabContent } from '@momentum-ui/react';
import EntVideo from './assests/hca.mp4';
import ReactPlayer from 'react-player/lazy';

const TV = () => {
  return <div>
    <ReactPlayer url={EntVideo} playing controls/>
  </div>;
}

export default TV;