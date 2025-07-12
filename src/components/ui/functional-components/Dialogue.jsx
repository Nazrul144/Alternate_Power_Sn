import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { FaLongArrowAltRight } from 'react-icons/fa';
import { RadioGroup, RadioGroupItem } from '../radio-group';
import { Button } from '../button';


const Dialogue = () => {

    const [service, setService] = useState(null)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!service) {
            toast.error("Please Select a service")
            return; // Prevent form submission
        }

        const formData = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.from_email.value,
            phone: e.target.phone.value,
            service: service
        }
        setService(formData)
        toast.success('Successfully submitted your details!')
    }

    console.log(service)

    return (
        <div className="mt-6">
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="bg-[#ff3811] text-white hover:bg-[#e04a10] rounded-md">Get A Free Quote</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[775px] max-h-[80vh] overflow-y-auto bg-sky-900">
                        <DialogHeader>
                            <DialogTitle>
                                <h1 className='text-center text-2xl font-bold'>Get Free Quote Now:</h1>
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                {/*Contact Form*/}
                                <div>
                                    {/* Form*/}
                                    <div className="bg-transparent border-[1px] border-sky-200 shadow-xl p-12 my-12 rounded-lg lg:px-32">
                                        <form onSubmit={handleFormSubmit}>
                                            <div className="w-full flex flex-col space-y-4">
                                                {/* First Name */}
                                                <div className="w-full">
                                                    <label htmlFor="user_name" className="block text-sm font-medium text-white">First Name</label>
                                                    <input
                                                        className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                                                        name="first_name"
                                                        id="user_name"
                                                        type="text"
                                                        placeholder="Your First Name"
                                                    />
                                                </div>

                                                {/* Last Name */}
                                                <div className="w-full">
                                                    <label htmlFor="last_name" className="block text-sm font-medium text-white">Last Name</label>
                                                    <input
                                                        className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                                                        name="last_name"
                                                        id="last_name"
                                                        type="text"
                                                        placeholder="Your Last Name"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="w-full">
                                                    <label htmlFor="email" className="block text-sm font-medium text-white">Email *</label>
                                                    <input
                                                        className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                                                        name="from_email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div className="w-full">
                                                    <label htmlFor="phone" className="block text-sm font-medium text-white">Phone *</label>
                                                    <input
                                                        className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                                                        name="phone"
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="Your Phone Number"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/*Radio Group*/}
                                            <div className="mt-4">
                                                <h1 className="mb-2 font-semibold text-white">What service would you like?</h1>
                                                <RadioGroup value={service} onValueChange={setService}>
                                                    <div className="flex items-center gap-3 text-white">
                                                        <RadioGroupItem value="electrical_call" id="r1" name="service" />
                                                        <Label htmlFor="r1" >Electrical Installations & 24/7 Call-Outs </Label>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-white">
                                                        <RadioGroupItem value="inverter_installtion" id="r2" name="service" />
                                                        <Label htmlFor="r2">Solar & Battery Backup Systems </Label>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-white">
                                                        <RadioGroupItem value="solar_installation" id="r3" name="service" />
                                                        <Label htmlFor="r3">Waterproofing & Roof Repairs</Label>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-white">
                                                        <RadioGroupItem value="white_boxing" id="r3" name="service" />
                                                        <Label htmlFor="r3">White Boxing & Commercial Painting</Label>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-white">
                                                        <RadioGroupItem value="plumbing_service" id="r3" name="service" />
                                                        <Label htmlFor="r3">Plumbing Services</Label>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-white">
                                                        <RadioGroupItem value="carpentry" id="r3" name="service" />
                                                        <Label htmlFor="r3">Carpentry & Property Maintenance</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <div className="relative">
                                                <input className="btn btn-primary text-white w-full mt-6" type="submit" value="Get 100% Free Quote Now" />
                                                <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    )
}

export default Dialogue