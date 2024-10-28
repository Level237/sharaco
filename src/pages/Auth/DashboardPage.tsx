import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { persistor } from '../../store';
import { getUser } from '../../api/auth/getUser';
import Header from '../../components/auth/Header';
import Sidebar from '../../components/auth/sidebar/Sidebar';
import { Separator } from '@/components/ui/separator';
import { ChartArea, ChartBar, ChartLine, MoreHorizontal, Plus } from 'lucide-react';
import UserList from '@/components/admin/users/UserList';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartDemo } from '@/components/ChartDemo';
export const DashboardPage=() => {
  //const { user } = useSelector((state:any) => state.auth);

  //persistor.purge();


  return (
    <section  className="flex flex-col gap-5 ">
      
      <div className='flex mt-4 items-center justify-between'>
          <h2 className='text-black dark:text-white text-xl font-bold'>Dashboard</h2>
          <Button variant="default" className='text-white'>New Quote</Button>
      </div>
      <Separator/>
      <div className='grid grid-cols-4 gap-4'>
      <Card className="w-full max-h-44 bg-slate-900 border-[#ffffff25]" >
      <CardHeader>
        <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

      </CardHeader>
      <CardContent className="font-bold text-2xl">
       
        75
      </CardContent>
      <CardFooter>
          <div className='flex items-center w-[60%] justify-between'>
            <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
            <ChartLine className='w-4'/><span className='text-xs'>12%</span>
            </div>
          <div className=''>
            <span className='text-xs'> from 70,102</span>
          </div>
          </div>
          
        
      </CardFooter>
    </Card>
    <Card className="w-full max-h-44 bg-slate-900 border-[#ffffff25]" >
      <CardHeader>
        <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

      </CardHeader>
      <CardContent className="font-bold text-2xl">
       
        75
      </CardContent>
      <CardFooter>
          <div className='flex items-center w-[60%] justify-between'>
            <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
            <ChartLine className='w-4'/><span className='text-xs'>12%</span>
            </div>
          <div className=''>
            <span className='text-xs'> from 70,102</span>
          </div>
          </div>
          
        
      </CardFooter>
    </Card>
    <Card className="w-full max-h-44 bg-slate-900 border-[#ffffff25]" >
      <CardHeader>
        <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

      </CardHeader>
      <CardContent className="font-bold text-2xl">
       
        75
      </CardContent>
      <CardFooter>
          <div className='flex items-center w-[60%] justify-between'>
            <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
            <ChartLine className='w-4'/><span className='text-xs'>12%</span>
            </div>
          <div className=''>
            <span className='text-xs'> from 70,102</span>
          </div>
          </div>
          
        
      </CardFooter>
    </Card>
    <Card className="w-full max-h-44 bg-slate-900 border-[#ffffff25]" >
      <CardHeader>
        <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>
        
      </CardHeader>
      <CardContent className="font-bold text-2xl">
       
        75
      </CardContent>
      <CardFooter>
          <div className='flex items-center w-[60%] justify-between'>
            <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
            <ChartLine className='w-4'/><span className='text-xs'>12%</span>
            </div>
          <div className=''>
            <span className='text-xs'> from 70,102</span>
          </div>
          </div>
          
        
      </CardFooter>
    </Card>
      </div>

      <div className='flex gap-3 mt-9'>
      <Card className="flex-1  bg-slate-900 border-[#ffffff25]" >
      <CardHeader>
        <CardTitle className='text-sm flex items-center justify-between font-medium text-white'>
          <span>Recents quotes</span>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-6 w-6 dark:text-white" />
          </Button>
          
        </CardTitle>
        <Separator className='mt-[-1.2rem] mb-[1rem]'/>
      <CardDescription className='text-muted-foreground mt-5'>

      See and talk to your users and leads immediately by importing your data into the Front Dashboard platform.
      </CardDescription>
      </CardHeader>
     
      <CardContent className="font-bold text-2xl">
       
        
      </CardContent>
      <CardFooter>
          
          
        
      </CardFooter>
    </Card>
    <div className='w-[28rem]'>
    <ChartDemo/>
    </div>
      </div>
    </section>
  );
}
                        