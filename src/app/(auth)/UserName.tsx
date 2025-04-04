interface UserNameProps {
  userName: string;
  setUserName: (userName: string) => void;
}
const UserName: React.FC<UserNameProps> = ({ userName, setUserName }) => {
  return (
    <div className="userName">
      <label className="pl-2">UserName</label>
      <input
        type="text"
        name="userName"
        placeholder="UserName"
        className="w-full p-2 shadow-md rounded focus:outline-0"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
    </div>
  );
};

export default UserName;
