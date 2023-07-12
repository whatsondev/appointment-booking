import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1440px] container  mx-auto'>
      <div className='container xl:w-[1264px] mx-auto background'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
