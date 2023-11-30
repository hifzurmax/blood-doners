import useAuth from "../../hooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <h3>Hello: {user?.displayName}</h3>
        </div>
    );
};

export default AdminHome;