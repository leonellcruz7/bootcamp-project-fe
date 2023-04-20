export const handleNavigate = (
  navigate: (path: string) => void,
  endpoint: string
) => {
  navigate(`${endpoint}`);
};
