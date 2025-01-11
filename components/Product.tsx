import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

const Product = () => {
  return (
    <div>
      <h2 className="">Product</h2>
      <div>
        <div className="card relative">
          <div className="bg-white pb-4">
            <div className="sm:flex sm:justify-between sm:content-center py-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/lob_logo.jpg"
                  alt="Lob logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <p className="text-2xl sm:text-4xl font-bold">Lob</p>
              </div>
              <div className="flex flex-col sm:items-end">
                <p className="text-md sm:text-lg font-medium text-gray-500">
                  Sr. Director of Product
                </p>
                <p className="text-gray-400">2021-2024</p>
              </div>
            </div>
            <p>
              I led the product team at{" "}
              <Link
                className={`font-medium`}
                href="https://www.lob.com"
                target="_blank"
              >
                Lob
              </Link>
              , a marketplace platform that makes it easy for customers to send
              and automate large scale direct mail campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/lob-qr-code.png"
                    alt="Lob screenshot 1"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src="/lob-qr-code.png"
                    alt="Lob screenshot 1"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <Image
                    src="/lob-analytics.png"
                    alt="Lob screenshot 2"
                    width={1600}
                    height={1200}
                    className="rounded-lg w-full border border-gray-100 hover:opacity-90 transition-opacity"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/lob-analytics.png"
                  alt="Lob screenshot 2"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <Image
                    src="/lob-audience.png"
                    alt="Lob screenshot 3"
                    width={1600}
                    height={1200}
                    className="rounded-lg w-full border border-gray-100 hover:opacity-90 transition-opacity"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/lob-audience.png"
                  alt="Lob screenshot 3"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/lob-integrations.png"
                    alt="Lob screenshot 4"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src="/lob-integrations.png"
                    alt="Lob screenshot 4"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="card relative">
          <div className="bg-white pb-4">
            <div className="sm:flex sm:justify-between sm:content-center py-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/gubagoo-icon.png"
                  alt="Gubagoo logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <p className="text-2xl sm:text-4xl font-bold pr-2">Gubagoo</p>
                <p className="bg-green-100 text-green-700 rounded-full px-4 py-1 flex items-center text-sm font-medium">
                  Acquired
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <p className="text-md sm:text-lg font-medium text-gray-500">
                  Director of Product
                </p>
                <p className="text-gray-400">2018-2021</p>
              </div>
            </div>
            <p>
              I led the product team at{" "}
              <Link
                className={`font-medium`}
                href="https://www.gubagoo.com"
                target="_blank"
              >
                Gubagoo
              </Link>
              , where we built products enabling automotive dealerships and
              their customers to sell and buy cars fully online.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/guba-payments.webp"
                    alt="Gubagoo screenshot 1"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src="/guba-payments.webp"
                    alt="Gubagoo screenshot 1"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/guba-lenders.webp"
                    alt="Gubagoo screenshot 2"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/guba-lenders.webp"
                  alt="Gubagoo screenshot 2"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/guba-showroom-1.png"
                    alt="Gubagoo screenshot 3"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/guba-showroom-1.png"
                  alt="Gubagoo screenshot 3"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/guba-showroom-2.png"
                    alt="Gubagoo screenshot 4"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/guba-showroom-2.png"
                  alt="Gubagoo screenshot 4"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="card relative">
          <div className="bg-white pb-4">
            <div className="sm:flex sm:justify-between sm:content-center py-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/Cohley-logo.png"
                  alt="Cohley logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <p className="text-2xl sm:text-4xl font-bold pr-4">Cohley</p>
              </div>
              <div className="flex flex-col sm:items-end">
                <p className="text-md sm:text-lg font-medium text-gray-500">
                  Product & Design Consultant
                </p>
                <p className="text-gray-400">2020-2022</p>
              </div>
            </div>
            <p>
              I designed core product experiences and built the the marketing
              .com website for{" "}
              <Link
                className={`font-medium`}
                href="https://www.cohley.com"
                target="_blank"
              >
                Cohley
              </Link>
              , a leading social marketplace that connects brands with social
              media influencers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/cohley-campaigns.png"
                    alt="Cohley screenshot 4"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/cohley-campaigns.png"
                  alt="Cohley screenshot 4"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/cohley-brand.png"
                    alt="Cohley screenshot 1"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/cohley-brand.png"
                  alt="Cohley screenshot 1"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/cohley-influencer.png"
                    alt="Cohley screenshot 2"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/cohley-influencer.png"
                  alt="Cohley screenshot 2"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer aspect-[4/3] bg-gray-50 relative">
                  <Image
                    src="/cohley-performance.png"
                    alt="Cohley screenshot 3"
                    fill
                    className="rounded-lg border border-gray-100 hover:opacity-90 transition-opacity object-contain p-2"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh]">
                <Image
                  src="/cohley-performance.png"
                  alt="Cohley screenshot 3"
                  width={1600}
                  height={1200}
                  className="rounded-lg w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <p>
          See more on{" "}
          <Link
            className={`font-medium`}
            href="https://www.linkedin.com/in/timmarks90/"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Product;
