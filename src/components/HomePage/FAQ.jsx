import React from 'react'
import { Button } from '../ui/button'

const FAQ = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-2xl mb-12 text-center font-bold'>Frequently Asked Questions</h1>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold text-xl">What services do you offer?</div>
                <div className="collapse-content text-lg">We offer a wide range of services, including electrical installations, solar energy solutions, battery backup systems, <br />
                    waterproofing, roof repair, and plumbing services. Our services are available for residential, commercial, and <br /> industrial properties.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">How can I get a quote for your services?</div>
                <div className="collapse-content text-lg">You can easily get a quote by contacting us through our contact form on the website, or by giving us a call. <br />
                    We’ll assess your needs and provide you with a competitive and transparent estimate for the services <br /> you require.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">Do you provide solar energy solutions for homes and businesses?</div>
                <div className="collapse-content text-lg">Yes! We specialize in solar panel installations and solar-powered backup solutions for both residential <br />
                    and commercial properties. Our goal is to help you reduce energy costs and switch to a more <br /> sustainable and eco-friendly energy source.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">What makes your plumbing services different?</div>
                <div className="collapse-content text-lg">Our plumbing services cover everything from installations to emergency repairs and maintenance. <br />
                    We pride ourselves on offering high-quality, efficient solutions that ensure your plumbing system <br /> is working
                    smoothly, while providing excellent customer service with quick response times.</div>
            </div>
            <div>
                <Button>Click me</Button>
            </div>
            <div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Product Information</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>
                            <p>
                                Key features include advanced processing capabilities, and an
                                intuitive user interface designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Shipping Details</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Return Policy</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ