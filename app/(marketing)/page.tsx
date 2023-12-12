import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@storedocs/components/ui/accordion";
import { Button } from "@storedocs/components/ui/button";
import { Card, CardContent } from "@storedocs/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="flex h-20 w-full items-center bg-blue-800 text-white ">
        <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between gap-2 px-4 md:px-8">
          <Link href="/">
            <div className="text-3xl font-semibold md:text-3xl ">Storedocs</div>
          </Link>
        </div>
      </header>

      <div className="flex h-72 flex-col items-center justify-center bg-blue-800 px-4 text-center text-white md:px-8">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="text-xl">
            Open-Source web application for cloud document storage
          </h2>
          <Link href="/signin">
          <Button className="mt-8 w-fit rounded-3xl bg-blue-950 p-6 text-lg font-bold md:mt-12">
            Get Started
          </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 flex h-72 max-w-screen-lg flex-col items-center justify-center gap-8 px-4 text-center md:px-8">
        <h2 className="text-2xl font-bold">
          Secure and convenient document storage
        </h2>
        <p className="text-lg">
          Storedocs offers a secure and convenient solution for storing and
          accessing your documents from anywhere. With our easy-to-use
          interface, you can upload, download, and manage your documents with
          ease.
        </p>
      </div>

      <div className="mt-12 bg-gray-100 px-4 py-14 md:px-8 ">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-6 text-center ">
          <h2 className="text-2xl font-bold">Features</h2>
          <p className="text-lg">
            Discover the powerful features of Storedocs.
          </p>
          <div className="mt-3 grid gap-6">
            <Card>
              <CardContent className="">
                <p className="mb-4 mt-6 font-semibold">
                  User-Friendly Interface
                </p>
                <p className="text-muted-foreground">
                  Easily upload, store, and manage your documents with a simple
                  and intuitive interface.{" "}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="">
                <p className="mb-4 mt-6 font-semibold">
                  Cloud Document Storage
                </p>
                <p className="text-muted-foreground ">
                  Store your documents securely in the cloud, accessible from
                  anywhere at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-8 px-4 pb-6 pt-14 md:px-8">
        <h2 className="text-2xl font-bold">Common questions</h2>
        <p className="text-center text-lg ">
          Here are some of the most common questions we get.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold hover:no-underline">
              Is Storedocs free to use?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Storedocs is completely free to use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold hover:no-underline">
              Can I upload any type of document to Storedocs?
            </AccordionTrigger>
            <AccordionContent>
              No, Storedocs only supports PDF documents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold hover:no-underline ">
              Is my data secure on Storedocs?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Storedocs takes data security very seriously. All documents
              uploaded to Storedocs are encrypted and stored securely in the
              cloud.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-0">
            <AccordionTrigger className="font-semibold hover:no-underline">
              Can I access my documents from any device?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Storedocs in a web-based application that can be accessed
              from any device with an internet connection.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-12 bg-black text-center text-white ">
        <div className="mx-auto flex h-56 max-w-screen-lg flex-col items-center justify-center  gap-8 px-4  md:px-8">
          <p>© 2023 Storedocs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="https://twitter.com/johnnjuki_">
              <Twitter />
            </Link>
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}
