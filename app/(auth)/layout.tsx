type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex items-center justify-center p-10">
      <div className="max-w-lg mx-auto w-full border px-12 py-10 rounded shadow-md drop-shadow-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
