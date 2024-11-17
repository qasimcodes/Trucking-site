import  { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Here you can add functionality to send data to your backend
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100    ">
   
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-200 p-6 rounded shadow-md w-80"
      >
        
        <h2 className="text-lg font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-900 mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
            placeholder="enter email credentials"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-900 mb-2" htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
            placeholder="enter password" 
          />
        </div>

        <button 
          type="submit  " 
          className="bg-gray-900 text-white rounded py-2 w-full hover:bg-gray-800 transition duration-200"
      
        >
             
          Login
        </button>

 

      </form>
    </section>
  );
};

export default Login;

