import { Separator } from '@/components/ui/separator';
import { ChartLine, MoreHorizontal, Share, AlertCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ChartDemo } from '@/components/ChartDemo';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
export const DashboardPage = () => {



  return (
    <section className="flex flex-col gap-5 ">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border dark:border-yellow-900/50 p-4 rounded-lg mt-2">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              Complétez votre profil
            </h3>
            <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              <p>
                Pour une meilleure expérience, veuillez compléter votre profil en ajoutant votre adresse.{' '}
                <a href="/profile" className="font-medium underline hover:text-yellow-600">
                  Compléter maintenant
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-4 items-center justify-between'>
        <h2 className='text-black dark:text-white text-xl font-bold'>Dashboard</h2>
        <Button variant="default" className='text-white'>New Quote</Button>
      </div>
      <Separator />
      <div className='grid grid-cols-4 gap-4'>
        <Card className="w-full max-h-44 dark:bg-slate-900 dark:border-[#ffffff25]" >
          <CardHeader>
            <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

          </CardHeader>
          <CardContent className="font-bold text-2xl">

            75
          </CardContent>
          <CardFooter>
            <div className='flex items-center w-[60%] justify-between'>
              <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
                <ChartLine className='w-4' /><span className='text-xs'>12%</span>
              </div>
              <div className=''>
                <span className='text-xs'> from 70,102</span>
              </div>
            </div>


          </CardFooter>
        </Card>
        <Card className="w-full max-h-44 dark:bg-slate-900 dark:border-[#ffffff25]" >
          <CardHeader>
            <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

          </CardHeader>
          <CardContent className="font-bold text-2xl">

            75
          </CardContent>
          <CardFooter>
            <div className='flex items-center w-[60%] justify-between'>
              <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
                <ChartLine className='w-4' /><span className='text-xs'>12%</span>
              </div>
              <div className=''>
                <span className='text-xs'> from 70,102</span>
              </div>
            </div>


          </CardFooter>
        </Card>
        <Card className="w-full max-h-44 dark:bg-slate-900 dark:border-[#ffffff25]" >
          <CardHeader>
            <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

          </CardHeader>
          <CardContent className="font-bold text-2xl">

            75
          </CardContent>
          <CardFooter>
            <div className='flex items-center w-[60%] justify-between'>
              <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
                <ChartLine className='w-4' /><span className='text-xs'>12%</span>
              </div>
              <div className=''>
                <span className='text-xs'> from 70,102</span>
              </div>
            </div>


          </CardFooter>
        </Card>
        <Card className="w-full max-h-44 dark:bg-slate-900 dark:border-[#ffffff25]" >
          <CardHeader>
            <CardTitle className='text-sm font-medium text-muted-foreground'>Totals Users</CardTitle>

          </CardHeader>
          <CardContent className="font-bold text-2xl">

            75
          </CardContent>
          <CardFooter>
            <div className='flex items-center w-[60%] justify-between'>
              <div className='flex items-center bg-[#0285c718] rounded-md text-primary font-bold bg-opacity-80 px-1'>
                <ChartLine className='w-4' /><span className='text-xs'>12%</span>
              </div>
              <div className=''>
                <span className='text-xs'> from 70,102</span>
              </div>
            </div>


          </CardFooter>
        </Card>
      </div>

      <div className='flex gap-3 mt-9'>
        <Card className="flex-1 dark:bg-slate-900 dark:border-[#ffffff25]" >
          <CardHeader>
            <CardTitle className='text-sm flex items-center justify-between font-medium dark:text-white'>
              <span className=''>My Recents quotes</span>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-6 w-6 dark:text-white" />
              </Button>

            </CardTitle>
            <Separator className='mt-[-1.2rem] mb-[1rem]' />
            <CardDescription className='text-muted-foreground mt-5'>

              See and talk to your users and leads immediately by importing your data into the Front Dashboard platform.
            </CardDescription>
          </CardHeader>

          <CardContent className="font-bold text-2xl">
            <section className='flex flex-col gap-5'>
              <div className='flex flex-row justify-between items-center'>
                <div className="flex flex-row items-center gap-3">
                  <Avatar className="h-12 w-12">

                    <AvatarFallback className='bg-orange-600'><span className='text-sm'>M</span></AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className="font-medium text-base dark:text-white">Martin</span>
                    <span className='text-sm font-light text-muted-foreground'>User</span>
                  </div>

                </div>
                <div>
                  <Button>
                    <span className='text-sm'>View more</span>
                    <Share /> </Button>
                </div>

              </div>
              <Separator />
              <div className='flex flex-row justify-between items-center'>
                <div className="flex flex-row items-center gap-3">
                  <Avatar className="h-12 w-12">

                    <AvatarFallback className='bg-orange-600'><span className='text-sm'>M</span></AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className="font-medium text-base dark:text-white">Martin</span>
                    <span className='text-sm font-light text-muted-foreground'>User</span>
                  </div>

                </div>
                <div>
                  <Button>
                    <span className='text-sm'>View more</span>
                    <Share /> </Button>
                </div>

              </div>
              <Separator />
              <div className='flex flex-row justify-between items-center'>
                <div className="flex flex-row items-center gap-3">
                  <Avatar className="h-12 w-12">

                    <AvatarFallback className='bg-orange-600'><span className='text-sm'>M</span></AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className="font-medium text-base dark:text-white">Martin</span>
                    <span className='text-sm font-light text-muted-foreground'>User</span>
                  </div>

                </div>
                <div>
                  <Button>
                    <span className='text-sm'>View more</span>
                    <Share /> </Button>
                </div>

              </div>
              <Separator />
              <div className='flex flex-row justify-between items-center'>
                <div className="flex flex-row items-center gap-3">
                  <Avatar className="h-12 w-12">

                    <AvatarFallback className='bg-orange-600'><span className='text-sm'>M</span></AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className="font-medium text-base dark:text-white">Martin</span>
                    <span className='text-sm font-light text-muted-foreground'>User</span>
                  </div>

                </div>
                <div>
                  <Button>
                    <span className='text-sm'>View more</span>
                    <Share /> </Button>
                </div>

              </div>
              <Separator />
            </section>

          </CardContent>
          <CardFooter>



          </CardFooter>
        </Card>
        <div className='w-[35rem]'>
          <ChartDemo />
        </div>
      </div>
    </section>
  );
}
