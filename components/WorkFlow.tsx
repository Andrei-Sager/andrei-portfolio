import { WorkflowSectionContent } from "@/constants";

export default function Workflow() {
  return (
    <div
      id="workflow"
      className="sectionPadding workflow gap-[75px] relative md:h-[100vh] md:max-h-[500px]"
    >
      <div className="w-full !text-center">
        <h1 className="sectionOverline !text-center">Workflow</h1>
        <h1 className="sectionHeading !text-center">My Thought Process</h1>
        <span className="w-[60px] h-[5px] bg-secondary-red mt-2 rounded-md" />
      </div>
      <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-[30px] md:gap-[25px]">
        {WorkflowSectionContent.map(({ number, title, description }, index) => (
          <li
            key={index}
            className="w-full aspect-video relative border border-neutral-100 rounded-md bg-white hover:shadow-xl hover:-translate-y-3 transition-all duration-500 px-4 py-10 text-center group inline-block z-10"
          >
            <span className="w-[50px] aspect-square absolute -top-[30px] left-[50%] -translate-x-1/2 bg-secondary-red rounded-full text-white font-bold text-2xl flex items-center justify-center shadow-lg !z-20">
              {number}
            </span>
            <h1 className="sectionHeading-2 !text-center">{title}</h1>
            <p className="sectionDescription !text-justify mt-2">
              {description}
            </p>
            <span className="ease absolute top-0 left-0  h-0 w-0 border-t-2 border-secondary-red transition-all duration-500 group-hover:w-1/2" />
            <span className="ease absolute top-0 right-0 h-0 w-0 border-b-2 border-secondary-red transition-all duration-500 group-hover:w-1/2 rounded-lg" />
            <span className="ease absolute bottom-0 left-0  h-0 w-0 border-t-2 border-secondary-red transition-all duration-1000 group-hover:w-1/2" />
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-secondary-red transition-all duration-1000 group-hover:w-1/2" />
          </li>
        ))}
      </ul>
      {/* <Image
        src={"/patterns/bg-services__mobile.svg"}
        fill
        alt="Nothing"
        className="absolute inset-0 z-[1]"
      /> */}
    </div>
  );
}
