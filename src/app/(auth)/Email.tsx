interface EmailProps {
  email: string;
  setEmail: (email: string) => void;
}
const Email: React.FC<EmailProps> = ({ email, setEmail }) => {
  return (
    <div className="email w-full flex flex-col gap-2">
      <label className="pl-2">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 shadow-md rounded focus:outline-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  );
};

export default Email;
