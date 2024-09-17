
import { ChevronRightIcon, NotionLogoIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { ICategoryDTO } from '../data/interface';
import { categoryStore } from '../store';
const Item = ({ category, onSelect }: { category: ICategoryDTO, onSelect: () => void }) => {
    const { setToEditData } = categoryStore()
    return <div className='flex w-full items-center justify-between gap-4 '>
        <button className='flex items-center gap-4 cursor-pointer' onClick={onSelect}>
            <NotionLogoIcon height={20} width={20} />
            <h4>{category.name}</h4>
        </button>
        <div className='flex gap-2'>
            <Pencil1Icon onClick={() => setToEditData(category)} height={20} width={20} className='cursor-pointer hover:scale-110' />
            <TrashIcon height={20} width={20} className='cursor-pointer' />
            {category.hasChild ? <ChevronRightIcon height={20} width={20} /> : <></>}
        </div>
    </div>
}

export default Item;