interface IProps {
  width: number;
  height: number;
  src: string;
}

export const VideoPlayer: React.FC<IProps> = ({ width, height, src }) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      controls={false}
      width={width}
      height={height}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};
