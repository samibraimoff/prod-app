// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jestEmptyComponent = (props: any) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <svg {...props} />;
};

export default jestEmptyComponent;
