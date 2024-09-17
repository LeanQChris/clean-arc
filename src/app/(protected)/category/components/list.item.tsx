
import { ChevronRightIcon, NotionLogoIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { ICategoryDTO } from '../data/interface';
const Item = ({ category }: { category: ICategoryDTO }) => {
    return <div className='flex w-full items-center justify-between gap-4 '>
        <div className='flex items-center gap-4'>
            <NotionLogoIcon height={20} width={20} />
            <h4>{category.name}</h4>
        </div>
        <div className='flex gap-2'>
            <Pencil1Icon height={20} width={20} className='cursor-pointer hover:scale-110' />
            <TrashIcon height={20} width={20} className='cursor-pointer' />
            {category.hasChild ? <ChevronRightIcon height={20} width={20}/> : <></>}
        </div>
    </div>
}

export default Item;