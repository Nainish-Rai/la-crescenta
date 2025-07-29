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

        {/* Emergency Hospitals Table */}
        <div className="mx-auto mt-24 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold text-vet-primary">
              After Hours Emergency Care
            </h2>
            <p className="text-lg text-muted-foreground">
              When your pet needs immediate care outside our regular hours
            </p>
          </div>

          <div className="rounded-lg border bg-background overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-accent">
                    <th className="text-left p-4 font-semibold text-vet-primary">
                      Hospital
                    </th>

                    <th className="text-left p-4 font-semibold text-vet-primary">
                      Contact / Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-vet-primary">
                        Eagle Rock Animal Emergency
                      </div>
                      <div className="text-sm text-muted-foreground">
                        4254 Eagle Rock Blvd, Los Angeles 90065
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-sm">24 hrs daily</div>
                      <div className="text-sm">☎ 323-507-2301</div>
                      <a
                        href="https://erae.vet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-vet-primary hover:underline"
                      >
                        erae.vet
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-vet-primary">
                        VCA Animal Specialty Group (ASG)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        4641 Colorado Blvd, Los Angeles 90039
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-sm">24 hrs daily</div>
                      <div className="text-sm">☎ 818-244-7977</div>
                      <a
                        href="https://vcahospitals.com/animal-specialty-group-los-angeles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-vet-primary hover:underline"
                      >
                        vcahospitals.com
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-vet-primary">
                        LAASER – Los Angeles Animal Specialty, Emergency & Rehab
                      </div>
                      <div className="text-sm text-muted-foreground">
                        2500 N San Fernando Rd, Los Angeles 90065
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-sm">24 hrs daily</div>
                      <div className="text-sm">☎ 323-800-8387</div>
                      <a
                        href="https://laaser.vet/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-vet-primary hover:underline"
                      >
                        laaser.vet
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-accent/50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-vet-primary">
                        ACCESS Specialty Animal Hospital – Pasadena
                      </div>
                      <div className="text-sm text-muted-foreground">
                        2570 E Foothill Blvd, Pasadena 91107
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-sm">24 hrs daily</div>
                      <div className="text-sm">☎ 626-993-9600</div>
                      <a
                        href="https://accessvetspasadena.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-vet-primary hover:underline"
                      >
                        accessvetspasadena.com
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/50 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-vet-primary">
                        VCA TLC Pasadena Veterinary Specialty & Emergency
                      </div>
                      <div className="text-sm text-muted-foreground">
                        1412 Huntington Dr, South Pasadena 91030
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-sm">
                        Open 24 hrs most days (check ahead)
                      </div>
                      <div className="text-sm">☎ 626-441-8555</div>
                      <a
                        href="https://vcahospitals.com/tlc-pasadena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-vet-primary hover:underline"
                      >
                        vcahospitals.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact8 };
