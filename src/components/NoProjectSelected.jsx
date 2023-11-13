
import noproject from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected=(props)=>{
    return (
        <div className='mt-24 text-center w-2/3'>
        <img className="w-16 h-16 mx-auto object-contain" src={noproject} alt='remote image' />
        <h2 className="font-bold text-xl text-stone-500 my-4">No project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className='mt-8'>
               <Button onClick={props.onClick}>Create new project</Button>
            </p>
        </div>
    );
}
export default NoProjectSelected;