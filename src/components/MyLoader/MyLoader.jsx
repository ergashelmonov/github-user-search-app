import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={730}
    height={460}
    viewBox="0 0 730 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="48" rx="100" ry="100" width="117" height="117" />
    <rect x="190" y="58" rx="5" ry="5" width="480" height="24" />
    <rect x="190" y="94" rx="14" ry="14" width="115" height="18" />
    <rect x="192" y="170" rx="5" ry="5" width="480" height="24" />
    <rect x="190" y="254" rx="18" ry="18" width="480" height="96" />
    <rect x="413" y="385" rx="14" ry="14" width="209" height="18" />
    <rect x="183" y="440" rx="14" ry="14" width="209" height="18" />
    <rect x="182" y="388" rx="14" ry="14" width="209" height="18" />
    <rect x="415" y="432" rx="14" ry="14" width="209" height="18" />
  </ContentLoader>
);

export default MyLoader;
