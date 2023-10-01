import { PrimaryButton } from "@/components/customUI";
import { CodeBlock } from "@/components/customUI/CodeBlock";
import React from "react";

const DocumentationSection = () => {
  return (
    <section className=" customContainer">
      <div className="bg-transparent flex flex-col lg:flex-row customHomepageSection">
        <div className="flex flex-col gap-10 w-full  sm:p-10 md:p-6 ">
          <h1 className="text-secondary headerText1 md:leading-[4.5rem]">
            Explore our guides and documentation.
          </h1>
          <p className="text-primary paragraphText1 ">
            Use our API to develop powerful payment products. We provide a fast
            and intuitive developer experience. Build, test, and deploy with
            speed.
          </p>

          <div>
            <PrimaryButton text="View Documentation" />
          </div>
        </div>

        <div className="w-full ">
          <CodeBlock
            code={`
const terminal = LeashPay.create({ 
    onFetchConnectionToken: server.fetchConnectionToken 
});
const result = await terminal.discoverReaders();
const reader = result.discoveredReaders[0];
await terminal.connectReader(reader);
const item = {
  description: 'Lemon Shoe',
  amount: 300,
  quantity: 2,
};
const cart = {
  lineItems: [item],
  currency: 'usd',
};
terminal.setReaderDisplay({ type: 'cart', cart });  
            `}
            language={"javascript"}
          />

          {/* <div className="mockup-code">
            <pre data-prefix="1">
              <code>npm i daisyui</code>
            </pre>
            <pre data-prefix="2">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="bg-warning text-warning-content">
              <code>Error!</code>
            </pre>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
