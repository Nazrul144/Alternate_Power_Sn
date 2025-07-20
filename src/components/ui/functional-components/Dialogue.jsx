'use client'
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { RadioGroup, RadioGroupItem } from '../radio-group';
import { Button } from '../button';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Dialogue = () => {
  const [service, setService] = useState('');

  useEffect(() => {
    emailjs.init('EyGO7y0039nyztZLQ');
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!service) {
      Swal.fire({
        title: "Please Select a service",
        icon: "warning",
      });
      return;
    }

    const formElement = e.target;

    // Debug - log form data
    const formData = new FormData(formElement);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs
      .sendForm(
        'service_a5654uh',
        'template_r00e2p3', // your template ID
        formElement
      )
      .then(() => {
        Swal.fire({
          title: 'Successfully submitted your details!',
          icon: 'success',
        });
        formElement.reset();
        setService('');
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        Swal.fire({
          title: 'Failed to send message.',
          text: error.text,
          icon: 'error',
        });
      });
  };

  return (
    <div className="mt-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-transparent border-[0.5px] border-white text-white hover:bg-[#e04a10] rounded-md">
            Get A Free Quote
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[775px] max-h-[80vh] overflow-y-auto bg-sky-900">
          <DialogHeader>
            <DialogTitle>
              <h1 className='text-center text-2xl font-bold'>Get Free Quote Now:</h1>
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleFormSubmit}>
            <div className="w-full flex flex-col space-y-4">

              <div className="w-full">
                <label htmlFor="first_name" className="block text-sm font-medium text-white">First Name</label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="first_name"
                  id="first_name"
                  type="text"
                  placeholder="Your First Name"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="last_name" className="block text-sm font-medium text-white">Last Name</label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="last_name"
                  id="last_name"
                  type="text"
                  placeholder="Your Last Name"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="from_email" className="block text-sm font-medium text-white">Email *</label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="from_email"
                  id="from_email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium text-white">Phone *</label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div className="mt-4">
                <h1 className="mb-2 font-semibold text-white">What service would you like?</h1>
                <RadioGroup value={service} onValueChange={setService}>
                  <div className="flex items-center gap-3 text-white">
                    <RadioGroupItem value="Electrical Installations & 24/7 Call-Outs" id="r1" name="service" />
                    <Label htmlFor="r1">Electrical Installations & 24/7 Call-Outs</Label>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <RadioGroupItem value="Solar & Battery Backup Systems" id="r2" name="service" />
                    <Label htmlFor="r2">Solar & Battery Backup Systems</Label>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <RadioGroupItem value="Waterproofing & Roof Repairs" id="r3" name="service" />
                    <Label htmlFor="r3">Waterproofing & Roof Repairs</Label>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <RadioGroupItem value="White Boxing & Commercial Painting" id="r4" name="service" />
                    <Label htmlFor="r4">White Boxing & Commercial Painting</Label>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <RadioGroupItem value="Plumbing Services" id="r5" name="service" />
                    <Label htmlFor="r5">Plumbing Services</Label>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <RadioGroupItem value="Carpentry & Property Maintenance" id="r6" name="service" />
                    <Label htmlFor="r6">Carpentry & Property Maintenance</Label>
                  </div>
                </RadioGroup>
                {/* Hidden input to send service value in form */}
                <input type="hidden" name="service" value={service} />
              </div>

              <div className="relative">
                <input
                  className="btn btn-primary text-white w-full mt-6"
                  type="submit"
                  value="Get 100% Free Quote Now"
                />
                <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dialogue;
