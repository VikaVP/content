'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

export default function InputContent() {
  const [errorSearch, setErrorSearch] = useState('');
  const [search, setSearch] = useState('');
  const { toast } = useToast();

  const handleChange = (value: string) => {
    const isVimeo = value.slice(0, 18) === 'https://vimeo.com/';
    const isDailyMotion = value.slice(0, 27) === 'https://www.dailymotion.com';
    if (!isVimeo && !isDailyMotion) {
      setErrorSearch(
        'Invalid! url must be start with https://vimeo.com/ or https://www.dailymotion.com',
      );
    } else {
      setErrorSearch('');
    }
    setSearch(value);
  };

  return (
    <>
      <div className="flex items-center justify-center sm:w-[90%] md:w-[33%]">
        <Input
          placeholder="Enter url"
          className="border-none bg-white outline-none"
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button
          className="ml-2 bg-transparent text-white"
          onClick={(e) => {
            e.preventDefault();
            toast({
              title: search,
            });
          }}
        >
          Submit
        </Button>
      </div>
      <small className=" text-center italic text-red-600">{errorSearch}</small>
      <Toaster />
    </>
  );
}
