import { DataTableDemo1 } from "@/components/TableDemo1";
import { DataTableDemo } from "@/components/TableDemo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectModel } from "@/components/user/select-model";


export default function QuoteListPage() {
   
  return (
    <section  className="flex flex-col gap-5 ">
        <div className='flex mt-4 items-center justify-between'>
          <h2 className='text-black dark:text-white text-xl font-bold'>Quotes</h2>
          <SelectModel>
          <Button variant="default" className='text-white'>New Quote</Button>
          </SelectModel>
          
      </div>
      <Separator/>
      <DataTableDemo/>
    </section>
  )
}
