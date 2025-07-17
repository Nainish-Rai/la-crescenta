const Contact8 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold text-vet-primary">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Crescenta Valley Veterinary Hospital is here to provide
            compassionate, high-quality care for your pets. Reach out with
            questions or to book an appointment.
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl gap-4 md:grid-cols-2">
          <div className="h-full rounded-lg border object-cover">
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?q=3254+Foothill+Blvd+Glendale,+CA+91214+USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-accent p-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-lg bg-background p-6">
              <p className="text-2xl">Email</p>
              <div className="flex flex-col">
                <a>cvvethospital@gmail.com</a>
                <a>info@cvvet.com</a>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between gap-6 rounded-md bg-background p-6">
              <p className="text-2xl">Contact & Location</p>
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div>
                  <p className="mb-2 text-xl text-muted-foreground md:mb-4">
                    Crescenta Valley Veterinary Hospital
                  </p>
                  <p>3254 Foothill Blvd, Glendale, CA 91214</p>
                  <p>
                    <span className="text-muted-foreground">Phone:</span> (818)
                    249-0022
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fax:</span> (818)
                    249-0044
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://www.cvvet.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.cvvet.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xl text-muted-foreground md:mb-4">
                    Hours of Operation
                  </p>
                  <p>Mon–Fri: 8:30 AM – 5:00 PM</p>
                  <p>Sat–Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact8 };
