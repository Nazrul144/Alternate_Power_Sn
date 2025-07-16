import Image from "next/image";
import React from "react";

const PowerSolutionsDetailsPage = () => {
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Alternate Power Solutions Maintenance</h1>
          <p className="text-lg text-gray-600 mt-4">
            Essential steps for maintaining your renewable energy systems and ensuring long-lasting performance.
          </p>
          <Image src="/energy.webp" width={1000} height={800} alt="Power Solutions Maintenance Hero" className="w-full h-64 object-cover mt-6 rounded-lg" />
        </div>

        <div className="space-y-8">
          <p className="text-gray-700 text-lg">
            Regular maintenance of alternate power solutions, including solar, wind, and energy storage systems, is essential for ensuring optimal performance, energy efficiency, and system reliability. Over time, components such as solar panels, wind turbines, and batteries can degrade, accumulate dirt, or lose effectiveness. Ensuring proper care and maintenance is crucial to keeping these systems running smoothly and preventing costly repairs.
          </p>

          <p className="text-gray-700 text-lg">Here’s a detailed step-by-step guide to performing proper maintenance on alternate power solutions:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <Image src="/assets/blog/power/tools.jpg" width={500} height={400} alt="Step 1: Gather Your Tools" className="w-full h-40 object-cover" /> */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 1: Gather Your Tools</h3>
                <p className="text-gray-600 mt-2">
                  Ensure you have all the necessary tools for maintenance, such as a voltage tester, cleaning supplies for solar panels, inspection tools for wind turbines, and a multimeter for battery testing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <Image src="/assets/blog/power/inspection.jpg" width={500} height={400} alt="Step 2: Inspect the System" className="w-full h-40 object-cover" /> */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 2: Inspect the System</h3>
                <p className="text-gray-600 mt-2">
                  Perform a thorough visual inspection of your solar panels, wind turbines, and batteries. Look for signs of damage, such as cracks in panels, debris around turbines, or leaks in battery enclosures.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <Image src="/assets/blog/power/3.jpg" width={500} height={400} alt="Step 3: Clean and Maintain Components" className="w-full h-40 object-cover" /> */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 3: Clean and Maintain Components</h3>
                <p className="text-gray-600 mt-2">
                  Clean the surface of solar panels using a soft cloth and mild detergent to remove dust and debris. For wind turbines, check the blades for any dirt buildup and remove it to ensure optimal performance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <Image src="/assets/blog/power/battery.webp" width={500} height={400} alt="Step 4: Inspect Batteries" className="w-full h-40 object-cover" /> */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 4: Inspect and Test Batteries</h3>
                <p className="text-gray-600 mt-2">
                  Inspect the battery system for any signs of wear or corrosion. Test the battery voltage and ensure it’s holding a charge. Replace or service any weak batteries.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <Image src="/assets/blog/power/rep.webp" width={500} height={400} alt="Step 5: Repair Damaged Components" className="w-full h-40 object-cover" /> */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 5: Repair Damaged Components</h3>
                <p className="text-gray-600 mt-2">
                  If any component is damaged, such as a cracked solar panel or a malfunctioning inverter, replace or repair the part immediately to avoid further damage or energy loss.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <Image src="/assets/blog/power/6.jpg" width={500} height={400} alt="Step 6: Testing and Calibration" className="w-full h-40 object-cover" /> */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 6: Testing and Calibration</h3>
                <p className="text-gray-600 mt-2">
                  After cleaning and repairs, test the system to ensure it is operating correctly. Use tools like a multimeter to verify electrical connections, and adjust calibration settings as needed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Why Regular Maintenance for Alternate Power Solutions Is Important</h2>
            <p className="text-gray-700 mt-4">
              Regular maintenance of alternate power solutions ensures they continue to operate efficiently, maximizing energy output and extending their lifespan. It also helps identify potential issues before they result in costly breakdowns or energy losses. Well-maintained systems are more reliable and provide a steady source of renewable energy, helping to reduce reliance on non-renewable sources and lower energy costs.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600">
            Book Your Power Solutions Maintenance Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default PowerSolutionsDetailsPage;
