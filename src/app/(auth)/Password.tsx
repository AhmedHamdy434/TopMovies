interface PasswordProps {
  password: string;
  setPassword: (password: string) => void;
}
const PasswordInput: React.FC<PasswordProps> = ({ password, setPassword }) => {
  return (
    <div className="password">
      <label className="password pl-2">Password</label>
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 shadow-md rounded focus:outline-0"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
  );
};

export default PasswordInput;
